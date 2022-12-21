type ParticipantFields =
  'entity'
  | 'complexQualityBoost'
  | 'lotTime'
  | 'warrantyObligations'
  | 'paymentTerms'
  | 'lotCost'
  | 'action';

type ExecuteValue = {
  value: string | number 
  render?: (props: Record<string, string | number>) => JSX.Element ;
  renderProps?: Record<string, string | number>
};

type ParticipantModel = {
  entity: ExecuteValue;
  complexQualityBoost: ExecuteValue;
  lotTime: ExecuteValue;
  warrantyObligations: ExecuteValue;
  paymentTerms: ExecuteValue;
  lotCost: ExecuteValue;
  action: ExecuteValue;
}

export type { ExecuteValue, ParticipantModel, ParticipantFields };
