import logoAdalab from '../../images/adalab.png';
import iconLaptop from '../../images/laptop-code-solid.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <a className="header__brand" href="https://sandra-gonzalez.github.io/promo-51-modulo-3-equipo-1">
          <img src={iconLaptop} alt="Icono Laptop" className="header__icon" />
          <p className="header__text">TalentLAB</p>
        </a>
        <img src={logoAdalab} alt="Logo Adalab" className="header__adalab" />
      </div>
    </header>
  );
}

export default Header;