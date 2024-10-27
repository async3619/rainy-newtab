import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface AppStore {
  backgroundImage: string | null
  setBackgroundImage: (backgroundImage: string) => void
  clearBackgroundImage: () => void

  dimmingAmount: number
  setDimmingAmount: (dimmingAmount: number) => void

  blurAmount: number
  setBlurAmount: (blurAmount: number) => void

  isPropertyChanging: boolean
  setPropertyChanging: (isPropertyChanging: boolean) => void
}

const useAppStore = create(
  persist<AppStore>(
    (set) => ({
      backgroundImage: null,
      setBackgroundImage: (backgroundImage: string) => set({ backgroundImage }),
      clearBackgroundImage: () => set({ backgroundImage: null }),

      dimmingAmount: 0.5,
      setDimmingAmount: (dimmingAmount: number) => set({ dimmingAmount }),

      blurAmount: 4,
      setBlurAmount: (blurAmount: number) => set({ blurAmount }),

      isPropertyChanging: false,
      setPropertyChanging: (isPropertyChanging: boolean) =>
        set({ isPropertyChanging }),
    }),
    {
      name: 'app-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useAppStore
