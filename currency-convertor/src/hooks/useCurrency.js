import { useEffect, useState } from "react";
const useCurrency = (currency) => {
  const url =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/" +
    currency +
    ".json";
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currency]);

//   console.log(`Data: ${JSON.stringify(data)}`);
  return data;
};

export default useCurrency;
