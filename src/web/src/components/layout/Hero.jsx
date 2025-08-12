 import { Link } from 'react-router';


 function Hero () {
    return (
        <>
        <section className="hero">
            <h1 className="hero__title">TalentLAB</h1>
            <p className="hero__subtitle">
            Escaparate en línea para recoger ideas a través de la tecnología.
            </p>
            <Link to="/display" className="hero__button">
                ver los proyectos
            </Link>

      </section>
        </>
    )

 }
 
 export default Hero
 
 