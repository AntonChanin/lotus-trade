import React, { FC } from 'react';
import TenderTable from '../components/TenderTable';


const TenderPage: FC = () => {

  return (
    <div className="flex justify-center mx-auto h-[calc(100vh-100px)]">
      <div className="flex flex-col max-w-[1024px]">
        <div className="container">
          <TenderTable />
        </div>
      </div>
    </div>
  );
};

export default TenderPage;
   