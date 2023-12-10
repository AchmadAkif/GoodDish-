// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


// Router
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

// Pages
import RootLayout from "./Layouts/RootLayout"
import Home from "./Pages/Home"
import POS, { dataLoader } from "./Pages/POS"
import About from "./Pages/About"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route 
          path="POS" 
          element={<POS />}
          loader={dataLoader}
          ></Route>
        <Route path="about" element={<About />}></Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
