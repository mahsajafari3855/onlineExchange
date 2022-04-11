import React from "react";
import styles from "../style/Coins.module.css";

const Coins = ({ image, name, symbol, price, marketPrice, priceChange }) => {
  return (
    <div className={styles.container}>
      <img src={image} className={styles.image} />
      <span className={styles.name}> {name}</span>
      <span className={styles.symbol}> {symbol}</span>
      <span className={styles.currentPrice}> {price}</span>
      <span className={styles.marketCap}> {marketPrice}</span>
      <span
        className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange}
      >
        {priceChange.toFixed(2)}
      </span>
    </div>
  );
};

export default Coins;
