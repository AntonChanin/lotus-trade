import React, { FC, useLayoutEffect, useState } from 'react';
import { clamp } from 'lodash';

import TenderTableTitledRow from './TenderTableTitledRow';
import { ParticipantModel } from '../model/participant';
import { renderParticipantsTitles, renderTimer } from '../utils/render';
import TenderStoreInstance from '../store';

type Props = {
  participants: ParticipantModel[];
  className?: string;
}

const TenderTableHead: FC<Props> = (props) => {
  const { participants, className } = props;
  const { ws } = TenderStoreInstance;
  const [activeIndex, setActiveIndex] = useState(0);
  const [initialMinute, setInitialMinute] = useState(2);
  const [initialSeconds, setInitialSeconds] = useState(0);

  useLayoutEffect(() => {
    ws.onmessage = response => {
      const parseResponse = JSON.parse(response.data);
      console.log('onmessage', parseResponse);
      setActiveIndex(parseResponse.order);
      setInitialSeconds(parseResponse.seconds);
      setInitialMinute(parseResponse.minute);
    };
  })

  const orderHandler = () => {
    if (activeIndex === (participants.length - 1)) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
    ws.send(JSON.stringify({ order: activeIndex, initialMinute, initialSeconds }));
  };

  const timerModel = {
    title: 'ХОД',
    subTitle: renderTimer({ activeIndex, initialMinute, initialSeconds }, orderHandler),
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
