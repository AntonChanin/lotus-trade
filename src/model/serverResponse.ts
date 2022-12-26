import { ParticipantServerModel } from './participant';

type ServerResponse = {
    roomId: string;
    participants: ParticipantServerModel[];
};

export type { ServerResponse };
