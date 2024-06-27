import React, { useEffect,useState } from "react";

export default function useCryptoInfo() {
  let [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/exchange_rates`)
      .then((res) => res.json())
      .then((res) => setData(res.rates))
  }, []);
  return data;
}
