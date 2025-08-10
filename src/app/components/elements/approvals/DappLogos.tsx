import { FC } from "react";
import classNames from "clsx";

import Avatar from "app/components/elements/Avatar";
import { ReactComponent as MagicCraftIcon } from "app/icons/MagicCraft.svg";

const iconsClassNames = classNames(
  "w-[4.65rem] h-[4.75rem] min-w-[4.75rem]",
  "border border-brand-main/60",
);

const DappLogos: FC<{ firstLogoUrl?: string; dappLogoUrl?: string }> = ({
  dappLogoUrl,
}) => (
  <div className="flex items-center">
    <div
      className={classNames(
        iconsClassNames,
        "z-10",
        "flex items-center justify-center",
      )}
    >
      <MagicCraftIcon className="w-full h-full" />
    </div>
    <Avatar
      className={classNames(iconsClassNames, "-ml-7")}
      src={dappLogoUrl}
      imageClassName="min-h-[calc(100%+1px)] min-w-[calc(100%+1px)]"
    />
  </div>
);

export default DappLogos;
