import styled from '@emotion/styled'
import { Canvas } from '@react-three/fiber'

export const Root = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background-color: #000;

  z-index: -1;
`

export const Viewport = styled(Canvas)`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
`
