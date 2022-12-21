import React, { FC } from 'react';
import uuid from '../utils/uuid';

type Props = {
  title: string;
  participants?: JSX.Element[];
}

const TenderTableRow: FC<Props> = ({
  title,
  participants,
}) => (
  <tr>
    <td className={'max-w-[450px]'}>{title}</td>
    <>{participants?.map(
        (value) => (
          <td key={uuid()} className="w-64">{value}</td>
        )
      )
    }</>
  </tr>
);

export default TenderTableRow;
