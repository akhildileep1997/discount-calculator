import React, { useState } from 'react'
import './Discount.css'



function Discount() {
  const[price,setPrice]=useState(0)
  const[discount,setDiscount]=useState(0)
  const[profit,setProfit]=useState(0)
  const[reduction,setReduction]=useState(0)

  const calculate = () =>{
   if(price === 0 || discount === 0)
   {
    alert("please enter the values")
   }
   else{
    const output = (price*discount)/100
    setProfit(output)
    const newAmount = price-output
    setReduction(newAmount)
   }
  }

  const reset = () =>{
    setDiscount(0)
    setPrice(0)
    setProfit(0)
    setReduction(0)
  }

  return (
    <>
      <div class="section">
        <div class="calculator-area">
          <div class="text-area">
            <h1>Discount Calculator</h1>
          </div>
          <div class="processing-area">
            <div class="discount-area">
              <p>Your Discount Price is</p>
              <h1 style={{fontSize:'60px',fontWeight:'bolder'}}>{reduction}</h1>
            </div>
            <div className="sample-information">
              <div>
                Actual amount : <span style={{color:'red'}}>{price}</span>
              </div>
              <div>
                Discount Amount : <span style={{color:'blue'}}>{profit}</span>{" "}
              </div>
            </div>
            <div>
              <label>Enter Amount</label> <br />
              <input
                value={"" | price}
                onChange={(e) => setPrice(e.target.value)}
                class="form-control"
                type="text"
              />
            </div>
            <div>
              <label>Enter discount percent</label> <br />
              <input
                value={"" | discount}
                onChange={(e) => setDiscount(e.target.value)}
                class="form-control"
                type="text"
              />
            </div>
            <div class="button-div">
              <button onClick={() => calculate()} class="btn btn-success">
                Calculate
              </button>
              <button onClick={() => reset()} class="btn btn-danger">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Discount