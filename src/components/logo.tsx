import NextImage from 'next/image'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const Logo = () => {
  return (
    <div>
      <NextImage src={`${basePath}/logo-dark.svg`} width={120} height={40} alt="Logo Dark" className="hidden dark:flex" />
      <NextImage src={`${basePath}/logo-light.svg`} width={120} height={40} alt="Logo Light" className="flex dark:hidden" />
    </div>
  )
}
