import React, { useEffect, useState,useContext } from 'react'
import axios from 'axios'
import "./ComponentCss/Products.css"
import { Mycontext } from './RoutungPage'
import App from './components/Loader.jsx'
import { CustomProvider } from 'rsuite';


function Products() {
  const{searchitems,setsearchitems,setsearchtriger,searchcat,setsearchcat} = useContext(Mycontext)
  const [products, setproducts] = useState([])
  const[prt,setprt] = useState(false)
  useEffect(() => {
    
    axios.get(`https://dummyjson.com/products/${''}`)
      .then((res) => {
        // console.log(res.data.products)
        setproducts(res.data.products)
        setprt(true)

      })
  }, [])
    useEffect(()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=>{
      console.log(res.data)
      setsearchitems(res.data)
      setsearchtriger(true)

    })
  },[])

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
