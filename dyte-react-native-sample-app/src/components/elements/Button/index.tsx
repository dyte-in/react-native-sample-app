import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Props } from './types'
import getStyles from './styles'

const Button = ({ type, onPress, text, active = false, backgroundColor, textColor }: Props) => {
  const styles = getStyles(type)
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        active && !backgroundColor
          ? { ...styles.parent, ...styles.active }
          : !backgroundColor
          ? { ...styles.parent }
          : { ...styles.parent, backgroundColor: backgroundColor }
      }
    >
      <Text style={!textColor ? styles.text : { ...styles.text, color: textColor }}>{capitalizeFirstLetter(text)}</Text>
    </TouchableOpacity>
  )
}

export default Button
