import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { CopyIcon } from "lucide-react"
import NextImage from 'next/image'

const SETUP_COMMAND = 'npx degit proto-kit/starter-kit#develop my-chain'
const STACKBLITZ_URL = 'https://stackblitz.com/github/proto-kit/starter-kit?file=src%2FBalances.ts&startScript=test'
const STARTER_KIT_URL = 'https://github.com/proto-kit/starter-kit'

export const HeroGraphic = () => {
  const { toast } = useToast()
  const handleCopy = async () => {
    await navigator.clipboard.writeText(SETUP_COMMAND)
    toast({ title: 'The command has been copied to clipboard.' })
  }
  return (
    <div className="py-16 lg:py-0">
      <header className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="flex flex-col items-start gap-4 max-w-[44rem] px-4 ml-auto">
          <Button variant="secondary" size="sm" className="rounded-full" asChild>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              Follow on 𝕏
            </a>
          </Button>
          <h1 className="text-4xl font-bold leading-[3rem]">Protocol development framework for <span className="text-orange-500 dark:text-orange-400">privacy enabled</span> application chains.</h1>
          <p className="text-lg leading-8 text-accent-foreground">Protokit enables developers to build zero-knowledge, interoperable and privacy preserving application chains with a minimal learning curve.</p>
          <Card className="flex py-2 px-4 gap-2 items-center">
            <span>{SETUP_COMMAND}</span>
            <Button variant="outline" size="icon" className="w-8 h-8" onClick={handleCopy}>
              <CopyIcon size={14} />
            </Button>
          </Card>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <a href={STARTER_KIT_URL} target="_blank" rel="noopener noreferrer">
                Starter Kit
              </a>
            </Button>
            <a href={STACKBLITZ_URL} target="_blank" rel="noopener noreferrer">
              <NextImage src="/stackblitz.svg" width={220} height={40} alt="Stackblitz" />
            </a>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center p-12 rounded-bl-lg" style={{ backgroundImage: 'url(/mesh.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
          <div className="shadow-2xl shadow-black rounded-xl">
            <NextImage src="/balances.png" alt="hero" width={600} height={500} className="rounded-xl shadow-2xl" />
          </div>
        </div>
      </header>
    </div>
  )
}
