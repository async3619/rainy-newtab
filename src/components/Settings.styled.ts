import styled from '@emotion/styled'
import IconButton from '@components/IconButton'

export const Root = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.spacing(2)};
  bottom: ${({ theme }) => theme.spacing(2)};

  z-index: 3;
`

export const Content = styled.div`
  width: 300px;
`

export const FileInput = styled.input`
  display: none;
`

export const UploadButton = styled.button`
  width: 100%;

  padding: ${({ theme }) => theme.spacing(1)};

  display: block;
`

export const Button = styled(IconButton)``
