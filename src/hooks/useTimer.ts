import { useLayoutEffect, useState } from 'react';

import TenderStoreInstance from '../store';

const useTimer = () => {
    const { ws } = TenderStoreInstance;
    const [activeIndex, setActiveIndex] = useState(0);
    const [initialMinute, setInitialMinute] = useState(2);
    const [initialSeconds, setInitialSeconds] = useState(0);

    useLayoutEffect(() => {
        ws.onmessage = response => {
          const parseResponse = JSON.parse(response.data);
          setActiveIndex(parseResponse.order);
          setInitialSeconds(parseResponse.seconds);
          setInitialMinute(parseResponse.minutes);
        };
    });

    return { activeIndex, initialMinute, initialSeconds };
};

export default useTimer;