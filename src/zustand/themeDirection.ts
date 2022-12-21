import create from "zustand"

interface ThemeDirectionProps {
    reverseDirection: boolean
    changeDirection: (prop: boolean) => void
}

export const useThemeDirection = create<ThemeDirectionProps>()(
    (set, get) => ({
        reverseDirection: false,
        changeDirection: (prop: boolean) => set({ reverseDirection: prop })
    }),
)