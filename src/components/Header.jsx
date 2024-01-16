import  { useState } from 'react';
import { Link } from 'react-router-dom';
import CartModal from './CartModal';
import { FaShoppingBag } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/logo.jpeg';

export const Header = ({ allProducts, setAllProducts, total, countProducts, setCountProducts, setTotal }) => {
	
	const [isCartModalOpen, setIsCartModalOpen] = useState(false);

	const openCartModal = () => {
  setIsCartModalOpen(!isCartModalOpen);
};
	
const closeCartModal = () => {
		setIsCartModalOpen(false);
};



	return (
		<header id='header' className='header'>
      <img className='logo' src={logo} ></img>
			<h1 className='tittle'>PAULINA</h1>
			<nav id='navbar' className="navbar">
      <Link to="/" >Home</Link>
        <Link to="/alta">Alta</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/nosotros">Nosotros</Link>
    </nav>


			<div id='container-icon' className="container-icon">
        <div className="container-cart-icon" onClick={openCartModal}>
          <span className='name-cart' onClick={openCartModal}>CARRITO DE COMPRAS</span>
		<FaShoppingBag  size={24}/>

          <div className="count-products">
            <span id="contador-productos">{countProducts}</span>
          </div>
        </div>
      </div>

      <CartModal
        isOpen={isCartModalOpen}
        onClose={closeCartModal}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
    </header>
  );
};

export default Header;