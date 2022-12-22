import React, { FC, useState } from 'react';

import TenderTableTitledRow from './TenderTableTitledRow';
import { ParticipantModel } from '../model/participant';
import { renderParticipantsTitles, renderTimer } from '../utils/render';

type Props = {
  participants: ParticipantModel[];
  className?: string;
}

const TenderTableHead: FC<Props> = (props) => {
  const { participants, className } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const orderHandler = () => {
    if (activeIndex === (participants.length - 1)) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const timerModel = {
    title: 'ХОД',
    subTitle: renderTimer(activeIndex, orderHandler),
    participants: participants,
    className: 'h-9',
  };

  const paramsAndRequestsModel = {
    title: 'ПАРАМЕТРЫ И ТРЕБОВАНИЯ',
    subTitle: renderParticipantsTitles,
    participants: participants,
  }

  return (
    <thead className={className}>
      <TenderTableTitledRow model={timerModel} />
      <TenderTableTitledRow model={paramsAndRequestsModel} />
    </thead>
  );
};

TenderTableHead.defaultProps = {
  participants: [],
  className: '',
};

export default TenderTableHead;
