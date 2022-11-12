import { useContext } from 'react'
import { MoonIcon, SunIcon } from '../commons/icons'
import { ThemeContext } from 'styled-components'
import { ThemeHandler } from './style'

function ButtonTheme() {
  const { isLight, setLight } = useContext(ThemeContext)

  const handleTheme = () => {
    setLight(!isLight)
  }

  return (
    <ThemeHandler onClick={handleTheme}>
      {isLight ? <MoonIcon /> : <SunIcon/> }
      {isLight ? 'Dark Mode' : 'Light Mode'}
    </ThemeHandler>
  )
}

export default ButtonTheme
