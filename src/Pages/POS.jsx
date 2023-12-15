import { useState } from "react"
// Router
import { useLoaderData } from "react-router-dom"
import { useOutletContext } from "react-router-dom"
// Antd
import { Drawer, Button } from "antd"
// Component
import Carousel from "../Components/Carousel"

function POS() {
  // Loader
  const productData = useLoaderData()

  // For controlling Drawer
  const [drawerIsOpen, setDrawerIsOpen] = useOutletContext()
  const onClose = () => {
    setDrawerIsOpen(false)
  }

  return (
    <div className="space-y-[20px]">
      <div>
        <h1 className="font-gilroyBold text-[18px] pl-[30px] mb-3">Soups</h1>
        <Carousel productData={productData.soups} />
      </div>
      <div>
        <h1 className="font-gilroyBold text-[18px] pl-[30px] mb-3">Salads</h1>
        <Carousel productData={productData.salads} />
      </div>
      <Drawer 
      style={{
        backgroundColor: "#000",
        color: "#fff"
      }}
      title="Current Order" 
      placement="right" 
      closeIcon={false}
      onClose={onClose} 
      open={drawerIsOpen}
      className="font-gilroyMed"
      >
        <p>Tes</p>
      </Drawer>
    </div>
  )
}

export default POS

// Loader
export const dataLoader = async () => {
  const res = await fetch('http://localhost:3000/products')

  return res.json()
}