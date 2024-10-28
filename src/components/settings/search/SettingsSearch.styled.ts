import styled from '@emotion/styled'

export const Container = styled.div`
  position: relative;
  width: 200px;
`

export const ToggleButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #444;
  color: #fff;
  border: 0;
  border-radius: 4px;
  text-align: left;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #444;
  }

  &:after {
    content: '▼';
    float: right;
    font-size: 12px;
  }
`

export const Menu = styled.div<{ isOpen?: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #444;
  border-radius: 4px;
  margin-top: 4px;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? '200px' : '0')};
  transition: max-height 0.1s ease;
  z-index: 1000;
`

export const MenuItem = styled.div`
  padding: 10px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #555;
  }
`

export const Input = styled.input`
  padding: 10px;
  background-color: #444;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  margin-top: 4px;
`