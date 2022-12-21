import React, { FC, useState } from 'react';
import { ParticipantModel } from '../model/participant';
import { TenderTableRowData } from '../types/tender';
import uuid from '../utils/uuid';
import TenderTableRow from './TenderTableRow';
import TenderTableTitle from './TenderTableTitle';
import Timer from './Timer';

const TenderTable: FC = () => {
  const participants: ParticipantModel[] = [
    {
      entity: { value: 'Mitsubishi', },
      complexQualityBoost: { value: '-', },
      lotTime: { value: 80, },
      warrantyObligations: { value: 24, },
      paymentTerms: { value: '30%', },
      lotCost:  {
        value: '3,700,000 руб. \n -25,000 руб. \n 2,475,000 руб.',
        renderProps: { full: '3,700,000',
          vat: '-25,000',
          withoutVAT: '2,475,000',
          currency: 'руб',
        },
        render: (props) => {
          const { full, vat, withoutVAT, currency } = props;
          return (
            <div className="flex flex-col">
              <span className="text-blue-400 m-auto">{full} {currency}.</span>
              <span className="text-red-500 m-auto">{vat} {currency}.</span>
              <span className="text-green-600 m-auto">{withoutVAT} {currency}.</span>
            </div>
          )
        },
      },
      action: { value: '', },
    },
    {
      entity: { value: 'Mitsui', },
      complexQualityBoost: { value: '-', },
      lotTime: { value: 90, },
      warrantyObligations: { value: 24, },
      paymentTerms: { value: '100%', },
      lotCost:  {
        value: '3,200,000 руб. \n -25,000 руб. \n 2,475,000 руб.',
        renderProps: { full: '3,200,000',
          vat: '-25,000',
          withoutVAT: '2,475,000',
          currency: 'руб',
        },
        render: (props) => {
          const { full, vat, withoutVAT, currency } = props;
          return (
            <div className="flex flex-col">
              <span className="text-blue-400 m-auto">{full} {currency}.</span>
              <span className="text-red-500 m-auto">{vat} {currency}.</span>
              <span className="text-green-600 m-auto">{withoutVAT} {currency}.</span>
            </div>
          )
        },
      },
      action: { value: '', },
    },
    {
      entity: { value: 'Sumitomo', },
      complexQualityBoost: { value: '-', },
      lotTime: { value: 75, },
      warrantyObligations: { value: 22, },
      paymentTerms: { value: '60%', },
      lotCost:  {
        value: '2,800,000 руб. \n -25,000 руб. \n 2,475,000 руб.',
        renderProps: { full: '2,800,000',
          vat: '-25,000',
          withoutVAT: '2,475,000',
          currency: 'руб',
        },
        render: (props) => {
          const { full, vat, withoutVAT, currency } = props;
          return (
            <div className="flex flex-col">
              <span className="text-blue-400 m-auto">{full} {currency}.</span>
              <span className="text-red-500 m-auto">{vat} {currency}.</span>
              <span className="text-green-600 m-auto">{withoutVAT} {currency}.</span>
            </div>
          )
        },
      },
      action: { value: '', },
    },
    {
      entity: { value: 'Fuyo Group', },
      complexQualityBoost: { value: '-', },
      lotTime: { value: 120, },
      warrantyObligations: { value: 36, },
      paymentTerms: { value: '50%', },
      lotCost:  {
        value: '2,500,000 руб. \n -25,000 руб. \n 2,475,000 руб.',
        renderProps: { full: '2,500,000',
          vat: '-25,000',
          withoutVAT: '2,475,000',
          currency: 'руб',
        },
        render: (props) => {
          const { full, vat, withoutVAT, currency } = props;
          return (
            <div className="flex flex-col">
              <span className="text-blue-400 m-auto">{full} {currency}.</span>
              <span className="text-red-500 m-auto">{vat} {currency}.</span>
              <span className="text-green-600 m-auto">{withoutVAT} {currency}.</span>
            </div>
          )
        },
      },
      action: { value: '', },
    },
    {
      entity: { value: 'Dai-Ichi Kangyo', },
      complexQualityBoost: { value: '-', },
      lotTime: { value: 80, },
      warrantyObligations: { value: 24, },
      paymentTerms: { value: '30%', },
      lotCost:  {
        value: '3,700,000 руб. \n -25,000 руб. \n 2,475,000 руб.',
        renderProps: { full: '3,700,000',
          vat: '-25,000',
          withoutVAT: '2,475,000',
          currency: 'руб',
        },
        render: (props) => {
          const { full, vat, withoutVAT, currency } = props;
          return (
            <div className="flex flex-col">
              <span className="text-blue-400 m-auto">{full} {currency}.</span>
              <span className="text-red-500 m-auto">{vat} {currency}.</span>
              <span className="text-green-600 m-auto">{withoutVAT} {currency}.</span>
            </div>
          )
        },
      },
      action: { value: '', },
    },
  ];

  const rows: TenderTableRowData[] = [
    { title: 'Наличие комплекса мероприятий, повышающих стандарты качества изготовления', field: 'complexQualityBoost' },
    { title: 'Срок изготовления лота, дней', field: 'lotTime' },
    { title: 'Гарантийные обязательства, мес', field: 'warrantyObligations' },
    { title: 'Условие оплаты', field: 'paymentTerms' },
    { title: 'Стоимость изготовления лота, руб. (без НДС)', field: 'lotCost' },
    { title: 'Действия:', field: 'action' },
  ];

  const [moveListener, setMoveListener] = useState(participants.map((_, i) => (i === 0)));
  const [prevIndex, setPrevIndex] = useState(0);

  const moveHandler = () => {
    setMoveListener(
      moveListener.map((move, index) => {
        if (move) {
          setPrevIndex(index);
          return !move;
        }
        if (index === prevIndex + 1) {
          if (index === (moveListener.length - 1)) {
            setPrevIndex(0);
          }
          return !move;
        }
        return move;
      })
    );
  }

  return (
    <div className="overflow-auto">
      <table className="w-max">
        <thead>
          <tr>
            <TenderTableTitle title="ХОД" />
            {moveListener.map((isMove) => (
              isMove
              ? (
                <td className="text-red-400 m-auto font-bold" key={uuid()}>
                  <div className="flex justify-center">
                    <Timer initialMinute={2} callback={moveHandler} />
                  </div>
                </td>
              )
              : (
                <td key={uuid()}></td>
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

export default TenderTable;
