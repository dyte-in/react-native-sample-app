import { StyleSheet, Dimensions } from 'react-native'
import colors from '@src/styles/colors'

export default StyleSheet.create({
  text: {
    marginVertical: 20,
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textPrimary['100'],
    lineHeight: 42,
  },
  meetingType: {
    marginTop: 20,
    marginBottom: 30,
  },
  secondaryHeadingText: {
    fontSize: 21,
    color: colors.textPrimary['100'],
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 15,
  },
  button: {
    marginRight: 15 < Dimensions.get('window').width * 0.1 ? 15 : Dimensions.get('window').width * 0.1,
  },
  joinMeeting: {
    marginVertical: 20,
  },
  inputBoxVerticalMargin: {
    marginVertical: 10,
  },
})
