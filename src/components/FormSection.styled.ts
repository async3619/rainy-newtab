import styled from '@emotion/styled'

export const Title = styled.h6`
  margin: 0 0 ${({ theme }) => theme.spacing(1)};
  font-size: 1rem;
`

export const Description = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing(1)};
  font-size: 0.875rem;
`

export const Content = styled.div``

export const Root = styled.section`
  &:not(:last-of-type) {
    margin: 0 0 ${({ theme }) => theme.spacing(2)};
  }
`
