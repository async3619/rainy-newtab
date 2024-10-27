import { create } from 'zustand'

interface AppStore {
  backgroundImage: string | null

  setBackgroundImage: (backgroundImage: string) => void
  clearBackgroundImage: () => void
}

const useAppStore = create<AppStore>((set) => ({
  backgroundImage: null,

  setBackgroundImage: (backgroundImage: string) => set({ backgroundImage }),
  clearBackgroundImage: () => set({ backgroundImage: null }),
}))

export default useAppStore
