import { useEffect } from 'react'
import { Global, ThemeProvider } from '@emotion/react'

import BackgroundCanvas from '@components/BackgroundCanvas'
import Settings from '@components/Settings'
import Clock from '@components/Clock'

import spacing from '@utils/spacing'
import getCurrentGeolocation from '@utils/getCurrentGeolocation'
import getCurrentWeather from '@utils/getCurrentWeather'

import useSessionAppStore from '@stores/session-app'
import useAppStore from '@stores/app'

import * as Styled from './App.styled'
import SearchBar from '@components/SearchBar'

function App() {
  const isReady = useSessionAppStore((store) => store.isReady)

  const geolocation = useAppStore((store) => store.geolocation)
  const setGeolocation = useAppStore((store) => store.setGeolocation)

  const weather = useAppStore((store) => store.weather)
  const setWeather = useAppStore((store) => store.setWeather)

  useEffect(() => {
    if (geolocation) {
      return
    }

    getCurrentGeolocation().then(setGeolocation).catch()
  }, [geolocation, setGeolocation])

  useEffect(() => {
    if (!geolocation) {
      return
    }

    if (weather && weather.expiresAt > Date.now()) {
      return
    }

    getCurrentWeather(geolocation).then(setWeather).catch()
  }, [geolocation, setWeather, weather])

  return (
    <ThemeProvider theme={{ spacing }}>
      <Global styles={Styled.GlobalStyles} />
      <Styled.Root>
        <BackgroundCanvas />
        <Styled.Content isReady={isReady}>
          <Clock />
          <Settings />
          <SearchBar />
        </Styled.Content>
      </Styled.Root>
    </ThemeProvider>
  )
}

export default App
