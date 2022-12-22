import React, { FC, PropsWithChildren } from 'react';

import uuid from '../utils/uuid';

type Props = {
  title: string | string[];
  className?: string;
}

const TenderTableTitle: FC<PropsWithChildren<Props>> = ({ title, className, children }) => {
  const restTitle = [...title];
  return (
    <th className="text-gray-500">
      <div className={`text-gray-500 ${className ?? ''}`.trimEnd()}>
        <>
          {
            restTitle[0].length > 1 ? restTitle.map((t) => <div key={uuid()}>{t}</div>) : <div key={uuid()}>{title}</div>
          }
        </> 
        <>
          {children}
        </>
      </div> 
    </th>
  );
};

export default TenderTableTitle;
