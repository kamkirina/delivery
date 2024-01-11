import cls from './Header.module.scss'
import PizzaIcon from '../../../assets/img/logoPizza.svg?react'
import ToggleIcon from '../../../assets/img/toggleTheme.svg?react'
import CartIcon from '../../../assets/img/cart.svg?react'
import {Button} from '../../../ui/Button'
import { Icon } from '../../../ui/Icon/ui/Icon'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../../hooks/useTheme'

export const Header = () => {
  const navigate  =useNavigate()

  const onClick = ()=>{
   navigate('/')
  }

 const {toggleTheme, theme} = useTheme()
 const toggleThemeHandler =()=>{
   toggleTheme()
 }
console.log(theme)
  return (
    <header className={cls.header}>
    <div className={cls.container}>
        <div className={cls.content}>
            <div className={cls.logo}>
              <Icon Svg={PizzaIcon} clicable onClick={onClick}/>
               <p>PizzaFast</p>
            </div>
            <div className={cls.buttons}>
                <Icon Svg={ToggleIcon} clicable onClick={toggleThemeHandler}/>
                
                <Button border className={cls.button}><Icon Svg={CartIcon}/>
                <span>0 P</span></Button>
            </div>
        </div>
    </div>
    </header>
  )
}
