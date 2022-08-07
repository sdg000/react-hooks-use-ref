import React, { useEffect, useState, useRef } from "react";
import { makeRandomNumber } from "../utils";

function Ticker() {
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("black");
  const prevPriceRef = useRef(price)
  

  useEffect(() => {
    const id = setInterval(() => setPrice(makeRandomNumber), 1000);
    return function () {
      clearInterval(id);
    };
  }, []);

  //anytime {price} changes, useEffect runs and does the ff;
  /**
   * create {prevPrice}, set to current value of {ref},
   * compare price / prevPrice and set corresponding colors.
   * set new prevPrice by;
   * saving prevPriceRef to the latest version of price
   * 
   * example: 
   * @step 1 price = 0, prevPriceRef = useRef(price), ie prevPriceRef = 0
   * To compare prices @ step1; price - prevPrice.current = 0 (0-0 = 0)
   * 
   * @step 2, price increase to 2, To compare price, price - PrevPrice (2 - 0) = 0
   * to keep track of price changes, previous "ref" must be set at current price (2)   ie,   prevPrice.current = price
   * 
   * @step 3, when price increase to 4, to know difference in price, price (4) - prevPrice(2) = 2.
   * 
   * ... when price changes value , prevPrice assumes it's old value.
   */
  useEffect(() => {
    const prevPrice = prevPriceRef.current
    if (price > prevPrice){
      setColor("green")
    }else if (price < prevPrice){
      setColor("red")
    }else {
      setColor("black")
    }
    prevPriceRef.current = price
  }, [price])


  useEffect(() => {
    const id = setInterval(() => (setPrice(makeRandomNumber)), 1000);
    return function clear() {
      clearInterval(id)
  }
  }, [])

  return (
    <div>
      <h1>TickerMaster</h1>
      <h2 style={{ color: color }}>Price: ${price}</h2>
    </div>
  );
}

export default Ticker;
