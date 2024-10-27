import * as Styled from './Panel.styled'

interface PanelProps {
  open: boolean
  children: React.ReactNode
}

function Panel({ open, children }: PanelProps) {
  return <Styled.Root visible={open}>{children}</Styled.Root>
}

export default Panel
