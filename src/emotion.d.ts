import spacing from './utils/spacing.ts'

declare module '@emotion/react' {
  export interface Theme {
    spacing: typeof spacing
    contrastText: string
  }
}
