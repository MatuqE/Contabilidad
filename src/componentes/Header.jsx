import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Link className='m-2' to='/'>Ir a Home</Link>
        <Link className='m-2' to='/Crud'>Ir a Crear Factura</Link>
    </div>
  )
}

export default Header