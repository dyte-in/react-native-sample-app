import React from 'react'
import { Alert } from 'react-native'
import { DyteMeetingView } from '@src/components/layouts'
import Actions from '@src/utils/routes'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '@src/styles/colors'
// This is an example to demonstrate how to join meeting using custom buttons
// This is open meeting so anyone can join
// We are hardcoding the room-name so it is easy to read code
export default function () {
  const onMeetingInit = meeting => {
    console.log(meeting)
    meeting.on(meeting.Events.meetingEnded, () => {
      Actions.reset('Home')
    })
    meeting.on(meeting.Events.meetingJoined, () => {
      meeting.controlBar.addButton({
        label: 'Custom Alert Button',
        icon: <Icon name="alert" color={colors.textPrimary['100']} size={30} />,
        position: 'center',
        onClick: () => {
          Alert.alert('Custom Alert', 'Your custom Alert button works', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ])
        },
      })
    })
  }

  return <DyteMeetingView onMeetingInit={onMeetingInit} authToken={''} roomName={'concerned-arthropod'} />
}
