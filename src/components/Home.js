import React from "react";
import {ProductCard} from "./ProductCard";

function produceProductArray() {
  const products = new Array(15);

  for (let i = 0; i < products.length; i++) {
    products[i] = <ProductCard name={"Product " + i} />;
  }

  return products;
}

export function Home() {
  return (
    <div className="w-100 flex justify-center">
      <div className="home-content">
        <h1 className="ml4">Store</h1>
        <div className="flex flex-wrap">
          {
            produceProductArray()
          }
        </div>
      </div>
    </div>
  );
}