import { Outlet } from 'react-router-dom'
import cls from './MainLayuot.module.scss'
import { Header } from '../../../components/Header'


export const MainLayout = () => {
  return (
    <div id="app" className='app app_light'>
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
