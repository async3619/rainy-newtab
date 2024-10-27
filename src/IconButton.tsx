import React from 'react'
import * as Styled from './IconButton.styled'

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>

function IconButton({ children, ...rest }: ButtonProps) {
  return <Styled.Root {...rest}>{children}</Styled.Root>
}

export default IconButton
