import React from 'react'
import colors from '@src/styles/colors'
import { DyteMeeting } from '@dytesdk/mobile'
import { DyteMeetingView } from './types'

export default function ({ onMeetingInit, authToken, roomName }: DyteMeetingView) {
  const { primary, secondary, textPrimary, videoBackground } = colors

  return (
    <DyteMeeting
      onInit={onMeetingInit}
      clientId={`orgId`}
      uiConfig={{
        colors: {
          primary: primary['500'],
          secondary: secondary['900'],
          textPrimary: textPrimary['100'],
          videoBackground: videoBackground,
        },
      }}
      meetingConfig={{
        roomName: roomName,
        authToken: authToken,
        showSetupScreen: true,
      }}
    />
  )
}
