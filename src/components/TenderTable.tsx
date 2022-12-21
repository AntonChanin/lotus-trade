import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';

import TenderStoreInstance from '../store';
import TenderTableHead from './TenderTableHead';
import TenderTableBody from './TenderTableBody';

const TenderTable: FC = () => {
  const { participants } = TenderStoreInstance;

  return (
    <div className="overflow-auto">
      <table className="w-max">
        <TenderTableHead participants={participants} />
        <TenderTableBody participants={participants} />
      </table>
    </div>
  );
};

export default observer(TenderTable);
