function Form() { 

    function handleSubmit(event) {
        const form = document.getElementById('form');
        const formData = new FormData(event.target);
        const formJson = Object.fromEntries(formData.entries());
        // const url = "http://www.raydelto.org/agenda.php"
        const url = "http://localhost:8080/listaPropia" 

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(formJson),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
        form.reset();
    }

    return(
        <>
            <div className='form-container'>
                <h1>
                    Nuevo Contacto
                </h1>
                <form id="form" onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre ✏️</label>
                    <input type="text" name="nombre" id="nombre" placeholder="John" />
                    <label htmlFor="apellido">Apellido ✏️</label>
                    <input type="text" name="apellido" id="apellido" placeholder="Smith" />
                    <label htmlFor="telefono">Número de Teléfono 📱</label>
                    <input type="tel" name="telefono" id="telefono" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required placeholder="800-999-9999" />
                    
                    <div className="button">
                        <input type="submit" name="btn-agregar" value="Agregar"/>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Form;