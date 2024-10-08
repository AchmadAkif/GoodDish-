// import { useState } from 'react'

// Router
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

// Pages
import RootLayout from './Layouts/RootLayout';
import Home from './Containers/Home';
import POS from './Containers/POS';
import About from './Containers/About';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="POS" element={<POS />}></Route>
        <Route path="about" element={<About />}></Route>
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
