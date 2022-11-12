import ButtonTheme from '../ThemeButton/ButtonTheme'
import { HeaderStyled } from './style'
import { A } from '../commons/styles'

function Header() {
  return (
    <HeaderStyled>
      <A to='/'>Where in the world</A>
      <ButtonTheme />
    </HeaderStyled>
  )
}

export default Header
