import clsx from "clsx"
import dynamic from "next/dynamic"
import React, { ReactNode } from "react"
import Sidebar from "../components/sidebar/Sidebar"
import { useThemeDirection } from "../zustand/themeDirection"

const Settings = dynamic(()=>import('../components/settings'),{ssr:false})

type LayoutProps = {
    children : ReactNode
}


const Layout :React.FC<LayoutProps> = ({children}) => {
  const reverseDirection = useThemeDirection(state=>state.reverseDirection)
  return (
    <div className={clsx("flex w-screen h-screen dark:bg-dark-secondary dark:text-white",reverseDirection && 'flex-row-reverse')}>
        <Sidebar />
        {children}
        <Settings />
    </div>
  )
}

export default Layout