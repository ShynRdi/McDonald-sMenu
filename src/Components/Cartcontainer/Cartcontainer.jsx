import React from "react";
import "./Cartcontainer.css";

function Cartcontainer(props) {
  return (
    <div className="cart-container">
      {/* This is going to be cart cantainer */}
      <div className="details-container">
        <div className="total-costs">
          <p>Total Cost:</p>
          <span>{props.totalCost}$</span>
        </div>
        <div className="total-costs">
          <p>Discount:</p>
          <span>{props.discount}$</span>
        </div>
        <div className="discount-input-box">
          <input
            type="text"
            name="discountCode"
            id="discountCode"
            placeholder="Discount Code"
          />
          <button className="discount-submit">✔︎</button>
        </div>
      </div>
      <div className="bottom-part-of-cart">
        <div className="final-cost-box">
          <p>Final Cost:</p>
          <span>{props.finalCost}$</span>
        </div>
        <button className="submit-button">SUBMIT!!</button>
      </div>
    </div>
  );
}

export default Cartcontainer;
