import { Outlet } from 'react-router-dom'
import cls from './MainLayuot.module.scss'


export const MainLayout = () => {
  return (
    <div id="app" className='app'>
        <p>Header</p>
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
