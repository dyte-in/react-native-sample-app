import React from 'react'
import { View, Text } from 'react-native'
import { Button } from '@src/components/elements'
import styles from './styles'
import Actions from '@src/utils/routes'

export default function () {
  return (
    <View style={styles.parentView}>
      <View style={styles.button}>
        <Button
          type="lg"
          text="Group Meeting"
          onPress={() => {
            Actions.navigate('Meeting', { meetingType: 'group' })
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          type="lg"
          text="Webinar Meeting"
          onPress={() => {
            Actions.navigate('Meeting', { meetingType: 'webinar' })
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          type="lg"
          text="Custom Button"
          onPress={() => {
            Actions.navigate('Custom Buttons')
          }}
        />
      </View>
    </View>
  )
}
