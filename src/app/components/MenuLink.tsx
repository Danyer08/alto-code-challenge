import React from 'react'
import { MenuLinkProps } from '../types/props/menu-link-props.type'

const MenuLink = ({ href, label }: MenuLinkProps) => {
  return (
    <li>
      <a href={href}>{label}</a>
    </li>
  )
}

export default MenuLink
