import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add_cart } from "../slice/cartSlice";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory === "All Products") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  const categoryOptions = [
    "All Products",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="">
      <div className="flex items-center p-4 justify-between">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categoryOptions.map((category, i) => (
            <option key={i} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          className="p-2 border-2 m-2"
          type="text"
          placeholder="Search..."
        />
      </div>

      <div>
        <ul className="flex flex-wrap justify-center">
          {filteredProducts.map((product) => (
            <li
              onClick={() =>
                navigate(`/details/${product.id}`, { state: { products } })
              }
              className="space-y-2 border-2 m-2 p-4 justify-center grid max-w-xs"
              key={product.id}  
            >
              <div className="grid place-items-center">
                <img
                  className="w-40 h-40"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="space-y-2">
                <p className="w-64 font-bold text-xl text-slate-600">
                  {product.title}
                </p>
                <p className="font-bold">Price: {product.price}</p>
                {/* <button onClick={() => navigate(`/details/${product.id}` ,{state:{products}} )} className="bg-slate-500 p-1 rounded-md text-white font-semibold">
                  Order Now
          </button>*/}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Product;