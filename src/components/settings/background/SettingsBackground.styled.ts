import styled from '@emotion/styled'
import IconButton from '@components/IconButton'

export const FileInput = styled.input`
  display: none;
`

export const RangeInput = styled.input`
  width: 100%;
`

export const UploadButton = styled.button`
  width: 100%;

  padding: ${({ theme }) => theme.spacing(1)};

  display: block;
`

export const Button = styled(IconButton)``
