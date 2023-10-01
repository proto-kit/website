import React from 'react'
import { Card } from '@/components/ui/card'
import NextImage from 'next/image'

export const MerkleTree = () => {
  return (
    <section className="container flex flex-col gap-8">
      <Card className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-center lg:text-left bg-gradient-to-b from-indigo-300 dark:from-indigo-950 to-gray-100 dark:to-gray-900 p-8 lg:p-16 border-none">
        <div className="container flex flex-col gap-4">
          <h2 className="text-5xl font-bold max-w-[24rem]"><span className="text-orange-500 dark:text-orange-400">Succint Design</span> by any means.</h2>
          <p className="leading-8">Protokit goes hand in hand with Mina Protocol's Succinct Design philosophy, using best-of-breed cryptography.</p>
        </div>
        <div className="flex items-center justify-center">
          <NextImage src="/merkle.png" width={300} height={300} alt="Merkle Tree" className="p-8 lg:p-0" />
        </div>
      </Card>
    </section>
  )
}
