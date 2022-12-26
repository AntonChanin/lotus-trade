import React from 'react';

import Timer from '../components/Timer';
import { TitleGenerator } from '../types/title';

const renderVatCalc = (props: Record<string, string | number>) => {
  const { full, vat, withoutVAT, currency } = props;
  return (
    <div className="flex flex-col">
      <span className="text-blue-400 m-auto">{full} {currency}.</span>
      <span className="text-red-500 m-auto">{vat} {currency}.</span>
      <span className="text-green-600 m-auto">{withoutVAT} {currency}.</span>
    </div>
  )
};

const renderTimer: (
  props: {activeIndex: number, initialMinute: number, initialSeconds: number },
  callback?: () => void
) => TitleGenerator  = (
  { activeIndex, initialMinute = 0, initialSeconds = 0 },
  callback,
) => ({ index }) => (
  <div className="flex justify-center text-red-400 m-auto font-bold">
    {index === activeIndex ? <Timer initialMinute={initialMinute} initialSeconds={initialSeconds} callback={callback} /> : null}
  </div>
);

const renderParticipantsTitles: TitleGenerator = ({ el, index }) => [
  `УЧАСТНИК №${index + 1} `,
  `${el.entity.render?.(el.entity.renderProps ?? { value: el.entity.value }) ?? el.entity.value}`,
];

export { renderTimer, renderVatCalc, renderParticipantsTitles };