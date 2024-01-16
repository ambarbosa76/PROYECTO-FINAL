
import { useState } from "react";
import { productFormDictionary } from "../utils/productFormDictionary";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Alta = ({fetchData}) => {
  const [productFormValues, setProductFormValues] = useState({
    name: "",
    description: "",
    price: 0,
    image:"",
    stock:0,
    brand:"",
    category:"",
    detail:"",
    send:0,
    units:0
  });
  const handleUpdateProductFormValues = (value, inputReference) => {
    if (inputReference === productFormDictionary.NAME) {
      setProductFormValues((prevState) => ({ ...prevState, name: value }));
    }
    if (inputReference === productFormDictionary.DESCRIPTION) {
      setProductFormValues((prevState) => ({...prevState,description: value,
      }));
    }
    if (inputReference === productFormDictionary.PRICE) {
      setProductFormValues((prevState) => ({ ...prevState, price: value }));
    }
    if (inputReference === productFormDictionary.IMAGE) {
      setProductFormValues((prevState) => ({ ...prevState, image: value }));
    }
    if (inputReference === productFormDictionary.STOCK) {
      setProductFormValues((prevState) => ({ ...prevState, stock: value }));
    }
    if (inputReference === productFormDictionary.BRAND) {
      setProductFormValues((prevState) => ({ ...prevState, brand: value }));
    }
    if (inputReference === productFormDictionary.CATEGORY) {
      setProductFormValues((prevState) => ({ ...prevState, category: value }));
    }
    if (inputReference === productFormDictionary.DETAIL) {
      setProductFormValues((prevState) => ({ ...prevState, detail: value }));
    }
    if (inputReference === productFormDictionary.SEND) {
      setProductFormValues((prevState) => ({ ...prevState, send: value }));
    }
    if (inputReference === productFormDictionary.UNITS) {
      setProductFormValues((prevState) => ({ ...prevState, units: value }));
    }
  };

  const handleSubmitForm = async () => {
    try {
      const response = await fetch(
        "https://655dfd4d9f1e1093c59a4c8e.mockapi.io/Clothes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productFormValues),
        }
      );

      if (!response.ok) {
        throw new Error('Error al agregar un producto.')
      }
      try {
        await fetchData()
      } catch (error) {
        toast.error('Error al actualizar los datos.')
      }
      toast.success('Producto Agregado con éxito.')
    } catch (error) {
        toast.error('Error al agregar un producto.')
      
    }
  };

  return (
    <div className="form-Alta">
      <h2>FORMULARIO</h2>
      <label>Nombre Producto</label>
      <input
        type="text" required pattern="[A-Za-z0-9]+"
        placeholder={"Nombre del Producto"}
        onChange={(e) =>
          handleUpdateProductFormValues(
            e.target.value,
            productFormDictionary.NAME
          )
        }
      />
      <label>Descripción</label>
      <input
        type="text" required pattern="[A-Za-z0-9]+"
        placeholder={"Descripcion del producto"}
        onChange={(e) =>
          handleUpdateProductFormValues(
            e.target.value,
            productFormDictionary.DESCRIPTION
          )
        }
      />
      <label>Precio</label>
      <input
        type="number" required pattern = "[0-9]"
        placeholder={"Precio"}
        onChange={(e) =>
          handleUpdateProductFormValues(
            e.target.value,
            productFormDictionary.PRICE
          )
        }
      />
      <label>Imagen</label>
      <input
        type="file" 
        placeholder={"Insertar archivo"}
        onChange={(e) =>
          handleUpdateProductFormValues(
            e.target.value,
            productFormDictionary.IMAGE
          )
        }
      />
      <label>Inventario</label>
       <input
        type="number" required pattern = "[0-9]"
        placeholder={"Inventario"}
         onChange={(e) =>
          handleUpdateProductFormValues(
            e.target.value,
            productFormDictionary.STOCK
          )
        }
      />
       <label>Marca</label>
       <input
        type="text" required pattern="[A-Za-z0-9]+"
        placeholder={"Marca del producto"}
        onChange={(e) =>
          handleUpdateProductFormValues(
            e.target.value,
            productFormDictionary.BRAND
          )
        }
      />
       <label>Categoría</label>
       <input
        type="text" required pattern="[A-Za-z0-9]+"
        placeholder={"Categoría del producto"}
        onChange={(e) =>
          handleUpdateProductFormValues(
            e.target.value,
            productFormDictionary.CATEGORY
          )
        }
      />
       <label>Detalle</label>
       <input
        type="text" required pattern="[A-Za-z0-9]+"
        placeholder={"Detalle del producto"}
        onChange={(e) =>
          handleUpdateProductFormValues(
            e.target.value,
            productFormDictionary.DETAIL
          )
        }
      />
      <label>Valor envío</label>
      <input
        type="number" required pattern = "[0-9]"
        placeholder={"Precio de envio"}
        onChange={(e) =>
          handleUpdateProductFormValues(
            e.target.value,
            productFormDictionary.SEND
          )
        }
      />
      <label>Unidades vendidas</label>
      <input
        type="number" required pattern = "[0-9]"
        placeholder={"Unidades vendidas iniciales"}
        value="0"
        disabled="false"
        onChange={(e) =>
          handleUpdateProductFormValues(
            e.target.value,
            productFormDictionary.UNITS
          )
        }
      />
      <button className="btn-agregar" onClick={handleSubmitForm}>Agregar Producto</button>
      <ToastContainer />
    </div>
  );
};

