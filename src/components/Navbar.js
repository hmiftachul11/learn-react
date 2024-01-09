import React from 'react'
import { Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Navbar({navValue, onNavbarChange}) {
    const navigate = useNavigate();
  return (
    <div>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/about')}>About</button>
      <Nav.Link href='https://tachul.vercel.com' target='_blank' onClick={onNavbarChange}>{!navValue ? 'About' : navValue}</Nav.Link>
    </div>
  )
}
