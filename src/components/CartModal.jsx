import  { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartModal = ({ isOpen, Close, allProducts, setAllProducts, total, countProducts, setCountProducts, setTotal }) => {
useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        Close();
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
    document.removeEventListener('keydown', handleKeyPress);
    };
  }, [Close]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('cart-modal-overlay')) {
      Close(); 
    }
  };

  const IncrementUnits = (product) => {
    const products = allProducts.map(item =>
      item.id === product.id ? { ...item, units: item.units + 1 } : item
    );

    setTotal(total + Number(product.price)  || 0);
    setCountProducts(countProducts + 1);
    setAllProducts(products);
  };

  const DecrementUnits = (product) => {
    if (product.units > 0) {
      const products = allProducts.map(item =>
        item.id === product.id ? { ...item, units: item.units-1} : item
      );

      setTotal(total - product.price || 0 );
      setCountProducts(countProducts - 1);
      setAllProducts(products);
    }
  };

  const DeleteProduct = (product) => {
    const results = allProducts.filter(item => item.id !== product.id);
 
    toast.error(`${product.name} fue eliminado con éxito`);

    setTotal(total - product.price * product.units || 0 );
    setCountProducts(countProducts - product.units);
    setAllProducts(results);
  };

  const CleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
    Close(); 
  };


  return (
    <>
      {isOpen && (
        <div className="cart-modal-overlay" onClick={handleOverlayClick}>
          <div className="cart-modal-content">
            <span className="close-button" onClick={Close}>&times;</span>
            <div className="product">
              {allProducts.map(product => (
                <div className='cart-product' key={product.id}>
                  <div className="inf-cart-product">
                    <span className="units-cart-product">{product.units+1}</span>
                    <p className="name-cart-product">{product.name}</p>
                    <img src={product.image} alt={product.image} />
                    <span className="price-cart-product">${product.price * (product.units+1)}</span>
                  </div>
                  <div className="units-buttons">
                    <button className="units-button" onClick={() => DecrementUnits(product)}>-</button>
                    <button className="units-button" onClick={() => IncrementUnits(product)}>+</button>
                  </div>
                  <button className="delete-button" onClick={() => DeleteProduct(product)}>
                    ELIMINAR PRODUCTO DEL CARRITO
                  </button>
                </div>
              ))}
            </div>
            <div className='total-cart'>
              <h3>Total:</h3>
              <span className="btn-clear-all">${total }</span>
            </div>
            <button className="btn-clear-all" onClick={CleanCart}>
              VACIAR CARRITO
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartModal;