import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Logo } from "./src/components/logo";
import { Footer } from "./src/components/footer";

const config: DocsThemeConfig = {
  logo: <Logo />,
  search: {
    placeholder: "Search docs..."
  },
  project: {
    link: "https://github.com/proto-kit",
  },
  chat: {
    link: "https://x.com/proto_kit",
    icon: <div className="text-2xl">𝕏</div>,
  },
  docsRepositoryBase: "https://github.com/proto-kit/website/tree/main/",
  footer: {
    component: <Footer />,
  },
  themeSwitch: {
    component: null,
  },
  toc: {
    extraContent: undefined,
    backToTop: true
  },
  editLink: {
  },
  feedback: {
    content: null
  },
  sidebar: {
    toggleButton: true
  },
  head: null,
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
        title: "Protokit",
        description:
          "Protokit enables developers to build zero-knowledge, interoperable and privacy preserving application chains with a minimal learning curve.",
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
