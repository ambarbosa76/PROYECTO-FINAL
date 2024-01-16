
import { useState } from "react";
import { contactFormDictionary } from "../utils/contactFormDictionary";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Contacto = ({fetchData}) => {
  const [contactFormValues, setContactFormValues] = useState({
    name: "",
    lastname: "",
    phone: 0,
    email:"",
    comment:"",
  });
  const handleUpdateContactFormValues = (value, inputReference) => {
    if (inputReference === contactFormDictionary.NAME) {
      setContactFormValues((prevState) => ({ ...prevState, name: value }));
    }
    if (inputReference === contactFormDictionary.LASTNAME) {
      setContactFormValues((prevState) => ({...prevState,lastname: value,
      }));
    }
    if (inputReference === contactFormDictionary.PHONE) {
      setContactFormValues((prevState) => ({ ...prevState, phone: value }));
    }
    if (inputReference === contactFormDictionary.EMAIL) {
      setContactFormValues((prevState) => ({ ...prevState, email: value }));
    }
    if (inputReference === contactFormDictionary.COMMENT) {
      setContactFormValues((prevState) => ({ ...prevState, comment: value }));
    }
  };

  const handleSubmitForm = async () => {
    try {
      const response = await fetch(
        "https://655dfd4d9f1e1093c59a4c8e.mockapi.io/Contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactFormValues),
        }
      );

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje.')
      }
      try {
        await fetchData()
      } catch (error) {
        toast.error('Error al actualizar los datos.')
      }
      toast.success('Su solicitud se ha agregado con éxito.')
    } catch (error) {
        toast.error('Error al enviar el mensaje.')
      
    }
  };


  return (
    <div className="form">
      <h2>FORMULARIO DE CONTACTO</h2>
      <label>Nombre</label>
      <input
        type="text" required pattern="[A-Za-z0-9]+"
        placeholder={"Nombre"}
        onChange={(e) =>
          handleUpdateContactFormValues(
            e.target.value,
            contactFormDictionary.NAME
          )
        }
      />
      <label>Apellido</label>
      <input
        type="text" required pattern="[A-Za-z0-9]+"
        placeholder={"Apellido"}
        onChange={(e) =>
          handleUpdateContactFormValues(
            e.target.value,
            contactFormDictionary.LASTNAME
          )
        }
      />
      <label>Celular</label>
      <input
        type="number" required pattern = "[0-9]"
        placeholder={"Celular"}
        onChange={(e) =>
          handleUpdateContactFormValues(
            e.target.value,
            contactFormDictionary.PHONE
          )
        }
      />
      <label>Email</label>
      <input
        type="text" requiered pattern = "[A-Za-z\s!@#$%^&*(),.?]"
        placeholder={"Correo electrónico"}
        onChange={(e) =>
          handleUpdateContactFormValues(
            e.target.value,
            contactFormDictionary.EMAIL
          )
        }
      />
      <label>Mensaje</label>
       <input
        type="text" required pattern="[A-Za-z0-9]+"
        placeholder={"Mensaje"}
         onChange={(e) =>
          handleUpdateContactFormValues(
            e.target.value,
            contactFormDictionary.COMMENT
          )
        }
      />
             <button className="btn-enviar" onClick={handleSubmitForm}>Enviar mensaje</button>
      <ToastContainer />
    </div>
  );
};

