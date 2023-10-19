import React, { useState } from "react";
import { CurrencyCard } from "./components";
import { useCurrency } from "./hooks";

function App() {
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);

  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");

  const data = useCurrency(fromCurrency);

  const currencies = Object.keys(data);

  const onSwap = () => {
    setFromAmount(toAmount);
    setToAmount(fromAmount);

    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const convert = () => {
  
    setToAmount(fromAmount * data[toCurrency]);
  };

  return (
    <div className="bg-slate-800 text-white h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col bg-slate-900 rounded-2xl p-20 w-2/5 items-center justify-center">
        <h1 className="text-2xl mb-4">Currency Convertor</h1>

        {/* Currency section starts here */}

        <CurrencyCard
          title="From"
          amount={fromAmount}
          selectedCurrency={fromCurrency}
          currencies={currencies}
          onAmountChange={(amount) => {
            setFromAmount(amount);
          }}
          onCurrencyChange={(currency) => {
            setFromCurrency(currency);
          }}
          className="relative"
        />

        <button
          className="px-3 py-2 bg-green-500 hover:bg-green-700 transition duration-300 ease-in-out rounded-lg"
          onClick={onSwap}
        >
          Swap
        </button>

        <CurrencyCard
          title="To"
          amount={toAmount}
          selectedCurrency={toCurrency}
          currencies={currencies}
          readOnly ={true}
          onAmountChange={(amount) => {
            setToAmount(amount);
          }}
          onCurrencyChange={(currency) => {
            setToCurrency(currency);
          }}
        />

        <button
          className="px-3 py-2 bg-green-500 hover:bg-green-700 transition duration-300 ease-in-out rounded-lg mt-6 w-full"
          onClick={convert}
        >
          Convert
        </button>
      </div>
    </div>
  );
}

export default App;
