import { ExecuteValue } from '../types/common';
import { ParticipantFields } from '../types/participant';

type ParticipantModel = { [value in ParticipantFields]: ExecuteValue }

export type { ParticipantModel };
