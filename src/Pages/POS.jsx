// React
import { useEffect, useState } from "react"

// Component
import Carousel from "../Components/Carousel"
import CartDrawer from "../Components/CartDrawer"
import { Skeleton } from "antd"

// Hooks
import { useOutletContext } from "react-router-dom"
import useFetch from "../Hooks/useFetch"


function POS() {
  
  useEffect(() => {
    let total = 0
    let sub = 0

    const calculateTax = (totalAmount) => {
      total += sub + (totalAmount * (2 / 100))
      setTotalPrice(total)
    }

    productOnCart.forEach(product => {
      sub += (product.price * product.amount)
    })

    setSubtotalPrice(sub)
    calculateTax(sub)

  })

  const [
    searchKeyword, 
    drawerIsOpen, 
    setDrawerIsOpen, 
    productOnCart, 
    setProductOnCart, 
    revenue, 
    setRevenue,
    itemSold,
    setItemSold,
    notify
  ] = useOutletContext()
  const [totalPrice, setTotalPrice] = useState()
  const [subtotalPrice, setSubtotalPrice] = useState()

  // Fetch 
  const { data: productData, isLoading } = useFetch('https://good-dish-json-server.vercel.app/products')
  
  const onClose = () => {
    setDrawerIsOpen(false)
  }

  const handleAddToCart = (product) => {
    let checkProductIsExist = productOnCart.find(data => data.id === product.id)

    if(checkProductIsExist) {
      let newCart = []
      let newItem

      productOnCart.forEach(dataProduct => {
        if(dataProduct.id == product.id) {
          newItem = {
            ...dataProduct,
            amount: dataProduct.amount + 1,
          }

          newCart.push(newItem)
        } 
        else {
          newCart.push(dataProduct)
        }
      })

      setProductOnCart(newCart)
      // console.log(productOnCart)
      // console.log(newCart)
    } 
      else {
      const productCopy = {
        ...product,
        amount: 1,
      }
  
      setProductOnCart([...productOnCart, productCopy])
    }
  }

  const handleRemoveProduct = (id) => {
    setProductOnCart(productOnCart.filter( product => product.id !== id))
  }

  const handleAddAmount = (dataID) => {
    let checkProductIsExist = productOnCart.find(data => dataID === data.id)

    if(checkProductIsExist) {
      let newCart = []
      let newItem

      productOnCart.forEach(dataProduct => {
        if(dataProduct.id == dataID) {
          newItem = {
            ...dataProduct,
            amount: dataProduct.amount + 1,
          }

          newCart.push(newItem)
        } 
        else {
          newCart.push(dataProduct)
        }
      })

      setProductOnCart(newCart)
    }

    // console.log(productOnCart)
  }

  const handleRemoveAmount = (dataID) => {
    let checkProductIsExist = productOnCart.find(data => dataID === data.id)

    if(checkProductIsExist) {
      let newCart = []
      let newItem

      productOnCart.forEach(dataProduct => {
        if(dataProduct.id == dataID) {
          newItem = {
            ...dataProduct,
            amount: dataProduct.amount - 1,
          }

          newCart.push(newItem)
        } 
        else {
          newCart.push(dataProduct)
        }
      })

      setProductOnCart(newCart)
    }
  }
  
  const handlePlaceOrder = () => {
    
    let quantity = 0
    let currentRevenue = 

    productOnCart.forEach(product => {
      quantity += product.amount
    })
    
    notify("Order Success!")
    setItemSold(itemSold + quantity)
    setRevenue(revenue + subtotalPrice)
    setProductOnCart([])
  }


  return (
    <div className="space-y-[20px]">
      <div>
        <h1 className="font-gilroyBold text-[18px] pl-[30px] mb-3">Soups</h1>
        {isLoading && <Skeleton active />}
        {productData && <Carousel searchKeyword={searchKeyword} handleAddToCart={handleAddToCart} productData={productData.soups} />}
      </div>
      <div>
        <h1 className="font-gilroyBold text-[18px] pl-[30px] mb-3">Salads</h1>
        {isLoading && <Skeleton active />}
        {productData && <Carousel searchKeyword={searchKeyword} handleAddToCart={handleAddToCart} productData={productData.salads} />}
      </div>
      <CartDrawer 
        subtotalPrice={subtotalPrice} 
        totalPrice={totalPrice} 
        onClose={onClose} 
        drawerIsOpen={drawerIsOpen} 
        productOnCart={productOnCart} 
        onAddAmount={handleAddAmount} 
        onRemoveAmount={handleRemoveAmount} 
        onRemoveProduct={handleRemoveProduct} 
        onPlaceOrder={handlePlaceOrder}
        // onAmountChange={handleAmountChange}
        // amount={amount}
        // setAmount={setAmount}
        // revenue={revenue}
        // setRevenue={setRevenue}
      />
    </div>
  )
}

export default POS

