import React, { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';

import TenderStoreInstance from '../store';
import TenderTableRow from './TenderTableRow';
import TenderTableTitle from './TenderTableTitle';
import Timer from './Timer';
import uuid from '../utils/uuid';
import { TenderTableRowData } from '../types/tender';

const TenderTable: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { participants } = TenderStoreInstance;

  const rows: TenderTableRowData[] = [
    { title: 'Наличие комплекса мероприятий, повышающих стандарты качества изготовления', field: 'complexQualityBoost' },
    { title: 'Срок изготовления лота, дней', field: 'lotTime' },
    { title: 'Гарантийные обязательства, мес', field: 'warrantyObligations' },
    { title: 'Условие оплаты', field: 'paymentTerms' },
    { title: 'Стоимость изготовления лота, руб. (без НДС)', field: 'lotCost' },
    { title: 'Действия:', field: 'action' },
  ];

  const orderHandler = () => {
    if (activeIndex === (participants.length - 1)) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  }

  return (
    <div className="overflow-auto">
      <table className="w-max">
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
                ]} />
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(({ title, field }) => (<TenderTableRow key={uuid()} title={title} participants={participants.map((participant) => {
            const { render, renderProps, value, } = participant[field];
            return render?.(renderProps ?? { value }) ?? <div className="flex justify-center">{value}</div>;
          })} />))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default observer(TenderTable);
