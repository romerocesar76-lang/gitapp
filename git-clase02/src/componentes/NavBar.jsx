const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px', color: 'white' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around', margin: 0, padding: 0 }}>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Inicio</a></li>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Acerca de</a></li>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

// importamos el componete Navbar que creamos en el ejercicio anterior
import Navbar from './componentes/Navbar'

 {/* renderizamos el componente Navbar */}
      <Navbar />

      