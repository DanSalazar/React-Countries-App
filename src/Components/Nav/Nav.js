import React from 'react'
import ButtonTheme from '../ThemeButton/ButtonTheme'
import { NavStyled } from './style'

function Nav() {
  return (
    <NavStyled>
      <p> Where in the world? </p>
      <ButtonTheme />
    </NavStyled>
  )
}

export default Nav
