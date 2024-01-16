import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home'
import { Alta } from './pages/Alta';
import { Contacto } from './pages/Contacto'
import { Nosotros } from './pages/Nosotros'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const apiUrl = 'https://6553ad3a5449cfda0f2f095d.mockapi.io/api/products'; 
 


  return (
    <>
      <ToastContainer />
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />

      <Routes>
        <Route
          exact
          path="/"
          element={<Home
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts} />}
        />

        <Route
          path="/alta"
          element={<Alta
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
            apiUrl={apiUrl}
          />}
        />

<Route
          path="/contacto"
          element={<Contacto

          />}
        />

<Route
          path="/nosotros"
          element={<Nosotros

          />}
        />


        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/alta" element={<Alta />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App