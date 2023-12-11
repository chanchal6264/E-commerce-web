import React from "react";
import { useNavigate } from "react-router-dom";
import Product from "./Product";
//import { AiOutlineShoppingCart } from "react-icons/ai";
import Footer from "./Footer";
import { selectCart } from "../slice/cartSlice";
import { useSelector } from "react-redux";

function Home() {
  const nevigate = useNavigate("");
  const cart = useSelector(selectCart);
  console.log(cart, "afsdf");
  return (
    <>
      <div>
        <Product />
        <Footer />
      </div>
    </>
  );
}

export default Home;
