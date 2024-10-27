import React from 'react'

import * as Styled from './Box.styled'

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {}

function Box(props: BoxProps) {
  return <Styled.Root {...props} />
}

export default Box
