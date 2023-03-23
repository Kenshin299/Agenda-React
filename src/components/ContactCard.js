function ContactCard(props) {
    return (
        <>
            {props.data.map(item => (
                <div>
                    <p key={item.id}>
                        {item.nombre + " "} 
                        {item.apellido} 
                        <br />
                        {item.telefono}
                    </p>
                </div>
            ))}
        </>
    )
}

export default ContactCard;