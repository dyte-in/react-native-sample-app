export interface Props {
  text: string
  placeholder: string
  type: 'sm' | 'md' | 'lg'
  onChange: (text: string) => void
  value?: string
  autoCorrect?: boolean
  error?: string
}
