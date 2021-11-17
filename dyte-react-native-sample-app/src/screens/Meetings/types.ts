import { Preset } from '@src/types'
export interface MeetingProperties {
  authToken: string
  roomName: string
  preset: Preset //This could be host, participant or any other preset -> Preset could by created using Dyte Dashboard or using Dyte api
  userName: string
  title: string
}
