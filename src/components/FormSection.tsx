import * as Styled from './FormSection.styled'

interface FormSectionProps {
  title: string
  description?: string
  children?: React.ReactNode
}

function FormSection({ description, title, children }: FormSectionProps) {
  return (
    <Styled.Root>
      <Styled.Title>{title}</Styled.Title>
      {description && <Styled.Description>{description}</Styled.Description>}
      <Styled.Content>{children}</Styled.Content>
    </Styled.Root>
  )
}

export default FormSection
