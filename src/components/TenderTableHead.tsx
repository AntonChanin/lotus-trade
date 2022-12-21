import React, { FC, useState } from 'react';

import TenderTableTitle from './TenderTableTitle';
import Timer from './Timer';
import uuid from '../utils/uuid';
import { ParticipantModel } from '../model/participant';

type Props = {
  participants: ParticipantModel[];
}

const TenderTableHead: FC<Props> = (props) => {
  const { participants } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const orderHandler = () => {
    if (activeIndex === (participants.length - 1)) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  }

  return (
    <thead>
      <tr className="h-9">
        <TenderTableTitle title="ХОД" />
        {participants.map((_, index) => (
          index === activeIndex
          ? (
            <td className="text-red-400 m-auto font-bold" key={uuid()}>
              <div className="flex justify-center">
                <Timer initialMinute={2} callback={orderHandler} />
              </div>
            </td>
          ) : (
            <td key={uuid()} />
          )
        ))}
      </tr>
      <tr>
        <TenderTableTitle title="ПАРАМЕТРЫ И ТРЕБОВАНИЯ" />
        {participants.map((_, index) => (
          <TenderTableTitle
            key={uuid()}
            className="flex flex-col"
            title={[
              `УЧАСТНИК №${index + 1} `,
              `${_.entity.render?.(_.entity.renderProps ?? { value: _.entity.value }) ?? _.entity.value}`,
            ]}
          />
        ))}
      </tr>
    </thead>
  );
}

export default TenderTableHead;
