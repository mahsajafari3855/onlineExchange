import React ,{useEffect,useState} from 'react';
import { getCoin } from '../services/api';
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
                            {coins.map(coin=> <p key={coins.id}> {coin.name}</p>)}
                             

            </div>
            : <Spiner/>}
            
        </>
    );
};

export default Landing;