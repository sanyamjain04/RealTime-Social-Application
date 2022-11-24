import React, { ReactNode } from "react"

type LayoutProps = {
    children : ReactNode
}

const Layout :React.FC<LayoutProps> = ({children}) => {
  return (
    <div className="flex w-screen h-screen dark">
        <div className="bg-black h-screen w-[100px]">
           <p className="dark:text-white">hello world</p>
        </div>
        {children}
    </div>
  )
}

export default Layout