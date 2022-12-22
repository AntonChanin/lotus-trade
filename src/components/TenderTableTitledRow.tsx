import React, { FC } from 'react';

import TenderTableTitle from './TenderTableTitle';
import TitlesModel from '../model/tender';
import uuid from '../utils/uuid';

type Props = {
  model: TitlesModel;
};

const TenderTableTitledRow: FC<Props> = (props) => {
  const {
    model: { title, subTitle, participants, className, }
  } = props;

  return (
    <tr className={className}>
      <TenderTableTitle title={title} />
      {participants.map((_, index) => {
        const titleInstance = typeof subTitle === 'function' ? subTitle({ el: _, index }) : subTitle;
        const isNotJSX = typeof titleInstance === 'string' || !(`${[titleInstance].flat()}`.includes('[object Object]'));
        
        return (
          <TenderTableTitle
            key={uuid()}
            className="flex flex-col"
            title={[ isNotJSX ? [titleInstance].flat().map((el) => `${el}`) : '' ].flat()}
            children={!isNotJSX ? titleInstance : null}
          />
        );
      })}
    </tr>
  );
};

TenderTableTitledRow.defaultProps = {
  model: {
    title: 'ПАРАМЕТРЫ И ТРЕБОВАНИЯ',
    subTitle: ({ el, index }) => [
      `УЧАСТНИК №${index + 1} `,
      `${el.entity.render?.(el.entity.renderProps ?? { value: el.entity.value }) ?? el.entity.value}`,
    ],
    participants: [],
    className: '',
  }
};

export default TenderTableTitledRow;
