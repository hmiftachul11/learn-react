import React from 'react'
import { Nav } from 'react-bootstrap'

export default function Navbar({navValue, onNavbarChange}) {
  return (
    <div>
      <Nav.Link href='https://tachul.vercel.com' target='_blank' onClick={onNavbarChange}>{!navValue ? 'About' : navValue}</Nav.Link>
    </div>
  )
}
