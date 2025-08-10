import { FC, PropsWithChildren } from "react";
import classNames from "clsx";

import ContentContainer from "app/components/layouts/ContentContainer";
import Sidebar from "app/components/blocks/Sidebar";
import Menu from "app/components/blocks/Menu";

import PreloadBaseAndSync from "./PreloadBaseAndSync";

let bootAnimationDisplayed = true;
const handleBootAnimationEnd = () => {
  bootAnimationDisplayed = false;
};

const MainPageLayout: FC<PropsWithChildren> = ({ children }) => (
  <PreloadBaseAndSync>
    <div
      className={classNames(
        "h-screen flex flex-col relative",
        "magiccraft-spellbook",
        bootAnimationDisplayed && "animate-spellbookopen",
      )}
      onAnimationEnd={
        bootAnimationDisplayed ? handleBootAnimationEnd : undefined
      }
    >
      {/* Magical background overlay */}
      <div className="absolute inset-0 bg-mysticmist opacity-30 pointer-events-none" />

      <ContentContainer className="flex grow max-h-screen relative z-10">
        <Sidebar />

        <main
          className={classNames(
            "w-full min-w-0 pl-6",
            "grow",
            "flex flex-col",
            "relative",
          )}
        >
          <Menu />

          <div className="grow relative">
            {/* Subtle magical glow for content area */}
            <div className="absolute inset-0 bg-spellglow opacity-20 rounded-lg pointer-events-none" />
            <div className="relative z-10">{children}</div>
          </div>
        </main>
      </ContentContainer>
    </div>
  </PreloadBaseAndSync>
);

export default MainPageLayout;
