import React, { FC } from 'react';

import TenderTableTitledRow from './TenderTableTitledRow';
import { ParticipantModel } from '../model/participant';
import { renderParticipantsTitles, renderTimer } from '../utils/render';
import useTimer from '../hooks/useTimer';

type Props = {
  participants: ParticipantModel[];
  className?: string;
}

const TenderTableHead: FC<Props> = (props) => {
  const { participants, className } = props;
  const { activeIndex, initialMinute, initialSeconds } = useTimer();

  const timerModel = {
    title: 'ХОД',
    subTitle: renderTimer({ activeIndex, initialMinute, initialSeconds }),
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
