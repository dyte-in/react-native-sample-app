export interface Props {
  type: 'sm' | 'md' | 'lg'
  onPress: () => void
  text: string
  active?: boolean
  backgroundColor?: string
  textColor?: string
}
