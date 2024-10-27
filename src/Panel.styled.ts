import styled from '@emotion/styled'

export const Root = styled.div<{ visible: boolean }>`
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: 4px;

  position: absolute;
  top: 0;
  right: 0;

  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};

  color: #fff;
  background-color: rgba(255, 255, 255, 0.3);

  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: translateY(-100%)
    translateY(${({ theme, visible }) => theme.spacing(visible ? -1 : 0)});
  backdrop-filter: blur(16px);

  transition:
    background-color 0.2s ease,
    opacity 0.2s ease,
    transform 0.2s ease;
`
