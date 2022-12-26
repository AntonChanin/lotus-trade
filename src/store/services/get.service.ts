import axios from 'axios';

import { ServerResponse } from '../../model/serverResponse';

class GetService {

  constructor() {
  }

  async getRoom(roomId: string): Promise<ServerResponse> {
    const { data } = await axios.get(`${import.meta.env.VITE_API_ROOMS}/${roomId}.json`);
    return typeof data === 'string' ? JSON.parse(data).answer : data.answer;
  }

}

export const GetServiceInstance = new GetService();