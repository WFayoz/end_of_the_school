import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTotal } from "../../redux/basketSlice";

const Wishlist = () => {
  const cart = useSelector((state) => state.basket.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal());
  }, [cart, dispatch]);
  return <div></div>;
};

export default Wishlist;
