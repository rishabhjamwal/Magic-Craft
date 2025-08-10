import { FC, useMemo, useEffect, useState, useCallback } from "react";
import { useAtom, useAtomValue } from "jotai";
import memoize from "mem";
import axios from "axios";
import { Route } from "@lifi/types";
import { ZeroAddress } from "ethers";
import {
  LiFiWidget,
  WidgetConfig,
  RouteExecutionUpdate,
  useWidgetEvents,
  WidgetEvent,
} from "packages/lifi-widget";
import { LanguageKey } from "packages/lifi-widget/providers";
import { useAtomsAll, useLazyAtomValue } from "lib/atom-utils";

import { getLiFiProvider } from "core/client/lifi-provider";
import { TokenType, SelfActivityKind } from "core/types";
import { parseTokenSlug } from "core/common/tokens";
import { TEvent, trackEvent } from "core/client";

import { useAccounts, useChainId } from "app/hooks";
import { useAllAccountTokens } from "app/hooks/tokens";
import {
  currentLocaleAtom,
  tokenSlugAtom,
  currenciesRateAtom,
  selectedCurrencyAtom,
  getAllNativeTokensAtom,
  swapVerifiedTokensAtom,
} from "app/atoms";

const resources = [
  "https://ipfs.io/ipns/tokens.uniswap.org",
  "https://ipfs.io/ipns/extendedtokens.uniswap.org",
];

const getVerifiedTokens = memoize(
  async () => {
    const tokenPromises = resources.map((url) =>
      axios.get(url).then((response) => response.data.tokens),
    );

    const response = await Promise.all(tokenPromises);
    const fullTokensList = response.reduce((acc, curr) => {
      return [...acc, ...curr];
    }, []);

    const networks: number[] = [];

    fullTokensList.forEach((token: any) => {
      if (!networks.includes(token.chainId)) {
        networks.push(token.chainId);
      }
    });

    const nativeTokens = networks.map((token) => {
      return {
        address: ZeroAddress,
        chainId: token,
      };
    });

    return [
      ...fullTokensList.map((item: any) => ({
        address: item.address,
        chainId: item.chainId,
      })),
      ...nativeTokens,
    ];
  },
  {
    maxAge: 300_000,
    cacheKey: (args) => args.join("_"),
  },
);

