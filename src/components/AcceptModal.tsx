import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  onClose?(): void;
  localization?: Record<string, string>;
};

const AcceptModal: FC<Props> = ({ localization, onClose: handleClose }) => {
  return (
    <div className="absolute top-1/2 bottom-1/2 bg-white shadow-md w-max h-max p-4">
      <p className="font-bold">{localization?.['modalQuestion'] ?? 'modal question'}</p>
      <div className="flex justify-between w-[calc(100vw-260px)] max-w-2xl">
        <button
        onClick={handleClose}
        className="bg-gradient-to-r from-sky-500 to-indigo-500 p-2 my-2 text-white font-bold"
        >{localization?.['close'] ?? 'close'}</button>
        <Link to="/tenders">
          <button
            className="bg-gradient-to-r from-sky-500 to-indigo-500 p-2 my-2 text-white font-bold"
          >{localization?.['accept'] ?? 'accept'}</button>
        </Link>
      </div>
    </div>
  );
};

AcceptModal.defaultProps = {
  localization: {
    accept: 'Подтверждаю',
    close: 'Закрыть/Отмена',
    modalQuestion: 'Вы точно хотите перейти на торги?',
  }
}

export default AcceptModal;
