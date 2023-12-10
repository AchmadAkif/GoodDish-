// Router
import { useLoaderData } from "react-router-dom"

// Component
import Carousel from "../Components/Carousel"


function POS() {
  const productData = useLoaderData()

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
    </div>
  )
}

export default POS

// Loader
export const dataLoader = async () => {
  const res = await fetch('http://localhost:3000/products')

  return res.json()
}