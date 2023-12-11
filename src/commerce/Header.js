import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { selectCart } from "../slice/cartSlice";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const cart = useSelector(selectCart);
  console.log(cart);
  return (
    <div>
      <div className="flex  p-3 justify-between items-center  bg-black text-white">
        <div>
          <p
            onClick={() => navigate("/")}
            className="font-bold text-2xl hover:cursor-pointer"
          >
            E-Commerce
          </p>
        </div>
        <ul className="flex space-x-4 cursor-pointer">
          <li onClick={() => navigate("/login")}>Login</li>
          <li onClick={() => navigate("/signup")}>Sign Up</li>
          <li>
            <Link
              to={"/oder"}
              className="inline-flex items-center bg-white text-black border-0 py-1 px-2 focus:outline-none hover:font-bold  rounded text-base mt-4 md:mt-0"
            >
              ADD TO Cart
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
              <AiOutlineShoppingCart className="text-3xl" />
              <span className="text-2xl text-white-400">{cart.length} </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
