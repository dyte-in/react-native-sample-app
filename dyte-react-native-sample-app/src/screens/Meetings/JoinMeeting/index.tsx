import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Alert, ScrollView } from 'react-native'
import { getAllMeetings } from '@src/utils/requests'
import { ResponseTypes, Entities } from '@src/utils/requests/types'
import { InputBox } from '@src/components/elements'
import styles from './styles'
import { LoadingContext, MeetingContext } from '@src/context'
//This would should list of all exsisting  meetings
// Select a meeting and join as host or participant
export default function ({ errors, onJoinMeetingClicked }) {
  const [meetings, setMeetings] = React.useState<ResponseTypes.GetAllMeetings>([])
  const { setLoading } = React.useContext(LoadingContext)
  const { meetingProperties, setMeetingProperties } = React.useContext(MeetingContext)
  React.useEffect(() => {
    const getMettings = async () => {
      try {
        setLoading(true)
        const meetings = await getAllMeetings()
        setMeetings(meetings)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
      setLoading(false)
    }
    getMettings()
  }, [])

  const meetingtTile = ({ item }) => {
    return (
      <View style={styles.meeting}>
        <Text style={styles.roomNameText}>{item.roomName}</Text>
        <Text style={styles.joinAsText}>Join as </Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.preset} onPress={() => onJoinMeetingClicked(item, 'host')}>
            <Text style={styles.presetText}> Host </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.preset} onPress={() => onJoinMeetingClicked(item, 'participant')}>
            <Text style={styles.presetText}> Participant </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <>
      <View style={styles.marginVertical}>
        <InputBox
          text="Enter your username"
          placeholder="Steve Jobs"
          type="lg"
          value={meetingProperties.userName}
          error={errors.userName}
          onChange={userName => setMeetingProperties({ ...meetingProperties, userName })}
        />
      </View>
      <FlatList data={meetings} keyExtractor={item => item.id} renderItem={meetingtTile} />
    </>
  )
}
