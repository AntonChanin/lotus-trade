import React, { FC } from 'react';

type Props = {
  title: string;
}

const TenderTableTitle: FC<Props> = ({ title }) => (<th>{title}</th>);

export default TenderTableTitle;
