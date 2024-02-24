import { useEffect, useState } from "react"
import { notifyError } from "../utils/toastify"

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(url)
    // fetch('http://localhost:3000/products')
    .then(res => {
      if(!res.ok) {
        if(res.status === 404) {
          throw Error('URL doesnt exist')
        } 
      }
      console.log(res)
      return res.json()
    })
    .then(data => {
      setData(data)
      setIsLoading(false)
    })
    .catch(err => {
      notifyError("Failed to fetch")
      console.log(err.message)
    })
  },[url])

  return { data, isLoading }
}

export default useFetch