import { lazy } from "react"

const OtherPageAsync = lazy(()=> import('./OtherPage'))

export {OtherPageAsync}