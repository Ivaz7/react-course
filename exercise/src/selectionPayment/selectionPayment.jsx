import { useState } from "react";

function SelectionPayment() {
  let [payment, setPayment] = useState("Bank");
  let [shipping, setShipping] = useState("Pick Up");

  function handleChange(e) {
    setPayment(e.target.value);
  }

  function handleShipping(e) {
    setShipping(e.target.value);
  }

  const style = {
    margin: "1rem",
  }

  return (
    <div style={style}>
      <select onChange={handleChange} name="payment" id="payment">
        <option value="Bank">Bank</option>
        <option value="Cash">Cash</option>
        <option value="Credit">Credit</option>
      </select>

      <p>Payment: {payment}</p>
      
      <label>
        <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShipping}/>
        Pick Up
      </label>
      <label>
        <input type="radio" value="Deliverys" checked={shipping === "Deliverys"} onChange={handleShipping}/>
        Delivery
      </label>

      <p>Shipping: {shipping}</p>
    </div>
  )
}

export default SelectionPayment;