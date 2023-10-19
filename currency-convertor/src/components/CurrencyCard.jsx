import React from "react";

function CurrencyCard({
  title="",
  selectedCurrency = "usd",
  currencies = [],
  onAmountChange,
  onCurrencyChange,
  amount = 0,
  className,
  readOnly = false,
}) {
  return (
    <div
      className={`flex flex-row bg-white w-full rounded-lg px-2 py-4 justify-center ${className}`}
    >
      <div className="flex flex-col" style={{ flex: "70%" }}>
        <label className="text-xs text-slate-950 font-semibold mb-2">
          {title}
        </label>
        <input
          type="text"
          placeholder="Enter amount"
          readOnly={readOnly}
          value={amount || 0}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className="px-2 py-3 bg-gray-300 rounded-lg outline-none text-gray-800 text-xs"
        />
      </div>
      <div className="mx-3" />
      <div className="flex flex-col mb-1" style={{ flex: "30%" }}>
        <label className="text-xs text-slate-950 font-semibold mb-2">
          Currency
        </label>
        <select
          // value={selectedCurrency}
          defaultValue={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="px-2 py-3 bg-gray-300 rounded-lg outline-none text-gray-800 text-xs"
        >
          {currencies.map((currency) => (
            <option
              key={currency}
              value={currency}
              selected={selectedCurrency === currency}
            >
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CurrencyCard;
