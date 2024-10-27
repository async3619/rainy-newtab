import styled from '@emotion/styled'

export const Root = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background-color: #000;

  z-index: -1;
`

export const Viewport = styled.canvas<{ isReady: boolean }>`
  width: 100%;
  height: 100%;

  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  opacity: ${({ isReady }) => (isReady ? 1 : 0)};

  transition: opacity 1s;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;

  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  object-fit: cover;
`
