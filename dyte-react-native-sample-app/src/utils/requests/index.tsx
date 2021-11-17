import axios from 'axios'
import { RequestTypes, ResponseTypes } from './types'
import { MeetingType, Preset } from '@src/types'

axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.headers.post['Content-Type'] = 'application/json'

export const createMeeting = async (
  options: RequestTypes.CreateMeetingOptions
): Promise<ResponseTypes.CreateMeeting> => {
  const { data } = (await axios.post(`/meeting/create`, options)).data
  const { roomName, id } = data.meeting
  return {
    roomName,
    id,
  }
}

export const addParticipant = async (
  meetingObj,
  meetingType: MeetingType,
  preset: Preset
): Promise<ResponseTypes.AddParticipant> => {
  if (meetingType === 'webinar') {
    if (preset === 'host') {
      meetingObj.presetName = 'default_webinar_host_preset'
    } else {
      meetingObj.presetName = 'default_webinar_participant_preset'
    }
  } else {
    meetingObj.roleName = preset
  }
  const { data } = (await axios.post(`/participant/create`, meetingObj)).data
  const { authToken, userAdded } = data.authResponse
  if (!userAdded) {
    throw new Error('Error Adding user')
  }
  return {
    authToken,
  }
}

export const getAllMeetings = async (obj?: RequestTypes.GetMeetingsOptions) => {
  const { data } = (await axios.get('/meetings', { params: obj })).data
  const { meetings } = data
  return meetings
}
