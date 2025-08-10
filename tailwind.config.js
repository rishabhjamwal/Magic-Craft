const theme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.{html,js,mjs}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // MagicCraft Core Colors
          darkaccent: "#0F0F1A", // Darker midnight for accents
          darkbg: "#1A1B2F", // Deep midnight blue primary background
          lightgray: "#E4E4E4",
          redone: "#F1C40F", // Shimmering gold primary
          redtwo: "#F1C40F", // Shimmering gold secondary
          dark: "#1A1B2F", // Deep midnight blue
          darkblue: "#151629", // Darker midnight variation
          darklight: "#6E4B9E", // Arcane purple for highlights
          light: "#F8FCFD",
          main: "#9B7FD4", // Lighter arcane purple
          inactivelight: "#8A7CA8", // Muted arcane purple
          font: "#C4B5D9", // Light arcane purple for text
          inactivedark: "#5A4B7A", // Darker arcane purple
          gray: "#6B5B8A", // Purple-tinted gray
          darkgray: "#2A2440", // Dark purple-tinted gray
          placeholder: "#5C4E6B", // Purple placeholder
          disabledbackground: "#2F2A3E", // Dark purple disabled
          disabledcolor: "#4A4458", // Purple disabled text
          inactivedark2: "#6A5B7C", // Muted purple
          redobject: "#8B5A3C", // Warm brown for red objects
          redtext: "#D4AF37", // Golden text
          greenobject: "#6E4B9E", // Arcane purple for success
          // New MagicCraft specific colors
          arcane: "#6E4B9E", // Main arcane purple
          midnight: "#1A1B2F", // Deep midnight blue
          gold: "#F1C40F", // Shimmering gold
          goldLight: "#F7DC6F", // Light gold
          goldDark: "#D4AC0D", // Dark gold
          arcaneLight: "#9B7FD4", // Light arcane
          arcaneDark: "#4A2C5A", // Dark arcane
          spellbook: "#2C1810", // Ancient leather brown
          mysticGlow: "rgba(241, 196, 15, 0.3)", // Gold glow
          shadowMist: "rgba(110, 75, 158, 0.2)", // Purple mist
        },
      },
      fontFamily: {
        sans: ["InterVariable", ...theme.fontFamily.sans],
      },
      animation: {
        bootfadein: "fadein 0.15s ease-in",
        bootfadeinslow: "fadein 0.3s ease-in",
        bootfadeinfast: "fadein 0.1s ease-in",
        dialogcontent:
          "dialogfadein 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "waving-hand": "wave 2s linear infinite",
        modalcontent: "modalfadein 0.2s ease-out",
        modalcontentOut: "modalfadeout 0.35s ease-out",
        modalcontentinnerOut: "modalinnerfadeout 0.35s ease-out",
        activitybar:
          "barclimb 0.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards",
        stripeloading:
          "stripeloading 3s cubic-bezier(0.16, 1, 0.3, 1) 0.2s infinite",
        // MagicCraft magical animations
        shimmer: "shimmer 3s ease-in-out infinite alternate", // Gold shimmer effect
        arcaneflow: "arcaneflow 4s ease-in-out infinite", // Purple energy flow
        spellcast: "spellcast 0.8s ease-out", // Spell casting effect
        mysticglow: "mysticglow 2s ease-in-out infinite alternate", // Mystical glow
        enchanted: "enchanted 6s linear infinite", // Enchanted rotation
        spellbookopen:
          "spellbookopen 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards", // Book opening
        runeappear: "runeappear 1s ease-out forwards", // Rune appearance
        goldpulse: "goldpulse 2s ease-in-out infinite", // Gold pulsing
      },
      keyframes: {
        fadein: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        dialogfadein: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(.96)",
          },
          to: {
            opacity: "1",
            transform: "translate(-50%, -50%) scale(1)",
          },
        },
        barclimb: {
          from: {
            transform: "translate(-50%, 150%)",
          },
          to: {
            transform: "translate(-50%, 0)",
          },
        },
        modalfadein: {
          from: {
            opacity: "0",
            transform: "scale(1.04)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        modalfadeout: {
          "40%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        modalinnerfadeout: {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "60%": {
            transform: "scale(.9)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(.9)",
            opacity: "0",
          },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        stripeloading: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(300%)" },
        },
        // MagicCraft magical keyframes
        shimmer: {
          "0%": {
            backgroundPosition: "0% 50%",
            filter: "brightness(1)",
          },
          "100%": {
            backgroundPosition: "100% 50%",
            filter: "brightness(1.2)",
          },
        },
        arcaneflow: {
          "0%": {
            boxShadow: "0 0 5px rgba(110, 75, 158, 0.5)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow:
              "0 0 20px rgba(110, 75, 158, 0.8), 0 0 30px rgba(110, 75, 158, 0.4)",
            transform: "scale(1.02)",
          },
          "100%": {
            boxShadow: "0 0 5px rgba(110, 75, 158, 0.5)",
            transform: "scale(1)",
          },
        },
        spellcast: {
          "0%": {
            transform: "scale(0.8) rotate(-5deg)",
            opacity: "0.7",
            filter: "brightness(0.8)",
          },
          "50%": {
            transform: "scale(1.05) rotate(0deg)",
            opacity: "1",
            filter: "brightness(1.3)",
          },
          "100%": {
            transform: "scale(1) rotate(0deg)",
            opacity: "1",
            filter: "brightness(1)",
          },
        },
        mysticglow: {
          "0%": {
            boxShadow: "0 0 10px rgba(241, 196, 15, 0.3)",
          },
          "100%": {
            boxShadow:
              "0 0 25px rgba(241, 196, 15, 0.7), 0 0 35px rgba(241, 196, 15, 0.3)",
          },
        },
        enchanted: {
          "0%": {
            transform: "rotate(0deg)",
            filter: "hue-rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
            filter: "hue-rotate(360deg)",
          },
        },
        spellbookopen: {
          "0%": {
            transform: "perspective(1000px) rotateX(-90deg) scale(0.8)",
            opacity: "0",
          },
          "100%": {
            transform: "perspective(1000px) rotateX(0deg) scale(1)",
            opacity: "1",
          },
        },
        runeappear: {
          "0%": {
            opacity: "0",
            transform: "scale(0) rotate(180deg)",
            filter: "blur(10px)",
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.1) rotate(90deg)",
            filter: "blur(2px)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) rotate(0deg)",
            filter: "blur(0px)",
          },
        },
        goldpulse: {
          "0%": {
            boxShadow: "0 0 0 0 rgba(241, 196, 15, 0.7)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "0 0 0 10px rgba(241, 196, 15, 0)",
            transform: "scale(1.05)",
          },
          "100%": {
            boxShadow: "0 0 0 0 rgba(241, 196, 15, 0)",
            transform: "scale(1)",
          },
        },
      },
      boxShadow: {
        // MagicCraft magical shadows
        buttonaccent:
          "0px 5px 25px rgba(241, 196, 15, 0.4), 0px 0px 15px rgba(241, 196, 15, 0.2)", // Golden glow
        buttondanger: "0px 5px 25px rgba(139, 90, 60, 0.3)", // Warm brown danger
        buttonsecondary: "0px 4px 15px rgba(110, 75, 158, 0.2)", // Arcane purple glow
        addaccountmodal:
          "inset 0px 0px 10px rgba(241, 196, 15, 0.1), inset 0px 2px 4px rgba(110, 75, 158, 0.15)", // Gold and purple inset
        receiveqrcode:
          "inset 0px 0px 10px rgba(241, 196, 15, 0.1), inset 0px 2px 4px rgba(110, 75, 158, 0.15)", // Magical QR glow
        approvestack: "0px -1px 1px #4A2C5A", // Dark arcane shadow
        "popup-bg": "0px -10px 24px 0px rgba(26, 27, 47, 0.5)", // Midnight shadow
        "popup-nav": "0px -10px 24px 0px rgba(26, 27, 47, 0.7)", // Deeper midnight
        // New magical shadows
        spellbook:
          "0px 8px 32px rgba(44, 24, 16, 0.6), inset 0px 1px 2px rgba(241, 196, 15, 0.1)", // Ancient tome
        mysticglow:
          "0px 0px 20px rgba(241, 196, 15, 0.5), 0px 0px 40px rgba(241, 196, 15, 0.2)", // Intense gold glow
        arcaneborder:
          "0px 0px 15px rgba(110, 75, 158, 0.4), inset 0px 1px 1px rgba(110, 75, 158, 0.2)", // Purple magic border
        enchanted:
          "0px 4px 20px rgba(110, 75, 158, 0.3), 0px 0px 10px rgba(241, 196, 15, 0.2)", // Mixed magical glow
      },
      dropShadow: {
        profileinitial: "0px 2px 5px rgba(112, 113, 129, 0.37)",
      },
      backgroundImage: {
        // MagicCraft magical gradients
        buttonaccent:
          "linear-gradient(259.09deg, rgba(241, 196, 15, var(--tw-bg-opacity)) -1.03%, rgba(247, 220, 111, var(--tw-bg-opacity)) 198.87%)", // Golden gradient
        radio: "linear-gradient(275.43deg, #F1C40F 13.81%, #D4AC0D 111.89%)", // Gold radio
        activity: "linear-gradient(220deg, #F1C40F 0.11%, #6E4B9E 90.88%)", // Gold to arcane
        addaccountcontinue:
          "linear-gradient(90.44deg, rgba(26, 27, 47, 0.95) 2.88%, rgba(21, 22, 41, 0.95) 21.54%, rgba(26, 27, 47, 0.95) 41.08%, rgba(30, 31, 52, 0.95) 81.76%, rgba(28, 29, 49, 0.95) 97.51%)", // Midnight gradient
        // New magical gradients
        spellbook:
          "linear-gradient(135deg, #2C1810 0%, #4A2C1A 50%, #2C1810 100%)", // Ancient leather
        arcanepower:
          "linear-gradient(45deg, #6E4B9E 0%, #9B7FD4 50%, #6E4B9E 100%)", // Arcane energy
        goldenshimmer:
          "linear-gradient(90deg, #F1C40F 0%, #F7DC6F 25%, #F1C40F 50%, #F7DC6F 75%, #F1C40F 100%)", // Shimmering gold
        mysticmist:
          "radial-gradient(circle, rgba(110, 75, 158, 0.3) 0%, rgba(26, 27, 47, 0.8) 70%)", // Purple mist
        enchantedcard:
          "linear-gradient(135deg, rgba(26, 27, 47, 0.9) 0%, rgba(110, 75, 158, 0.2) 50%, rgba(26, 27, 47, 0.9) 100%)", // Card background
        spellglow:
          "radial-gradient(ellipse at center, rgba(241, 196, 15, 0.4) 0%, rgba(241, 196, 15, 0.1) 50%, transparent 70%)", // Spell effect
      },
      screens: {
        mmd: { max: "767px" },
        mxs: { max: "420px" },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ addVariant, e, postcss }) => {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`,
          )}`;
        });
      });
    }),
  ],
};
