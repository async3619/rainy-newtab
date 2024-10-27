import styled from '@emotion/styled'

export const Root = styled.div`
  display: flex;
`

export const Item = styled.button<{ selected: boolean }>`
  margin: 0;
  padding: ${({ theme }) => theme.spacing(0.75)};
  border: 0;

  background-color: rgba(255, 255, 255, 0.3);

  cursor: pointer;
  opacity: ${({ selected }) => (selected ? 1 : 0.5)};

  > svg {
    width: 20px;
    height: 20px;

    display: block;

    fill: white;
  }
`
