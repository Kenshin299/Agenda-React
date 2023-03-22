import {useEffect, useState} from 'react';

function App() {
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
    <div className="container-contact">
      {data.map(item => (
        <p key={item.id}>
          {item.nombre} 
          {item.apellido} 
          {item.telefono}
        </p>
      ))}
    </div>
  );
}

export default App;