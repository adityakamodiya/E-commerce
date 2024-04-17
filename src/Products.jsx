import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Products() {
    const[products,setproducts] = useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/products/')
        .then((res)=>{console.log(res.data.products)
        setproducts(res.data.products)
        })
    },[])
    console.log(products)
  return (
    <>
    hello
    {
        products.map((key,index)=>{
            // return(
            // <div style={{border:'1px solid black',height:'100px',width:'100px'}}></div>
        // )
        })
    }
    </>
  )
}

export default Products
