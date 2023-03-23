function Form(props) {
    return(
        <div className='form-container'>
            <h1>
                Nuevo Contacto
            </h1>
            <form id="form" action="">
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" placeholder="Nombre ✏️" />
                <label for="apellido">Apellido</label>
                <input type="text" name="apellido" id="apellido" placeholder="Apellidos ✏️" />
                <label for="telefono">Número de Teléfono</label>
                <input type="tel" name="telefono" id="telefono" placeholder="Número de Teléfono ✏️" />
                
                <div>
                    <input type="button" name="btn-agregar" value="Agregar" onclick="enviarJSON(this.form)" />
                </div>
            </form>
         </div> 
    );
}

export default Form;