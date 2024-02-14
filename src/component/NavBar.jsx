import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div>
        <h1>        
            <Link href="/">Home</Link>
        </h1>
        <div>
            <Link href="/counter">Counter</Link>
        </div>
        <div>
            <Link href="/pokemon">Pokemon</Link>
        </div>
    </div>
  )
}

export default NavBar;