import React, { FC } from 'react';

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
          <td className="w-64">{value}</td>
        )
      )
    }</>
  </tr>
);

export default TenderTableRow;
