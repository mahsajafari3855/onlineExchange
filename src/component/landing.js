import React, { useEffect, useState } from "react";
import { getCoin } from "../services/api";
import Coins from "./Coins";
import Spiner from "./spiner";

const Landing = () => {
  const [coins, setCoin] = useState([]);
  const [search, setSearch] = useState([]);
  const searchHandler = (event) => {
    setSearch(event.target.value);
  };
  const searchedCoins = coins.filter((coin) =>
    coin.name.toString().toLowerCase().includes(search.toString().toLowerCase())
  );

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCoin();
      console.log(data);
      setCoin(data);
    };
    fetchApi();
  }, []);
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={searchHandler}
      />
      {coins.length ? (
        <div>
          {searchedCoins.map((coins) => (
            <Coins
              key={coins.id}
              name={coins.name}
              image={coins.image}
              symbol={coins.symbol}
              price={coins.current_price}
              marketPrice={coins.market_cap}
              priceChange={coins.price_change_24h}
            />
          ))}
        </div>
      ) : (
        <Spiner />
      )}
    </>
  );
};

export default Landing;
