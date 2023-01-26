import create from "zustand"
import { persist } from "zustand/middleware"

export type SidebarTypes = 'CONTACT' | 'STARRED' | 'SHARED'

interface SidebarProps {
    open: boolean
    type: SidebarTypes
}

interface ContactInformationProps {
    sidebar: SidebarProps
    toggleSidebar: () => void
    updateSidebarType: (state: SidebarTypes) => void
}

export const useContactInformationStore = create<ContactInformationProps>()(
    persist(
        (set, get) => ({
            sidebar: {
                open: false,
                type: 'CONTACT'
            },
            toggleSidebar: () => set({ sidebar: { open: get().sidebar.open = !get().sidebar.open, type: get().sidebar.type } }),
            updateSidebarType: (state: SidebarTypes) => set({ sidebar: { open: get().sidebar.open, type: get().sidebar.type = state } })
        }),
        {
            name: 'conversation-sidebar',
        }
    )
)