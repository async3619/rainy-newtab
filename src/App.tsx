import { Global, ThemeProvider } from '@emotion/react'

import BackgroundCanvas from './BackgroundCanvas'
import Settings from './Settings'

import spacing from './utils/spacing'

import * as Styled from './App.styled'

function App() {
  return (
    <ThemeProvider theme={{ spacing }}>
      <Global styles={Styled.GlobalStyles} />
      <Styled.Root>
        <BackgroundCanvas imageSrc="/img.png" />
        <Styled.Content>
          <Settings />
        </Styled.Content>
      </Styled.Root>
    </ThemeProvider>
  )
}

export default App
