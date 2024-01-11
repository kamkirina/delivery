import { Outlet } from 'react-router-dom'
import cls from './MainLayuot.module.scss'
import { Header } from '../../../components/Header'
import { useTheme } from '../../../hooks/useTheme'


export const MainLayout = () => {

  const {theme} = useTheme()
  return (
    <div id="app" className={`app ${theme}`}>
        <Header/>
        <main className={cls.main}>
            <div className={cls.container}>
                <div className={cls.body}>
                    <p>NavBar</p>


                    <Outlet/>
                </div>
            </div>
        </main>

        <p>Footer</p>
    </div>
  )
}
