import BackgroundCanvas from './BackgroundCanvas'

import * as Styled from './App.styled'

function App() {
  return (
    <Styled.Root>
      <BackgroundCanvas imageSrc="/img.png" />
      <Styled.Content></Styled.Content>
    </Styled.Root>
  )
}

export default App
