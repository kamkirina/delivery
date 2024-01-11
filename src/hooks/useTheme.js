import { useContext } from "react"
import { ThemeContext } from "../providers/ThemeProvider"
import { Theme } from "../const/theme"


export const useTheme = () => {
const {theme, setTheme} =useContext(ThemeContext)

const toggleTheme= ()=>{
    let newTheme;

    switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT
            break;
        case Theme.LIGHT:
            newTheme = Theme.DARK
            break;
        default:
            newTheme = Theme.LIGHT
            break;
    }

    setTheme(newTheme)
}

  return {
        theme: theme || Theme.LIGHT,
        toggleTheme
    }
  
}
