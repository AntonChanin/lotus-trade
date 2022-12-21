import { FC } from 'react';


import TenderTableRow from './TenderTableRow';
import uuid from '../utils/uuid';
import { TenderTableRowData } from '../types/tender';
import { ParticipantModel } from '../model/participant';

type Props = {
  rows?: TenderTableRowData[];
  participants: ParticipantModel[];
};

const TenderTableBody: FC<Props> = (props) => {
  const {
    rows = [
      { title: 'Наличие комплекса мероприятий, повышающих стандарты качества изготовления', field: 'complexQualityBoost' },
      { title: 'Срок изготовления лота, дней', field: 'lotTime' },
      { title: 'Гарантийные обязательства, мес', field: 'warrantyObligations' },
      { title: 'Условие оплаты', field: 'paymentTerms' },
      { title: 'Стоимость изготовления лота, руб. (без НДС)', field: 'lotCost' },
      { title: 'Действия:', field: 'action' },
    ],
    participants
  } = props;
  
  return (
    <tbody>
      {rows.map(({ title, field }) => (<TenderTableRow key={uuid()} title={title} participants={participants.map((participant) => {
        const { render, renderProps, value, } = participant[field];
        return render?.(renderProps ?? { value }) ?? <div className="flex justify-center">{value}</div>;
      })} />))}
    </tbody>
  );
};

export default TenderTableBody;
