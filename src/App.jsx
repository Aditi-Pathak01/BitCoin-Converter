import { useEffect, useState } from "react";
import { InputBox } from "./components";
import useCryptoInfo from "./hooks/useCryptoInfo";

function App() {
  let [amount, setAmount] = useState(0);
  let [cAmt, setCamt] = useState(0);
  let [from, setFrom] = useState("btc");
  let [to, setTo] = useState("eth");
  let cryptoInfo = useCryptoInfo(from);
  let options = Object.keys(cryptoInfo);
  console.log(cryptoInfo);

  const convert = () => {
    setCamt(amount * cryptoInfo[to].value);
  };

  return (
    <>
      <div className="w-full h-screen p-8 mainDiv relative">
        <h1 className="text-[4vw] text-center text-white absolute top-[30%] left-[3%] tracking-widest">
          CryptoCurrency
          <br />
          Converter
        </h1>
        <div className="absolute top-[40%] left-[50%] flex justify-center items-center flex-col gap-5 w-1/3 h-1/2 bg-white rounded-2xl p-8">
          <InputBox
            label="FROM"
            amt={amount}
            sc={from}
            amtChange={(amount) => {
              setAmount(amount);
            }}
            cryptoChange={(crypto) => {
              setFrom(crypto);
            }}
          />
          <InputBox
            label="TO"
            amt={cAmt}
            sc={to}
            cryptoOpts={options}
            cryptoChange={(crypto) => {
              setTo(crypto);
            }}
          />
          <button
            className="bg-blue-950 text-yellow-100 p-2 rounded-md"
            onClick={() => {
              convert();
            }}
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
