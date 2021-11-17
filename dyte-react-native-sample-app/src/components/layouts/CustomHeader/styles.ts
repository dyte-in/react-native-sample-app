import { Dimensions, StyleSheet } from 'react-native'
import colors from '@src/styles/colors'

export default StyleSheet.create({
  text: {
    marginTop: 10,
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textPrimary['100'],
    lineHeight: 42,
  },
  parentView: {
    height: 50,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  width: {
    width: Dimensions.get('window').width / 3,
  },
})
