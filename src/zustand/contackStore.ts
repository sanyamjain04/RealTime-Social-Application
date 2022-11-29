import create from "zustand"
import { persist } from "zustand/middleware"

interface SidebarProps {
    open: boolean
    type: 'CONTACT' | 'STARRED' | 'SHARED'
}

type SidebarTypes =  'CONTACT' | 'STARRED' | 'SHARED'


interface ContactInformationProps {
    sidebar: SidebarProps
    toogleSidebar: () => void
    updateSidebarType: (state: SidebarTypes) => void
}

export const useContactInformationStore = create<ContactInformationProps>()(
    persist(
        (set, get) => ({
            sidebar: {
                open: false,
                type: 'CONTACT'
            },
            toogleSidebar: () => set({ sidebar: { open: get().sidebar.open = !get().sidebar.open, type: get().sidebar.type } }),
            updateSidebarType: (state : SidebarTypes)=> set({ sidebar: { open: get().sidebar.open , type: get().sidebar.type = state} })
        }),
        {
            name: 'contact-information',
        }
    )
)