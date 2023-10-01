import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { WalletIcon, LockIcon, LayoutPanelTop, KeyboardIcon, BoxesIcon, SquareStackIcon } from 'lucide-react'

const FEATURES = [
  { title: 'Privacy Enabled', content: 'Protokit runtime modules enable opt-in privacy where required by providing seamless composability of off-chain computation with on-chain sequential transaction processing.', icon: LockIcon },
  { title: 'Succint zkVM', content: 'Chains built with Protokit run on top of our modular zkVM, which is driven by a set of recursive zk circuits that lead to a unique block proof for each block. This means that block production results in a concise proof that can be verified inexpensively.', icon: LayoutPanelTop },
  { title: 'Supercharged DevX', content: 'Protokit chains are built using O1JS, Mina\'s zero-knowledge DSL for writing provable code. This allows you to reuse the wide variety of existing tools in the JavaScript/typescript ecosystem.', icon: KeyboardIcon },
  { title: 'Modular', content: 'Combine several existing runtime, protocol, or sequencer modules into a complete application chain.', icon: BoxesIcon },
  { title: 'Interoperable', content: 'Integrate your app-chain with other existing app-chains, L2s, and rollups to avoid fragmentation of liquidity within the ecosystem.', icon: SquareStackIcon },
  { title: 'Wallet Integration', content: 'Protokit transaction format is MINA native, therefore supports the majority of existing ecosystem wallets built on top of the mina-signer.', icon: WalletIcon }
]

export const Features = () => {
  return (
    <section
      id="features"
      className="flex flex-col gap-8 bg-background py-16 items-center"
    >
      <div className="flex flex-col container gap-4 items-center text-center">
        <h2 className="text-5xl font-semibold">Features</h2>
        <p className="leading-8 text-accent-foreground">Protokit comes with selected features that are<br />designed to help you build your own application chain.</p>
      </div>
      <div className="container grid lg:grid-cols-3 grid-cols-1 gap-8">
        {FEATURES.map((feature, i) => (
          <Card key={i}>
            <CardHeader className="gap-2">
              <CardTitle className="text-orange-500 dark:text-orange-400"><feature.icon size={36} /></CardTitle>
              <CardTitle className="flex gap-2 items-center">{feature.title}</CardTitle>
              <CardDescription>{feature.content}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
