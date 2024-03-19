import cls from "./PageLoader.module.scss";

export const PageLoader = () => {
  return (<div className={cls.pageLoader}>
    <div className='lds-dual-ring'></div>
    </div>
  )
}
