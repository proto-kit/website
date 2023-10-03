import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Logo } from "./src/components/logo";
import { Footer } from "./src/components/footer";

const config: DocsThemeConfig = {
  logo: <Logo />,
  search: {
    component: null,
  },
  project: {
    link: "https://github.com/proto-kit",
  },
  chat: {
    link: "https://x.com/proto_kit",
    icon: <div className="text-2xl">𝕏</div>,
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    component: <Footer />,
  },
  themeSwitch: {
    component: null,
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Protokit",
      canonical: "https://protokit.dev",
      title:
        "Protocol development framework for privacy enabled application chains",
      description:
        "Protokit enables developers to build zero-knowledge, interoperable and privacy preserving application chains with a minimal learning curve.",
      openGraph: {
        type: "website",
        images: [
          {
            url: "https://protokit.dev/og.png",
            width: 1200,
            height: 630,
            alt: "Protokit OG Image",
          },
        ],
      },
      additionalLinkTags: [
        {
          rel: "shortcul icon",
          href: "/logo-symbol.svg",
        },
      ],
    };
  },
  primaryHue: { light: 28, dark: 28 },
};

export default config;
