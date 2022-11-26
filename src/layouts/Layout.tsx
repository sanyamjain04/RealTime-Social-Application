import React, { ReactNode } from "react"
import Sidebar from "../components/sidebar/Sidebar"

type LayoutProps = {
    children : ReactNode
}


const Layout :React.FC<LayoutProps> = ({children}) => {
  return (
    <div className="flex w-screen h-screen dark:bg-dark-secondary">
        <Sidebar />
        {children}
    </div>
  )
}

export default Layout