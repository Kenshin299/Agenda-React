import react from '../img/react.png';

function Header() {
    return (
    <header className="header">
      <h1>
        Agenda Personal con 
        <img className='logo' src={react} alt="React" width="12%"/>
      </h1> 
    </header>
    )
}

export default Header;