const Swap: FC = () => {
  const currentLocale = useAtomValue(currentLocaleAtom);
  const { currentAccount } = useAccounts();
  const chainId = useChainId();
  const tokenSlug = useAtomValue(tokenSlugAtom);
  const [fee, setFee] = useState<number | undefined>(0.01);
  const [chainsOrder, setChainsOrder] = useState<number[] | null>(null);
  const [hideVerifiedToggle, setHideVerifiedToggle] = useState<boolean>(false);

  const { tokens } = useAllAccountTokens(
    TokenType.Asset,
    currentAccount.address,
    {
      search: undefined,
    },
  );

  const accountNativeTokens = useLazyAtomValue(
    getAllNativeTokensAtom(currentAccount.address),
    "off",
  );

  const balancesMap = useMemo(
    () =>
      accountNativeTokens
        ? new Map(accountNativeTokens.map((t) => [t.chainId, t.portfolioUSD]))
        : null,
    [accountNativeTokens],
  );

  const [currenciesRate, selectedCurrency] = useAtomsAll([
    currenciesRateAtom,
    selectedCurrencyAtom,
  ]);

  useEffect(() => {
    if (balancesMap) {
      const arrayFromMap = Array.from(balancesMap);
      const sortedArray = arrayFromMap.sort(
        (a: any, b: any) => parseFloat(b[1]) - parseFloat(a[1]),
      );
      const currentChainId = chainId;
      const currentChainIdIndex = sortedArray.findIndex(
        ([chainId]) => chainId === currentChainId,
      );

      if (currentChainIdIndex !== -1) {
        const [constantItem] = sortedArray.splice(currentChainIdIndex, 1);
        sortedArray.unshift(constantItem);
      }
      const sortedChainIds = sortedArray.map(([chainId]) => chainId);
      setChainsOrder(sortedChainIds as number[]);
    }
  }, [balancesMap, chainId]);

  const widgetEvents = useWidgetEvents();

  useEffect(() => {
    const onRouteExecutionStarted = (route: any) => {
      trackEvent(TEvent.SwapStarted, {
        fromToken: route?.fromToken?.symbol,
        toToken: route?.toToken?.symbol,
        fromChainId: route?.fromChainId,
        toChainId: route?.toChainId,
      });

      console.log("onRouteExecutionStarted fired.", route);
    };
    const onRouteExecutionUpdated = (update: RouteExecutionUpdate) => {
      console.log("onRouteExecutionUpdated fired.", update);
    };
    const onRouteExecutionCompleted = (route: any) => {
      trackEvent(TEvent.SwapFinished, {
        fromToken: route?.fromToken?.symbol,
        toToken: route?.toToken?.symbol,
        fromChainId: route?.fromChainId,
        toChainId: route?.toChainId,
      });

      console.log("onRouteExecutionCompleted fired.", route);
    };
    const onRouteExecutionFailed = (update: RouteExecutionUpdate) => {
      console.log("onRouteExecutionFailed fired.", update);
    };
    const onRouteHighValueLoss = (update: any) => {
      console.log("onRouteHighValueLoss continued.", update);
    };

    const onWalletConnected = () => {
      console.log("onWalletConnected");
    };

    widgetEvents.on(WidgetEvent.RouteExecutionStarted, onRouteExecutionStarted);
    widgetEvents.on(WidgetEvent.RouteExecutionUpdated, onRouteExecutionUpdated);
    widgetEvents.on(
      WidgetEvent.RouteExecutionCompleted,
      onRouteExecutionCompleted,
    );
    widgetEvents.on(WidgetEvent.RouteExecutionFailed, onRouteExecutionFailed);
    widgetEvents.on(WidgetEvent.RouteHighValueLoss, onRouteHighValueLoss);
    widgetEvents.on(WidgetEvent.WalletConnected, onWalletConnected);
    return () => widgetEvents.all.clear();
  }, [widgetEvents]);

  const provider = getLiFiProvider(chainId);
  const signer = provider.getSigner(currentAccount.address);

  const [verifiedTokens, setVerifiedTokens] = useState<null | any>(null);

  const [showOnlyVerified, setShowOnlyVerified] = useAtom(
    swapVerifiedTokensAtom,
  );

  const handleGetVerifiedTokens = useCallback(async () => {
    const tokens = await getVerifiedTokens();
    const tokensInCurrentChain = tokens.filter(
      (item) => item.chainId === chainId,
    );
    if (tokensInCurrentChain.length === 0) {
      setShowOnlyVerified(false);
      setHideVerifiedToggle(true);
    } else {
      setVerifiedTokens(tokens);
      setHideVerifiedToggle(false);
    }
  }, [chainId, setShowOnlyVerified]);

  useEffect(() => {
    handleGetVerifiedTokens();
  }, [handleGetVerifiedTokens]);

  const handleBeforeTransaction = useCallback((metadata: Route) => {
    if (metadata) {
      const transactionProvider = getLiFiProvider(metadata.fromChainId);

      transactionProvider.setActivitySource({
        type: "self",
        kind: SelfActivityKind.Swap,
        swapMeta: metadata,
      });
    }
  }, []);

  const handleChangeFee = useCallback((newFee: undefined | number) => {
    setFee(newFee);
  }, []);

  const handleShowFullList = useCallback(
    (flag: any) => {
      setShowOnlyVerified(flag);
    },
    [setShowOnlyVerified],
  );

  const tokensList = useMemo(() => {
    if (!verifiedTokens) return;
    const balanceTokens = tokens.map((item) => ({
      address: parseTokenSlug(item.tokenSlug).address,
      chainId: item.chainId,
    }));
    const tokensToShow = [...verifiedTokens, ...balanceTokens];
    return showOnlyVerified ? tokensToShow : [];
  }, [showOnlyVerified, verifiedTokens, tokens]);

  const widgetConfig = useMemo((): WidgetConfig => {
    return {
      onBeforeTransaction: (metadata: Route) =>
        handleBeforeTransaction(metadata),
      onChangeFee: (newFee: number | undefined) => handleChangeFee(newFee),
      onShowFullList: (flag: boolean) => handleShowFullList(flag),
      integrator: "wigwam",
      variant: "expandable",
      selectedCurrency: selectedCurrency,
      currencyRate: currenciesRate[selectedCurrency],
      chainsOrder: chainsOrder,
      showOnlyVerified: showOnlyVerified,
      hideVerifiedToggle: hideVerifiedToggle,
      languages: {
        default: currentLocale as LanguageKey,
      },
      tokens: {
        allow: tokensList,
      },
      fee: fee,
      fromChain: chainId,
      fromToken: tokenSlug
        ? parseTokenSlug(tokenSlug).address === "0"
          ? ZeroAddress
          : parseTokenSlug(tokenSlug).address
        : undefined,
      containerStyle: {
        borderRadius: "10px",
      },
      sdkConfig: {
        apiUrl: "https://li.quest/v1",
        defaultRouteOptions: {
          infiniteApproval: true,
        },
      },
      chains: {
        deny: [66, 122, 1101],
      },
      appearance: "dark",
      hiddenUI: ["appearance", "poweredBy"],
      theme: {
        palette: {
          primary: {
            main: "#F1C40F", // Shimmering gold
            light: "#F7DC6F",
            dark: "#D4AC0D",
          },
          secondary: {
            main: "#6E4B9E", // Arcane purple
            light: "#9B7FD4",
            dark: "#4A2C5A",
          },
          background: {
            paper: "#1A1B2F", // Deep midnight blue
            default: "#151629", // Darker midnight variation
          },
          text: {
            primary: "#C4B5D9", // Light arcane purple for text
            secondary: "#8A7CA8", // Muted arcane purple
          },
        },
        shape: {
          borderRadius: 12,
          borderRadiusSecondary: 10,
        },
        typography: {
          fontFamily: "Inter",
        },
      },
      walletManagement: {
        signer,
        connect: async () => {
          const signer = getLiFiProvider(chainId).getSigner(
            currentAccount.address,
          );
          return signer;
        },
        disconnect: async () => {
          console.log("disconnect");
        },
        switchChain: async (chainId: number) => {
          const newSigner = getLiFiProvider(chainId).getSigner(
            currentAccount.address,
          );
          if (newSigner) {
            return newSigner;
          } else {
            throw Error("No signer object is found after the chain switch.");
          }
        },
      },
    };
  }, [
    tokensList,
    currenciesRate,
    currentLocale,
    chainId,
    currentAccount.address,
    showOnlyVerified,
    hideVerifiedToggle,
    tokenSlug,
    fee,
    signer,
    selectedCurrency,
    handleShowFullList,
    handleBeforeTransaction,
    handleChangeFee,
    chainsOrder,
  ]);

  return (
    <div className="flex mt-[1rem] h-full overflow-x-auto overflow-y-hidden scrollbar-hide">
      <LiFiWidget
        currencyRate={widgetConfig.currencyRate}
        selectedCurrency={selectedCurrency}
        integrator={widgetConfig.integrator}
        chainsOrder={chainsOrder}
        config={widgetConfig}
      />
    </div>
  );
};

export default Swap;
