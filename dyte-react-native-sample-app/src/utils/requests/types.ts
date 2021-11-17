export namespace Entities {
  export interface UserDetails {
    name: string
    picture?: string
  }

  export interface Meeting {
    id: string
    title: string
    roomName: string
    status: MeetingStatus
    createdAt: string
  }

  // eslint-disable-next-line no-shadow
  export enum MeetingStatus {
    CREATED = 'CREATED',
    CLOSED = 'CLOSED',
    USED = 'USED',
    LIVE = 'LIVE',
  }

  export interface PresetObject {
    id: string
    name: string
    description: string
    s3URL: string
  }
}

export namespace RequestTypes {
  export interface GetMeetingsOptions {
    limit?: number
    offset?: number
  }

  interface CreateMeetingAuthorization {
    waitingRoom?: boolean
    closed?: boolean
  }

  export interface CreateMeetingOptions {
    title?: string
    presetName?: string
    authorization?: CreateMeetingAuthorization
  }

  interface AddParticipantOptionsBase {
    meetingId: string
    clientSpecificId?: string
    userDetails?: Entities.UserDetails
  }

  interface AddParticipantWithRole extends AddParticipantOptionsBase {
    roleName: string
  }

  interface AddParticipantWithPreset extends AddParticipantOptionsBase {
    presetName: string
  }

  export type AddParticipantOptions = AddParticipantOptionsBase | AddParticipantWithRole | AddParticipantWithPreset
}

export namespace ResponseTypes {
  export interface CreateMeeting {
    id: string
    roomName: string
  }

  export interface AddParticipant {
    authToken: string
  }

  export type GetAllMeetings = Entities.Meeting[]
}
