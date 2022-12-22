import { action, makeObservable, observable } from 'mobx';
import { ParticipantModel } from '../model/participant';
import { renderVatCalc } from '../utils/render';

class TenderStore {
  participants: ParticipantModel[] = [
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
        render: renderVatCalc,
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
        render: renderVatCalc,
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
        render: renderVatCalc,
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
        render: renderVatCalc,
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
        render: renderVatCalc,
      },
      action: { value: '', },
    },
  ];

  constructor() {
    makeObservable(this, {
      participants: observable,
      setParticipants: action.bound,
    })
  }

  setParticipants(changeParticipants: ParticipantModel[]) {
    this.participants = changeParticipants;
  }
}

const TenderStoreInstance = new TenderStore();

export default TenderStoreInstance;
