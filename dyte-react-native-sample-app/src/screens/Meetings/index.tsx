import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Alert, ScrollView } from 'react-native'
import { Button, InputBox, Loading } from '@src/components/elements'
import styles from './styles'
import { KeyboardView, DyteMeetingView, CustomHeader } from '@src/components/layouts'
import Clipboard from '@react-native-clipboard/clipboard'
import uuid from 'react-native-uuid'
import { createMeeting, addParticipant } from '@src/utils/requests'
import { RequestTypes, Entities } from '@src/utils/requests/types'
import { LoadingContext, MeetingContext } from '@src/context'
import Actions from '@src/utils/routes'
import JoinMeeting from './JoinMeeting'
import CreateMeeting from './CreateMeeting'
import { MeetingProperties } from './types'
import { Preset } from '@src/types'
//In this we are creating Meeting from Scratch
export default function (props) {
  const { meetingType } = props.route.params
  const { loading, setLoading } = React.useContext(LoadingContext)
  const [isNewMeeting, setIsNewMeeting] = React.useState(true)
  const [meetingProperties, setMeetingProperties] = React.useState<MeetingProperties>({
    authToken: '',
    roomName: '',
    preset: 'host',
    userName: '',
    title: '',
  })
  const [errors, setErrors] = React.useState({
    userName: '',
  })

  //More on Events here: https://docs.dyte.in/docs/react-native-events
  const onMeetingInit = meeting => {
    meeting.on(meeting.Events.meetingEnded, () => {
      setMeetingProperties({
        authToken: '',
        roomName: '',
        preset: 'host',
        userName: '',
        title: '',
      })
      Actions.reset('Home')
    })
  }

  const showAlertAndStartMeeting = (success: boolean, roomName?: string, authToken?: string) => {
    if (success) {
      Alert.alert(`Create Meeting Sucessfully`, `Room Name: ${roomName}`, [
        {
          text: 'Copy Room Name',
          onPress: () => {
            Clipboard.setString(roomName)
            setMeetingProperties({ ...meetingProperties, roomName, authToken })
            setLoading(false)
          },
        },
        {
          text: 'OK',
          onPress: () => {
            setMeetingProperties({ ...meetingProperties, roomName, authToken })
            setLoading(false)
          },
          style: 'cancel',
        },
      ])
    }
  }

  useEffect(() => {
    if (meetingProperties.userName && errors.userName) {
      setErrors({ ...errors, userName: '' })
    }
  }, [meetingProperties.userName])

  const onJoinMeetingClicked = async (meeting: Entities.Meeting, preset: Preset) => {
    try {
      if (!meetingProperties.userName) {
        setErrors({ userName: 'Please Enter your username' })
        return
      }
      setLoading(true)
      const { authToken } = await addParticipant(
        {
          meetingId: meeting.id,
          userDetails: {
            name: meetingProperties.userName,
          },
          clientSpecificId: `${uuid.v1()}`,
        },
        meetingType,
        preset
      )

      showAlertAndStartMeeting(true, meeting.roomName, authToken)
    } catch (err) {
      console.warn('error:', err)
      setLoading(false)
    }
  }

  const onCreateNewMeeting = async () => {
    if (!meetingProperties.userName) {
      setErrors({ userName: 'Please Enter your username' })
      return
    }
    try {
      setLoading(true)
      // Create Meeting
      const meetingObj: RequestTypes.CreateMeetingOptions = {
        authorization: {
          closed: true,
        },
      }
      if (meetingProperties.title) {
        meetingObj.title = meetingProperties.title
      }
      const { id, roomName } = await createMeeting(meetingObj)
      //Add Participant
      const { authToken } = await addParticipant(
        {
          meetingId: id,
          userDetails: {
            name: meetingProperties.userName,
          },
          clientSpecificId: `${uuid.v1()}`,
        },
        meetingType,
        meetingProperties.preset
      )

      showAlertAndStartMeeting(true, roomName, authToken)
    } catch (e) {
      console.warn('error:', e)
      setLoading(false)
    }
  }

  if (!loading && meetingProperties.authToken && meetingProperties.roomName) {
    return (
      <DyteMeetingView
        onMeetingInit={onMeetingInit}
        authToken={meetingProperties.authToken}
        roomName={meetingProperties.roomName}
      />
    )
  }
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <MeetingContext.Provider value={{ meetingProperties, setMeetingProperties }}>
        <KeyboardView>
          <View style={styles.parentView}>
            <CustomHeader title={meetingType.charAt(0).toUpperCase() + meetingType.slice(1)} goBack={Actions.pop} />
            <View style={styles.meetingType}>
              <View style={styles.row}>
                <View style={styles.button}>
                  <Button text={'Create'} active={isNewMeeting} onPress={() => setIsNewMeeting(true)} type="md" />
                </View>
                <Button text={'Join'} active={!isNewMeeting} onPress={() => setIsNewMeeting(false)} type="md" />
              </View>
            </View>
            {isNewMeeting ? (
              <CreateMeeting errors={errors} onCreateNewMeeting={onCreateNewMeeting} />
            ) : (
              <JoinMeeting errors={errors} onJoinMeetingClicked={onJoinMeetingClicked} />
            )}
          </View>
        </KeyboardView>
      </MeetingContext.Provider>
    </SafeAreaView>
  )
}
