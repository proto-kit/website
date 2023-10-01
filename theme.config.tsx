import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Logo } from './src/components/logo'
import { ThemeToggle } from './src/components/theme-toggle'

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://x.com',
    icon: <div className="text-2xl">𝕏</div>
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: <div className="flex flex-col gap-2">
      <div className="text-lg font-semibold">© Protokit {new Date().getFullYear()}</div>
      <div className="text-sm">
        <a href="https://palladians.xyz" target="_blank" rel="noreferrer noopener">Website by Palladians</a>
      </div>
    </div>
  },
  themeSwitch: {
    component: <ThemeToggle />
  },
  primaryHue: { light: 28, dark: 28 },
}

export default config
