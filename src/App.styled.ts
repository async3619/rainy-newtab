import styled from '@emotion/styled'

export const Root = styled.main`
  @supports (height: 100svh) {
    height: 100svh;
  }

  @supports not (height: 100svh) {
    height: 100vh;
  }
`
