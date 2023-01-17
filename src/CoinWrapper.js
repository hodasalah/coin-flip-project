import { useState } from "react";
import Coin from "./Coin";
import { choice } from "./helpers";
const CoinWrapper = ({ coins }) => {
  const [curSide, setCurSide] = useState(null);
  const [nflips, setNflips] = useState(0);
  const [nheads, setNheads] = useState(0);
  const [ntails, setNtails] = useState(0);
  const flipCoin = () => {
    let side = choice(coins);
    console.log(side);
    setCurSide(side.url);
    setNflips(nflips + 1);
    side.side === "heads" ? setNheads(nheads + 1) : setNtails(ntails + 1);
  };
  return (
    <div className="wrapper">
      <h2> Coin Container </h2>
      {curSide && <Coin side={curSide} />}
      <button onClick={flipCoin}> Flip coin </button>
      <p>
        out of {nflips} flips, there have been {nheads} heads and {ntails} tails
      </p>
    </div>
  );
};
export default CoinWrapper;
CoinWrapper.defaultProps = {
  coins: [
    {
      side: "tails",
      url:
        "https://www.usmint.gov/wordpress/wp-content/uploads/2022/12/2023-kennedy-half-dollar-uncirculated-reverse-768x768.jpg"
    },
    {
      side: "heads",
      url:
        "https://www.usmint.gov/wordpress/wp-content/uploads/2022/12/2023-kennedy-half-dollar-uncirculated-obverse-philadelphia-768x768.jpg"
    }
  ]
};
