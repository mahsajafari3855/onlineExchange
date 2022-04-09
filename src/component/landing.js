import React ,{useEffect} from 'react';
import { getCoin } from '../services/api';

const Landing = () => {
   useEffect(()=>{
       const fetchApi=async()=>{
           const data=await getCoin();
           console.log(data);

       }
       fetchApi()

   },[])
    return (
        <div>
        </div>
    );
};

export default Landing;