import { useState } from "react";

function Form() {
    // const [form, setForm] = useState("");

    // const handleForm = () => {
    //     setForm = this.form;
    // }    
    // const submitForm = () => {
    //     console.log(JSON.stringify(form));
    // }
    return(
        <div className='form-container'>
            <h1>
                Nuevo Contacto
            </h1>
            <form id="form">
                <label htmlFor="nombre">Nombre ✏️</label>
                <input type="text" name="nombre" id="nombre" placeholder="John" />
                <label htmlFor="apellido">Apellido ✏️</label>
                <input type="text" name="apellido" id="apellido" placeholder="Smith" />
                <label htmlFor="telefono">Número de Teléfono 📱</label>
                <input type="tel" name="telefono" id="telefono" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required placeholder="800-999-9999" />
                
                <div className="button">
                    <input type="button" name="btn-agregar" value="Agregar"/>
                </div>
            </form>
         </div> 
    );
}

export default Form;