import clsx from "clsx"
import dynamic from "next/dynamic"
import { FC, ReactNode } from "react"
import Sidebar from "../components/sidebar/Sidebar"
import { useThemeDirection } from "../zustand/themeDirection"

const ThemeSettings = dynamic(()=>import('../components/ThemeSettings'),{ssr:false})

type LayoutProps = {
    children : ReactNode
}

const Layout :FC<LayoutProps> = ({children}:LayoutProps) => {
  const reverseDirection = useThemeDirection(state=>state.reverseDirection)
  return (
    <div className={clsx("flex w-screen h-screen dark:bg-dark-secondary dark:text-white", reverseDirection && 'flex-row-reverse')}>
        <Sidebar />
        {children}
        <ThemeSettings />
    </div>
  )
}

export default Layout