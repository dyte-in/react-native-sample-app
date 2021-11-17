import { StyleSheet, Dimensions } from 'react-native'
import colors from '@src/styles/colors'

const buttonSize = {
  sm: {},
  md: {
    width: Dimensions.get('window').width * 0.45,
    height: 50,
  },
  lg: {
    width: Dimensions.get('window').width * 0.9,
    height: 50,
  },
}

export default function (type) {
  const size = buttonSize[type]
  const styles = StyleSheet.create({
    input: {
      width: size.width,
      height: size.height,
      backgroundColor: colors.secondary['800'],
      color: colors.textPrimary['100'],
      borderRadius: 10,
      paddingHorizontal: 8,
      fontSize: 18,
    },
    active: {
      borderColor: colors.primary['700'],
      borderWidth: 1,
    },
    text: {
      fontSize: 18,
      color: colors.textPrimary['100'],
      marginVertical: 10,
    },
    error: {
      marginTop: 5,
      color: colors.danger['300'],
      fontSize: 16,
    },
  })
  return styles
}
