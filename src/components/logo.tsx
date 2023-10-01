import NextImage from 'next/image'

export const Logo = () => {
  return (
    <div>
      <NextImage src="/logo-dark.svg" width={120} height={40} alt="Logo Dark" className="hidden dark:flex" />
      <NextImage src="/logo-light.svg" width={120} height={40} alt="Logo Light" className="flex dark:hidden" />
    </div>
  )
}
