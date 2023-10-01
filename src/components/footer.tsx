import React from 'react'
import NextImage from 'next/image'

const GITHUB_URL = 'https://github.com/proto-kit'
const X_URL = 'https://x.com/proto_kit'
const DISCORD_URL = 'https://discord.gg/AMGnGAxsKp'
const FRAMEWORK_URL = 'https://github.com/proto-kit/framework'
const STACKBLITZ_URL = 'https://stackblitz.com/github/proto-kit/starter-kit?file=src%2FBalances.ts&startScript=test'

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-background border-t py-16">
      <div className="container grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <NextImage src="/logo-symbol.svg" width={32} height={32} alt="Logo symbol" />
        </div>
        <div className="flex flex-col gap-4">
          <p>Community</p>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground">GitHub</a>
          <a href={X_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground">X.com</a>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground">Discord</a>
        </div>
        <div className="flex flex-col gap-4">
          <p>Resources</p>
          <a href={FRAMEWORK_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground">Repository</a>
          <a href={STACKBLITZ_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground">StackBlitz</a>
        </div>
        <div className="flex flex-col gap-4">
          <p>© Protokit {year}</p>
          <a href="https://palladians.xyz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm">Website by Palladians</a>
        </div>
      </div>
    </footer>
  )
}
