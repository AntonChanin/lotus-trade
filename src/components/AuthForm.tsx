import React, { FC, FormEventHandler, Fragment, useState } from 'react';

import { ParticipantModel } from '../model/participant';
import { ParticipantFields } from '../types/participant';
import { renderVatCalc } from '../utils/render';
import TenderInput from './TenderInput';
import TenderStoreInstance from '../store';
import AcceptModal from './AcceptModal';
import uuid from '../utils/uuid';

type Props = {
  localization?: Record<string, string>;
};

const AuthForm: FC<Props> = ({ localization }) => {
  const { participants, setParticipants } = TenderStoreInstance;
  const [ modalIsOpen, setModalIsOpen ] = useState(false);
  const [ prevParticipants, setPrevParticipants ] = useState<ParticipantModel[]>([]);
  const model: ParticipantModel = {
    entity: { value: '-', type: 'string' },
    complexQualityBoost: { value: '-', type: 'string' },
    lotTime: { value: 0, type: 'number' },
    warrantyObligations: { value: 0, type: 'number' },
    paymentTerms: { value: '0%', type: 'string' },
    lotCost:  {
      value: '0 руб.',
      type: 'string',
      renderProps: {
        full: '0',
        vat: '0',
        withoutVAT: '0',
        currency: 'руб',
      },
      render: renderVatCalc,
    },
    action: { value: '', type: 'string' },
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setPrevParticipants(participants);
    setParticipants([ ...participants, model]);
    setModalIsOpen(true);
  };

  return <form className="shadow-md max-w-6xl flex flex-col p-4 my-4" onSubmit={handleSubmit}>
    <h3 className="px-2 font-bold">{localization?.['title'] ?? 'title'}</h3>
    {
      (Object.keys(model) as ParticipantFields[]).map((key) => {
        const isNumber = model[key].type === 'number';
        const isSpecialRender = !!model[key].render;
        return (
          <Fragment key={uuid()}>
            <TenderInput
              label={`${localization?.[key]}` ?? key}
              callback={(value) => { model[key] = { value: isNumber ? +value : value } }}
              className="hover:bg-gradient-to-r from-sky-100 to-indigo-100 max-w-2xl p-2 w-[calc(100vw-100px)] flex justify-between"
            />
            <>
              {isSpecialRender && (
                <>
                  {model[key].renderProps
                    && Object.keys(model[key].renderProps ?? {}).map((field) => (<TenderInput
                      key={uuid()}
                      label={`${localization?.[field]}` ?? field}
                      callback={(value) => {
                        if (model[key]?.renderProps?.[field]) {
                          model[key] = {
                            ...model[key],
                            render: renderVatCalc,
                            renderProps: { 
                              ...model[key]?.renderProps,
                              [field]: isNumber ? +value : value,
                            }
                          }
                        }
                      }}
                      className="hover:bg-gradient-to-r from-sky-100 to-indigo-100 p-2 max-w-2xl w-[calc(100vw-100px)] flex justify-between"
                    />))
                  }
                </>
              )}
            </>
          </Fragment>
        )
      })
    }
   
    <button
      type="submit"
      className="bg-gradient-to-r from-sky-500 to-indigo-500 p-2 my-2 text-white font-bold"
    >
      {localization?.['goToTrade'] ?? 'go to trade'}
    </button>
    {modalIsOpen && (
    <AcceptModal
      onClose={() => {
        setParticipants(prevParticipants);
        setModalIsOpen(false);
      }}
    />)}
  </form>;
};

AuthForm.defaultProps = {
  localization: {
    goToTrade: 'На торги',
    title: 'ЗАПОЛНИТЕ ФОРМУ УЧАСТНИКА ТОРГОВ',
    entity: 'Организация',
    complexQualityBoost: 'Мероприятия, повышающих стандарты качества изготовления',
    lotTime: 'Срок изготовления лота, дней',
    warrantyObligations: 'Гарантийные обязательства, мес',
    paymentTerms: 'Условие оплаты',
    lotCost: 'Стоимость изготовления лота, руб. (без НДС)',
    full: 'Полная стоимость',
    vat: 'НДС',
    withoutVAT: 'За вычетом НДС',
    currency: 'Валюта',
    action: 'Действие:', 
  }
}

export default AuthForm;
