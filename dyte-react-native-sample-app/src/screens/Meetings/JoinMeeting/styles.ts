import { StyleSheet } from 'react-native'
import colors from '@src/styles/colors'

export default StyleSheet.create({
  marginVertical: {
    marginBottom: 12,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  meeting: {
    marginVertical: 25,
  },
  roomNameText: {
    fontSize: 18,
    color: colors.textPrimary['100'],
    marginBottom: 15,
  },
  joinAsText: {
    fontSize: 16,
    color: colors.textPrimary[200],
    marginBottom: 15,
  },
  presetText: {
    fontSize: 16,
    color: colors.textPrimary[200],
  },
  preset: {
    backgroundColor: colors.primary['900'],
    borderRadius: 8,
    marginRight: 15,
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
