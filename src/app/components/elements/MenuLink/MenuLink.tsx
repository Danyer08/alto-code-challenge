import React from 'react'
import { MenuLinkProps } from '../../../types/props/menu-link-props.type'
import { Link } from 'react-router-dom'

const MenuLink = ({ href, label }: MenuLinkProps) => {
  return (
    <li>
      <Link to={href}>{label}</Link>
    </li>
  )
}

export default MenuLink
