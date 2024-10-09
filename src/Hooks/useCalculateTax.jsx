import { useState, useEffect } from "react";

const useCalculateTax = (productOnCart) => {
  const [totalPrice, setTotalPrice] = useState();
  const [subtotalPrice, setSubtotalPrice] = useState();

  useEffect(() => {
    let total = 0;
    let sub = 0;


    productOnCart.forEach((product) => {
      sub += product.price * product.amount;
    });

    const calculateTax = (totalAmount) => {
      total += sub + totalAmount * (2 / 100);
      setTotalPrice(total);
    };

    calculateTax(sub);
    setSubtotalPrice(sub);
  });

  return { subtotalPrice, totalPrice };
};

export default useCalculateTax;