import React from 'react'
import { CustomHeaderProps } from './types'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '@src/styles/colors'
const CustomHeader = ({ title, goBack }: CustomHeaderProps) => {
  return (
    <View style={styles.parentView}>
      <View style={styles.width}>
        <TouchableOpacity onPress={goBack}>
          <Icon name="keyboard-backspace" color={colors.textPrimary['100']} size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.width}>
        <Text style={styles.text}>{title.charAt(0).toUpperCase() + title.slice(1)} </Text>
      </View>
      <View style={styles.width}>
        <></>
      </View>
    </View>
  )
}

export default CustomHeader
