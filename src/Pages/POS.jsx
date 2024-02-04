// React
import { useEffect, useState } from "react"

// Router
import { useLoaderData } from "react-router-dom"
import { useOutletContext } from "react-router-dom"

// Component
import Carousel from "../Components/Carousel"
import CartDrawer from "../Components/CartDrawer"

// Loader
// export const dataLoader = async () => {
//   const res = await fetch('https://good-dish-json-server.vercel.app/products')

//   return res.json()
// }

// export const dataLoader = async () => {
//   const res = await fetch('http://localhost:3000/products')

//   return res.json()
// }

function POS() {
  const [isLoading, setIsLoading] = useState(false)

  const [drawerIsOpen, setDrawerIsOpen, productOnCart, setProductOnCart, revenue, setRevenue] = useOutletContext()
  const [totalPrice, setTotalPrice] = useState()
  const [subtotalPrice, setSubtotalPrice] = useState()

  const [productData, setProductData] = useState()
  // const productData = useLoaderData()

  // Fetch Data
  useEffect(() => { 
    const fetchData = async () => {
      const res = await fetch('http://localhost:3000/products')
      const dataFetched = await res.json()
      setProductData(dataFetched)
    }

    fetchData()
  },[])

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

  return (
    <div className="space-y-[20px]">
      <div>
        <h1 className="font-gilroyBold text-[18px] pl-[30px] mb-3">Soups</h1>
        {productData && <Carousel handleAddToCart={handleAddToCart} productData={productData.soups} /> }
      </div>
      <div>
        <h1 className="font-gilroyBold text-[18px] pl-[30px] mb-3">Salads</h1>
        {productData && <Carousel handleAddToCart={handleAddToCart} productData={productData.salads} /> }
      </div>
      <CartDrawer 
        subtotalPrice={subtotalPrice} 
        totalPrice={totalPrice} 
        onClose={onClose} 
        drawerIsOpen={drawerIsOpen} 
        productOnCart={productOnCart} 
        onAddAmount={handleAddAmount} 
        // onAmountChange={handleAmountChange}
        onRemoveAmount={handleRemoveAmount} 
        onRemoveProduct={handleRemoveProduct} 
        // amount={amount}
        // setAmount={setAmount}
        revenue={revenue}
        setRevenue={setRevenue}
      />
    </div>
  )
}

export default POS

