import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-orange-500 flex items-center justify-between">
      <Link href="/" className="font-bold text-sm md:text-xl uppercase">Pizza Pazza</Link>
      <p className="text-sm uppercase">© All rights reserved.</p>
    </div>
  )
}

export default Footer
