import React, { FC } from 'react';

type Props = {
  title: string | string[];
  className?: string;
}

const TenderTableTitle: FC<Props> = ({ title, className }) => {
  const restTitle = [...title];
  return (
    <th className="text-gray-500">
      <div className={`text-gray-500 ${className ?? ''}`.trimEnd()}>
        {
          restTitle[0].length > 1 ? restTitle.map((t) => <div>{t}</div>) : <div>{title}</div>
        }
      </div> 
    </th>
  );
};

export default TenderTableTitle;
