import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { add_cart } from "../slice/cartSlice";
import Home from "./Home";

const Details = () => {
  const [newproduct, setNewproduct] = useState();
  const [products, setProducts] = useState();
  const nevigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  console.log(id);
  const location = useLocation("");
  console.log(location, "location...");

  useEffect(() => {
    (async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          setProducts(response.data);
          //dispatch(response.data)
        })
        .catch((error) => {
          console.error(error);
        });
    })();
  }, []);

  console.log(products);

  useEffect(() => {
    if (products) {
      setNewproduct(products.filter((e) => e.id == id));
    }
  }, [products]);

  console.log(newproduct);

  const move_cart = () => {
    console.log(products);

    alert("Oder is Done");
    nevigate("/oder");
  };

  return (
    <>
      {newproduct && (
        <div className="flex  items-center w-[100%] my-28 place-content-center">
          <div className=" p-4 ">
            <p className=" ">
              <img className="w-[40%]  mx-auto" src={newproduct[0].image} />
            </p>
          </div>
          <div className="p-4 justify-center  m-4">
            <p className="text-2xl"> {newproduct[0].title}</p>

            <p className="">
              <span className=" text-lg text-sky-700 p-3">
                {newproduct[0].rating.rate}{" "}
              </span>
              <span className="text-lg text-sky-700 p-3">
                {" "}
                {newproduct[0].rating.count} rating
              </span>
            </p>
            <p className="text-red-500">
              <span className=" text-2xl">Price: </span>${newproduct[0].price}
            </p>
            <p className=" text-slate-600 font-semibold">
              <span className="py-2 text-lg text-black">Description: </span>
              {newproduct[0].description}
            </p>
            <p className="text-blue-500 text-lg">
              <span className="font-bold text-lg text-green-700"> </span>
              {newproduct[0].category}
            </p>
            <div className="">
              <button
                onClick={() => dispatch(add_cart(newproduct))}
                className="bg-red-500 m-4 p-2 text-white rounded-md"
              >
                Add to Cart
              </button>
              <button
                onClick={() => move_cart(products, true)}
                className="bg-green-500 m-4 p-2 text-white rounded-md"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Details;
