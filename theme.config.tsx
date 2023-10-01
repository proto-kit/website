import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Logo } from './src/components/logo'
import { Footer } from './src/components/footer'

const config: DocsThemeConfig = {
  logo: <Logo />,
  search: {
    component: null
  },
  project: {
    link: 'https://github.com/proto-kit',
  },
  chat: {
    link: 'https://x.com/proto_kit',
    icon: <div className="text-2xl">𝕏</div>
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    component: <Footer />
  },
  themeSwitch: {
    component: null
  },
  head: (
    <>
      <link rel="shortcut icon" href="/logo-symbol.svg" />
      <title>Protocol development framework for privacy enabled application chains - Protokit</title>
      <meta name="description" content="Protokit enables developers to build zero-knowledge, interoperable and privacy preserving application chains with a minimal learning curve." />
      <meta property="og:title" content="Protocol development framework for privacy enabled application chains - Protokit" />
      <meta property="og:description" content="Protokit enables developers to build zero-knowledge, interoperable and privacy preserving application chains with a minimal learning curve." />
      <meta property="og:image" content="https://protokit.dev/og.jpg" />
    </>
  ),
  primaryHue: { light: 28, dark: 28 },
}

export default config
