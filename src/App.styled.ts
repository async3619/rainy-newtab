import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const GlobalStyles = css`
  @font-face {
    font-family: 'SUITE Variable';
    font-weight: 300 900;
    src: url('/SUITE-Variable.woff2') format('woff2-variations');
  }

  * {
    font-family: 'SUITE Variable', sans-serif;
  }
`

export const Root = styled.main``

export const Content = styled.div`
  width: 100%;

  padding: ${({ theme }) => theme.spacing(2)};
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
