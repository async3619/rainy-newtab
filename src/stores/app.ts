import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { Weather } from '@utils/getCurrentWeather'
import { SearchEngineOption } from '@constants/searchEngines'

interface WeatherHolder {
  weather: Weather
  expiresAt: number
}

interface LatLng {
  lat: number
  lng: number
}

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

  geolocation: LatLng | null
  setGeolocation: (geolocation: LatLng) => void

  weather: WeatherHolder | null
  setWeather: (weather: Weather) => void

  searchEngine: SearchEngineOption
  setSearchEngine: (searchEngine: SearchEngineOption) => void

  customSearchEngineURL: string | null
  setCustomSearchEngineURL: (customSearchEngineURL: string) => void
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

      geolocation: null,
      setGeolocation: (geolocation: LatLng) => set({ geolocation }),

      weather: null,
      setWeather: (weather: Weather) => {
        const expiresAt = Date.now() + 1000 * 60 * 60 // 1 hour
        set({ weather: { weather, expiresAt } })
      },

      searchEngine: 'google',
      setSearchEngine: (searchEngine: SearchEngineOption) => set({ searchEngine }),

      customSearchEngineURL: null,
      setCustomSearchEngineURL: (customSearchEngineURL: string) =>
        set({ customSearchEngineURL }),
    }),
    {
      name: 'app-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useAppStore
