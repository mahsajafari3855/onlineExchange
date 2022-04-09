import React ,{useEffect,useState} from 'react';
import { getCoin } from '../services/api';
import Coins from './Coins';
import Spiner from './spiner';

const Landing = () => {
     const[coins,setCoin]=useState([]);
   useEffect(()=>{
       const fetchApi=async()=>{
           const data=await getCoin();
           console.log(data);
           setCoin(data)

       }
       fetchApi()

   },[])
    return (
        <>
            <input type="text" placeholder='Search'/>
            {coins.length?
            <div>
                            {coins.map(coins=>
                            <Coins 
                            key={coins.id}
                            name={coins.name}
                            image={coins.image}
                            symbol={coins.symbol}
                            price={coins.current_price}
                            marketPrice={coins.market_cap}
                            priceChange={coins.price_change_24h}
                            />
                          )}
                             

            </div>
            : <Spiner/>}
            
        </>
    );
};

export default Landing;