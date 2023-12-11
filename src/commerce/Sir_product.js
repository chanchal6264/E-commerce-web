import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";


const Sir_product = () => {
  const [products, setProducts] = useState();
  const [category, setCategory] = useState();
  const nevigate = useNavigate("");
  const { id } = useParams();
  console.log(id);

  console.log(products);

  const newarr = [];

  useEffect(() => {
    if (products) {
      products.map((obj) => {
        if (!newarr.find((e) => e.category === obj.category)) {
          newarr.push(obj);
        }
      });
      setCategory(newarr, "ddfd");
    }
  }, [products]);

  const matching = [];

  useEffect(()=>{
    if(products){
     const filterproducts = products.filter(products=>products.category=== matching)
    }
  })

  const categroyData = [];

 /* useEffect(()=>{
    if(category){
      const filterproducts = products.filter(products=>products.category===categroyData)
    }

  })*/

  /*useEffect(()=>{
    if(category){
      const filtercategory = filterproducts.filter((categroyData)=>{
        return categroyData.category ===category;
        console.log(categroyData,"chanchaldata")
      });
    }
  })*/

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        //dispatch(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="">
      <div className="flex items-center p-4 justify-between">
        <select>
          <option>All product</option>
          {category
            ? category.map((e, i) => {
                return <option key={i}>{e.category}</option>;
              })
            : null}
        </select>
        <input
          className="p-2  border-2 m-2"
          type="text"
          placeholder="search..."
        />
      </div>
      <div>
        <ul className="flex flex-wrap justify-center">
          {products
            ? products.map((product) => (
                <li
                  className="space-y-2 border-2 m-2 p-4 justify-center grid max-w-xs"
                  key={product.id}
                >
                  <div className=" grid place-items-center">
                    <img className="w-40 h-40" src={product.image} />
                  </div>
                  <div>
                    {/*<p className="font-bold">{product.category}</p>*/}
                  </div>
                  <div className="space-y-2">
                    <p className="w-64 font-bold  text-xl text-slate-600">
                      {product.title}
                    </p>
                    <p className="font-bold ">Price: {product.price}</p>
                    {/*<p>Description: {product.description}</p>*/}
                    {/*<p className="font-bold">Rating:{product.rating.rate}</p>*/}
                    <button
                      onClick={() => nevigate(`/details/${product.id}`)}
                      className="bg-slate-500 p-1 rounded-md text-white font-semibold"
                    >
                      Oder Now
                    </button> 
                  </div>
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
};

export default Sir_product;
