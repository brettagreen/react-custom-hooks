import { useState } from "react";
import axios from 'axios';
import dataFilter from "./dataFilter";

const useAxios = (baseAPI) => {
  const [cardArray, setCardArray] = useState([]);
  
  async function addCard(moreURL) {
    let res;
    if (moreURL) {
        res = await axios.get(baseAPI + moreURL);
    } else {
        res = await axios.get(baseAPI);
    }
    console.log('returned data', res.data);

    setCardArray([...cardArray, dataFilter(res.data, moreURL ? 'poke' : 'cards')]);
  }

  const clear = () => setCardArray([]);

  return [cardArray, addCard, clear];
}

export default useAxios;