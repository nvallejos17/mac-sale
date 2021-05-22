import { useState, useEffect } from 'react';
import axios from 'axios';

const useRates = () => {
  const [daiArs, setDaiArs] = useState(null);
  const [daiUsd, setDaiUsd] = useState(null);

  useEffect(() => {
    axios.get('https://criptoya.com/api/buenbit/dai/ars').then((res) => {
      const { ask } = res.data;
      setDaiArs(ask);
    });

    axios.get('https://criptoya.com/api/buenbit/dai/usd').then((res) => {
      const { bid } = res.data;
      setDaiUsd(bid);
    });
  }, []);

  const [usdArs, setUsdArs] = useState(null);

  useEffect(() => setUsdArs(daiArs / daiUsd), [daiArs, daiUsd]);

  return { usdArs };
};

export default useRates;
