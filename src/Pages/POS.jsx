import { useEffect, useState } from "react"
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
  const [totalPrice, setTotalPrice] = useState()
  const [subtotalPrice, setSubtotalPrice] = useState()

  const productData = useLoaderData()
  const onClose = () => {
    setDrawerIsOpen(false)
  }

  useEffect(() => {
    let total = 0
    let sub = 0

    const calculateTax = (totalAmount) => {
      total += sub + (totalAmount * (5 / 100))
      setTotalPrice(total)
    }

    productOnCart.forEach(product => {
      sub += product.price
    })
    setSubtotalPrice(sub)
    calculateTax(sub)

  },[productOnCart])

  const handleAddToCart = (product) => {
    // const productExist = productOnCart.find(data => data.name === product.name)

    // if(productExist) {
    //   return
    // }
     
    const productCopy = {
      id: uuidv4(),
      name: product.name,
      price: product.price,
      amount: 1
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
      <CartDrawer subtotalPrice={subtotalPrice} totalPrice={totalPrice} onClose={onClose} drawerIsOpen={drawerIsOpen} productOnCart={productOnCart} handleRemoveProduct={handleRemoveProduct} />
    </div>
  )
}

export default POS

// Loader
export const dataLoader = async () => {
  const res = await fetch('http://localhost:3000/products')

  return res.json()
}