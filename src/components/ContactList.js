import {useEffect, useState} from 'react';
import ContactCard from "./ContactCard";

function ContactList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
        const data = await fetch("http://www.raydelto.org/agenda.php").then(function (result) {
            return result.json();
        });
        setData(data);
        };
        fetchContacts(); 
    }, []);

    return (
    <div className='flex-container'>
        <h1>
            Lista de Contactos
        </h1>
        <ContactCard data={data}/>
    </div>
    ) 
}

export default ContactList;