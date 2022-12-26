import React, { FC } from 'react';
import { useMatch } from 'react-router-dom';

import TenderTable from '../components/TenderTable';

const TenderPage: FC = () => {
  const { params } = useMatch('/tenders/:roomId') ?? {};
  const { roomId } = params ?? {};

  return (
    <div className="flex justify-center mx-auto h-[calc(100vh-100px)]">
      <div className="flex flex-col max-w-[1024px]">
        <div className="container">
          {roomId && <TenderTable roomId={roomId} />}
        </div>
      </div>
    </div>
  );
};

export default TenderPage;
   