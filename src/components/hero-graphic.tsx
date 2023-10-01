import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { CopyIcon } from "lucide-react"
import NextImage from 'next/image'

const SETUP_COMMAND = 'npx degit proto-kit/starter-kit#develop my-chain'

export const HeroGraphic = () => {
  const { toast } = useToast()
  const handleCopy = async () => {
    await navigator.clipboard.writeText(SETUP_COMMAND)
    toast({ title: 'The command has been copied to clipboard.' })
  }
  return (
    <div>
      <header className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col items-start gap-4">
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
            <Button size="lg">Get Started</Button>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center animate-in fade-in duration-500 slide-in-from-right-4">
          <NextImage src="/balances-dark.png" alt="hero" width={500} height={400} className="flex dark:hidden rounded-lg" />
          <NextImage src="/balances-light.png" alt="hero" width={500} height={400} className="hidden dark:flex rounded-lg" />
        </div>
      </header>
    </div>
  )
}
