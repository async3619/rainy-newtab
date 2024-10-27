import { Global, ThemeProvider } from '@emotion/react'

import BackgroundCanvas from '@components/BackgroundCanvas'
import Settings from '@components/Settings'
import Clock from '@components/Clock'

import spacing from '@utils/spacing'

import useSessionAppStore from '@stores/session-app'

import * as Styled from './App.styled'

function App() {
  const isReady = useSessionAppStore((store) => store.isReady)

  return (
    <ThemeProvider theme={{ spacing }}>
      <Global styles={Styled.GlobalStyles} />
      <Styled.Root>
        <BackgroundCanvas />
        <Styled.Content isReady={isReady}>
          <Clock />
          <Settings />
        </Styled.Content>
      </Styled.Root>
    </ThemeProvider>
  )
}

export default App
