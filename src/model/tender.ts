import Title from '../types/title';
import { ParticipantModel } from './participant';

type TitlesModel = {
  title: string;
  subTitle?: Title;
  participants: ParticipantModel[];
  className?: string;
}

export default TitlesModel;
