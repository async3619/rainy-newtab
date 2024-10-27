import styled from '@emotion/styled'

import Box from '@components/Box'

export const Root = styled(Box)`
  width: 100%;
  max-width: 764px;

  margin-top: ${({ theme }) => theme.spacing(6)};
  border-top-left-radius: 0;

  position: relative;
`

export const Input = styled.input`
  width: 100%;

  margin: 0;
  padding: ${({ theme }) => theme.spacing(1.5, 2)};
  border: 0;

  display: block;
  box-sizing: border-box;

  font-family: 'SUITE Variable', sans-serif;

  color: white;
  background-color: transparent;

  outline: none;

  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

export const IconTabWrapper = styled.div`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  position: absolute;
  top: 0;
  left: 0;

  overflow: hidden;

  transform: translateY(-100%);
`
