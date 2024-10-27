import { ThemeProvider } from '@emotion/react'

import BackgroundCanvas from './BackgroundCanvas'

import spacing from './utils/spacing'

import * as Styled from './App.styled'

function App() {
  return (
    <ThemeProvider theme={{ spacing }}>
      <Styled.Root>
        <BackgroundCanvas imageSrc="/img.png" />
        <Styled.Content></Styled.Content>
      </Styled.Root>
    </ThemeProvider>
  )
}

export default App
