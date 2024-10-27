import styled from '@emotion/styled'

export const Root = styled.button`
  margin: 0;
  padding: ${({ theme }) => theme.spacing(1)};
  border: none;
  border-radius: 4px;

  background-color: rgba(255, 255, 255, 0.3);

  transition: background-color 0.2s ease;

  outline: none;
  cursor: pointer;

  backdrop-filter: blur(16px);

  &:hover,
  &:focus-visible {
    background-color: rgba(255, 255, 255, 0.5);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.3);
  }

  > svg {
    width: ${({ theme }) => theme.spacing(3)};
    height: ${({ theme }) => theme.spacing(3)};

    display: block;

    fill: #fff;
  }
`
