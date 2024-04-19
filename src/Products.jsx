import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./ComponentCss/Products.css"

import App from './components/Loader.jsx'
import { CustomProvider } from 'rsuite';
function Products() {
  const [products, setproducts] = useState([])
  const[productImage,setproductImage] = useState([])
  const[productPrice,setproductPrice] = useState([])
  const[productName,setproductName  ] = useState([])
  const[prt,setprt] = useState(false)
  useEffect(() => {
    axios.get('https://dummyjson.com/products/')
      .then((res) => {
        console.log(res.data.products)
        setproducts(res.data.products)
        setprt(true)
        // setproductImage(res.data.products.thumbnail)
        // setproductName(res.data.products.title)
        // setproductPrice(res.data.products.price)

      })
  }, [])
  // console.log(products)
  return (
    <>
      {/* hello */}

        {
          (prt)?
      <div id="products-wrapper">
        
        {
          products.map((product, index) => {
            return (
              <div className="product">
                <img src={product.thumbnail} alt="" />
                <div className="detail">
                  <div className="price-title">
                <p className='product-name'>{product.title}</p>
                <p className='product-price'>{"$"+product.price}</p>
                </div>
                <div className="cart-buy">
                <button className='cart'>Add to cart</button></div>
                </div>
              </div>

            )
          })

        }
      </div>:<>
      <CustomProvider theme="dark">
      <App />
    </CustomProvider>
     </>
    
      }
    </>
  )
}

export default Products
