import React from 'react'
import { View, TextInput, Text } from 'react-native'
import { Props } from './types'
import getStyles from './styles'
import colors from '@src/styles/colors'

const InputBox = ({ text, placeholder, onChange, type, value, autoCorrect = false, error }: Props) => {
  const styles = getStyles(type)
  const placeHolderColor = colors.textPrimary['400']
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        value={value}
        autoCorrect={autoCorrect}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChange}
        placeholderTextColor={placeHolderColor}
        autoCapitalize="none"
      />
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

export default InputBox
