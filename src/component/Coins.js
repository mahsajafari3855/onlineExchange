import React from 'react';

const Coins = ({image,name,symbol,price,marketPrice,priceChange}) => {
    return (
        <div>
            <img src={image}/>
            <span> {name}</span>
            <span> {symbol}</span>
            <span> {price}</span>
            <span> {marketPrice}</span>
            <span> {priceChange}</span>

            
        </div>
    );
};

export default Coins;