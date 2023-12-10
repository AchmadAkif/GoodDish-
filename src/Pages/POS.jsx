// Router
import { useLoaderData } from "react-router-dom"

// Component
import Carousel from "../Components/Carousel"


function POS() {
  const productData = useLoaderData()

  return (
    <>
      <h1 className="font-gilroyBold text-[17px] pl-[30px] mb-3">Soups</h1>
      <Carousel productData={productData} />
    </>
  )
}

export default POS

// Loader
export const dataLoader = async () => {
  const res = await fetch('http://localhost:3000/soups')

  return res.json()
}