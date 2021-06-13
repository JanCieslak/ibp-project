import React from "react";

export function Cart() {
  return (
    <div className="w-100 flex justify-center">
      <div className="home-content">
        <h1>Shopping cart</h1>
        <table className="collapse">
          <tr>
            <th>Item name</th>
            <th className="tc">Quantity</th>
          </tr>
          <tr>
            <td>Product A</td>
            <td className="tc">1</td>
          </tr>
          <tr>
            <td>Product B</td>
            <td className="tc">8</td>
          </tr>
          <tr>
            <td>Product C</td>
            <td className="tc">5</td>
          </tr>
          <tr>
            <td>Product D</td>
            <td className="tc">1</td>
          </tr>
          <tr>
            <td>Product E</td>
            <td className="tc">2</td>
          </tr>
          <tr>
            <td>Product F</td>
            <td className="tc">1</td>
          </tr>
        </table>

        <div className="flex justify-end items-center mt3">
          <input type="text" placeholder="value"/>
          <label className="ml1">PLN</label>
          <button className="mh2">Make an offer</button>
          <button className="mh2">Make a counter offer</button>
        </div>
      </div>
    </div>
  );
}