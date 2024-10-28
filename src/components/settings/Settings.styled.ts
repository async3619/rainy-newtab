import styled from '@emotion/styled'
import IconButton from '@components/IconButton'

export const Button = styled(IconButton)``

export const Root = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.spacing(2)};
  bottom: ${({ theme }) => theme.spacing(2)};

  z-index: 3;
`

export const Content = styled.div`
  width: 300px;
  height: 300px;
`

export const TabHeader = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 16px;
  gap: 8px;
  border-radius: 4px;
`

export const TabButton = styled.button<{ isActive?: boolean }>`
  flex: 1;
  padding: 10px 0;
  background-color: ${({ isActive }) => (isActive ? '#444' : 'transparent')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#ccc')};
  border: ${() => '1px solid #969696'};
  border-radius: 4px;
  cursor: pointer;
  transition:
    color 0.3s,
    background-color 0.3s;

  &:hover {
    color: #fff;
    background-color: #444;
  }
`
