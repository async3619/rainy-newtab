import spacing from './utils/spacing'

declare module '@emotion/react' {
  export interface Theme {
    spacing: typeof spacing
    contrastText: string
  }
}
