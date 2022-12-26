import axios from 'axios';
import { ParticipantModel } from '../../model/participant';

class PostService {

  constructor() {
  }

  async postArchive(data: { partipants: ParticipantModel[], roomId: string }) {
    const { partipants, roomId } = data;
    return await axios.post(
      `${import.meta.env.VITE_API_UPDATE}`,
      {
        answer: {
          participants: partipants.map(
            ({
              entity,
              complexQualityBoost,
              lotTime,
              warrantyObligations,
              paymentTerms,
              lotCost,
              action,
              }) => ({
                entity,
                complexQualityBoost,
                lotTime,
                warrantyObligations,
                paymentTerms,
                lotCost,
                action,
              })
          ),
          roomId, 
        }
      },
      {
        headers: {
          'content-type': 'application/json',
        },
      }
    );
  }
}

export const PostServiceInstance = new PostService();
