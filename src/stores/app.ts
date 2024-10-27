import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface AppStore {
  backgroundImage: string | null

  setBackgroundImage: (backgroundImage: string) => void
  clearBackgroundImage: () => void
}

const useAppStore = create(
  persist<AppStore>(
    (set) => ({
      backgroundImage: null,

      setBackgroundImage: (backgroundImage: string) => set({ backgroundImage }),
      clearBackgroundImage: () => set({ backgroundImage: null }),
    }),
    {
      name: 'app-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useAppStore
