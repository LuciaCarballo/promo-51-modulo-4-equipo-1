import { Link } from 'react-router';
import '../styles/Home.scss';

function Home() {
  return (
    <div className="home">
      <div className="home__card">
        <h1>¡Hola!</h1>
        <p>¿Quieres sumar tu proyecto al escaparate de TalentLAB?</p>
        <p>¡Comparte tu proyecto!</p>

        <Link to="/app">
          <button className="home__button">Entrar</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;