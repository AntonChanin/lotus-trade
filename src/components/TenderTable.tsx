import React, { FC, useLayoutEffect } from 'react';
import { observer } from 'mobx-react-lite';

import TenderStoreInstance from '../store';
import TenderTableHead from './TenderTableHead';
import TenderTableBody from './TenderTableBody';

type Props = {
  roomId: string;
};

const TenderTable: FC<Props> = ({ roomId }) => {
  const { participants, loadRoom } = TenderStoreInstance;
  useLayoutEffect(() => {
    const featchData = async () => {
      await loadRoom(roomId);
    }
    featchData();
  })

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
