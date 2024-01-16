import  { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProductList = ({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal }) => {
  const api = 'https://655dfd4d9f1e1093c59a4c8e.mockapi.io/Clothes';
  const [apiData, setApiData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error('No es posible comunicarse con el servidor');
      }
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error('Error obteniendo los datos:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  const AddProduct = (product) => {
    if (allProducts.find(item => item.id === product.id)) {
      const products = allProducts.map(item =>
        item.id === product.id ? { ...item, units: item.units + 1 } : item
      );
      
      setCountProducts(countProducts+1);
      setTotal(total + product.price * countProducts);
      setAllProducts([...products]);
    } else {
      setCountProducts(countProducts+1);
      setTotal(total + product.price * 1);
      setAllProducts([...allProducts, product]);
    }
    toast.success(`${product.name} Añadido`, { position: toast.POSITION.TOP_RIGHT });
  };
  return (
    <div className="container-product">
      {apiData.map(product => (
        <div className="item" key={product.id}>
           <img src={product.image} alt={product.name} />
             <div className="inf-product">
            <h2>{product.name}</h2>
            <p className='description'>{product.description}</p>
            <p className="price">$ {product.price}</p>
            <button onClick={() => AddProduct(product)} className="btn-add-cart">
              AGREGAR AL CARRITO
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

