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

export const useConversationSidebarStore = create<ContactInformationProps>()(
    persist(
        (set, get) => ({
            sidebar: {
                open: false,
                type: 'CONTACT'
            },
            toggleSidebar: () => set(state => {
                return { sidebar: { ...state.sidebar, open: !state.sidebar.open } }
            }),
            updateSidebarType: (sidebar: SidebarTypes) => set(state => {
                return { sidebar: { ...state.sidebar, type: sidebar } }
            })
        }),
        {
            name: 'conversation-sidebar',
        }
    )
)