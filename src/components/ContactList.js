import {useEffect, useState} from 'react';
import ContactCard from "./ContactCard";

function ContactList() {
    const [data, setData] = useState([]);
    // const url = "http://www.raydelto.org/agenda.php"
    const url = "http://localhost:8080/listaPropia"
    useEffect(() => {
        const fetchContacts = async () => {
            const data = await fetch(url).then(function (result) {
                return result.json();
            });
            setData(data);
        };
        fetchContacts(); 
    }, []);

    return (
    <div id='contact-list' className='flex-container'>
        <h1>
            Lista de Contactos
        </h1>
        <ContactCard data={data} />
    </div>
    ) 
}

export default ContactList;