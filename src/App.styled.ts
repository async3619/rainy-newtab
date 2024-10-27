import styled from '@emotion/styled'

export const Root = styled.main``

export const Content = styled.div`
  width: 100%;

  padding: 16px;
  box-sizing: border-box;

  position: fixed;
  top: 0;
  left: 0;

  @supports (height: 100svh) {
    height: 100svh;
  }

  @supports not (height: 100svh) {
    height: 100vh;
  }
`
