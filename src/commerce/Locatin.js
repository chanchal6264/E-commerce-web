import React from 'react'
import axios from "axios"
import { useEffect } from 'react'

function Locatin() {
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
    })
  return (
    <>
      
    </>
  )
}

export default Locatin
