import { useTheme } from 'next-themes'
import NextImage from 'next/image'

export const Logo = () => {
  const { theme, systemTheme } = useTheme()
  const darkTheme = theme === 'dark' || (theme === 'system' && systemTheme === 'dark')
  return (
    <div>
      {darkTheme ? <NextImage src="/logo-dark.svg" width={120} height={40} alt="Logo Dark" id="logoDark" /> :
        <NextImage src="/logo-light.svg" width={120} height={40} alt="Logo Light" id="logoLight" />}
    </div>
  )
}
