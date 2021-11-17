import React from 'react'
import styles from './styles'
import { Button, InputBox } from '@src/components/elements'
import colors from '@src/styles/colors'
import { Text, View, ScrollView } from 'react-native'
import { MeetingContext } from '@src/context'

export default function ({ errors, onCreateNewMeeting }) {
  const { primary, textPrimary } = colors
  const { meetingProperties, setMeetingProperties } = React.useContext(MeetingContext)

  return (
    <>
      <View>
        <Text style={styles.secondaryHeadingText}>Join as </Text>
        <View style={styles.row}>
          <View style={styles.button}>
            <Button
              text={'Host'}
              active={meetingProperties.preset === 'host'}
              onPress={() => setMeetingProperties({ ...meetingProperties, preset: 'host' })}
              type="md"
            />
          </View>
          <Button
            text={'Participant'}
            active={meetingProperties.preset === 'participant'}
            onPress={() => setMeetingProperties({ ...meetingProperties, preset: 'participant' })}
            type="md"
          />
        </View>
      </View>
      <View style={styles.inputBoxVerticalMargin}>
        <View style={styles.inputBoxVerticalMargin}>
          <InputBox
            text="Your Name"
            placeholder="Steve Jobs"
            type="lg"
            error={errors.userName}
            value={meetingProperties.userName}
            onChange={userName => setMeetingProperties({ ...meetingProperties, userName })}
          />
        </View>
        <View style={styles.inputBoxVerticalMargin}>
          <InputBox
            text="Meeting Name"
            placeholder="What your meeting about"
            type="lg"
            value={meetingProperties.title}
            onChange={title => setMeetingProperties({ ...meetingProperties, title })}
          />
        </View>
      </View>
      <View style={styles.joinMeeting}>
        <Button
          text={'Start Meeting'}
          backgroundColor={primary['500']}
          textColor={textPrimary['100']}
          onPress={onCreateNewMeeting}
          type="lg"
        />
      </View>
    </>
  )
}
