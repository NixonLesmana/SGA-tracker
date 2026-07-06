import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className="flex items-center justify-between  px-8 py-4">
      <Link href="/" className='font-bold'>
        SGA Tracker
      </Link>

      <nav className='flex gap-4'>
        <Link href="/">Home</Link>
        <Link href="/best-games">Best Games</Link>
        <Link href="/mvp-watch">MVP Watch</Link>
        <Link href="/compare">Compare</Link>
        <Link href="/playoffs">Playoffs</Link>
        <Link href="/timeline">Timeline</Link>
      </nav>
    </header>
  )
}

export default Header