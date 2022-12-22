import { ParticipantModel } from '../model/participant';

type TitleGenerator = (props: { el: ParticipantModel, index: number }) => string | string[] | JSX.Element;

type Title = string | string[] | TitleGenerator;

export type { TitleGenerator };

export default Title;
