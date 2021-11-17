import { StyleSheet, Dimensions } from 'react-native'
import colors from '@src/styles/colors'

const buttonSize = {
  sm: {},
  md: {
    width: Dimensions.get('window').width * 0.4,
    height: 35,
  },
  lg: {
    width: Dimensions.get('window').width * 0.9,
    height: 35,
  },
}

export default function (type) {
  const size = buttonSize[type]
  const styles = StyleSheet.create({
    parent: {
      width: size.width,
      height: size.height,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.secondary['800'],
      borderRadius: 10,
    },
    active: {
      borderColor: colors.primary['700'],
      borderWidth: 1,
    },
    text: {
      textTransform: 'capitalize',
      fontSize: 18,
      color: colors.textPrimary['100'],
    },
  })
  return styles
}
