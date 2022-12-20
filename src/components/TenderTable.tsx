import React, { FC } from 'react';
import { ParticipantModel } from '../model/participant';
import { TenderTableRowData } from '../types/tender';
import TenderTableRow from './TenderTableRow';
import TenderTableTitle from './TenderTableTitle';

const TenderTable: FC = () => {
  const participants: ParticipantModel[] = [
    {
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

  return (
    <div>
      <table>
        <thead>
          <tr>
             <TenderTableTitle title="ПАРАМЕТРЫ И ТРЕБОВАНИЯ" />
          {participants.map((_, index) => <TenderTableTitle title={`УЧАСТНИК №${index + 1}`} />)}
          </tr>
         
        </thead>
        <tbody>
          {rows.map(({ title, field }) => (<TenderTableRow title={title} participants={participants.map((participant) => {
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
