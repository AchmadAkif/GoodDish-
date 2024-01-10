import { useState } from "react"
// Router
import { useLoaderData } from "react-router-dom"
import { useOutletContext } from "react-router-dom"

// Antd
// import { Drawer } from "antd"

// Component
import Carousel from "../Components/Carousel"
import CartDrawer from "../Components/CartDrawer"

import { v4 as uuidv4 } from 'uuid';

function POS() {
  const [drawerIsOpen, setDrawerIsOpen] = useOutletContext()
  const [productOnCart, setProductOnCart] = useState([])
  
  const productData = useLoaderData()
  const onClose = () => {
    setDrawerIsOpen(false)
  }


  const handleAddToCart = (product) => {
    const productCopy = {
      id: uuidv4(),
      name: product.name,
      price: product.price
    }

    setProductOnCart([...productOnCart, productCopy])
    console.log(productOnCart)
  }

  const handleRemoveProduct = (id) => {
    setProductOnCart(productOnCart.filter( product => product.id !== id))
  }

  return (
    <div className="space-y-[20px]">
      <div>
        <h1 className="font-gilroyBold text-[18px] pl-[30px] mb-3">Soups</h1>
        <Carousel handleAddToCart={handleAddToCart} productData={productData.soups} />
      </div>
      <div>
        <h1 className="font-gilroyBold text-[18px] pl-[30px] mb-3">Salads</h1>
        <Carousel handleAddToCart={handleAddToCart} productData={productData.salads} />
      </div>
      <CartDrawer onClose={onClose} drawerIsOpen={drawerIsOpen} productOnCart={productOnCart} handleRemoveProduct={handleRemoveProduct} />
    </div>
  )
}

export default POS

// Loader
export const dataLoader = async () => {
  const res = await fetch('http://localhost:3000/products')

  return res.json()
}