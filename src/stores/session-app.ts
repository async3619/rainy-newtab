import { create } from 'zustand'

interface SessionAppStore {
  isReady: boolean
  setIsReady: (isReady: boolean) => void
}

const useSessionAppStore = create<SessionAppStore>((set) => ({
  isReady: false,
  setIsReady: (isReady: boolean) => set({ isReady }),
}))

export default useSessionAppStore
