import { Global, ThemeProvider } from '@emotion/react'

import BackgroundCanvas from '@components/BackgroundCanvas'
import Settings from '@components/Settings'

import spacing from '@utils/spacing'

import * as Styled from './App.styled'

function App() {
  return (
    <ThemeProvider theme={{ spacing }}>
      <Global styles={Styled.GlobalStyles} />
      <Styled.Root>
        <BackgroundCanvas />
        <Styled.Content>
          <Settings />
        </Styled.Content>
      </Styled.Root>
    </ThemeProvider>
  )
}

export default App
