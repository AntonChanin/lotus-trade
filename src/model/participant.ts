import { ExecuteValue, ServerValue } from '../types/common';
import { ParticipantFields } from '../types/participant';

type ParticipantModel = { [value in ParticipantFields]: ExecuteValue }

type ParticipantServerModel = { [value in ParticipantFields]: ServerValue }

export type { ParticipantModel, ParticipantServerModel };
