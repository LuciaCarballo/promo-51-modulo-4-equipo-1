import { Link } from 'react-router';
import '../styles/Home.scss';

function Home() {
  return (
    <div className="home">
      <div className="home__card">
        <h1>¡Hola!</h1>
        <p>¿Quieres sumar tu proyecto al escaparate de TalentLAB?</p>
        <p>¡Comparte tu proyecto!</p>

        <div className="home__links">
          <Link to="/app">
            <button className="home__button">Subir proyecto</button>
          </Link>

          <Link to="/display">
            <button className="home__button">Galería de proyectos</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;