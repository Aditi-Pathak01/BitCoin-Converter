import React from "react";

function InputBox({
  label,
  amt,
  amtChange,
  sc,
  cryptoOpts = ['Bitcoin'],
  cryptoChange,

  
}) {
  return (
    <div className="w-full h-1/3 flex justify-around items-center gap-4 border border-gray-300 rounded-xl px-2">
      <div className="w-1/2 h-full  flex justify-center items-center gap-4">
        <label className="text-[1.2vw] text-blue-950 font-semibold">
          {label}
        </label>
        <input
          type="number"
          className="w-[80%] border border-gray-300 text-black rounded-md p-[0.2vh] pl-2 outline-none"
          value={amt}
          onChange={(e) => {
            amtChange && amtChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="w-1/2 h-full flex justify-center items-center gap-4">
        <label className="text-[1.2vw] text-blue-950 font-semibold">
          Crypto
        </label>
        <select
          className="w-[100%] border border-gra-800 rounded-md font-semibold p-[0.4vh] outline-none"
          value={sc}
          onChange={(e) => {
            cryptoChange && cryptoChange(e.target.value);
          }}
        >
          {cryptoOpts.map((crypto) => {
            return (
              <option key={crypto} value={crypto}>
                {crypto}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
