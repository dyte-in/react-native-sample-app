import { Meeting } from '@dytesdk/mobile'

export interface DyteMeetingView {
  onMeetingInit: (DyteMeeting: Meeting) => void
  roomName: string
  authToken?: string
}
