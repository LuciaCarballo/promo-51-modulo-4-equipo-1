import { Link } from 'react-router-dom';

function ButtonCard() {
  return (
    <div className="sectionButton">
      <p className="sectionButton__text">
        ¿Lo has revisado bien? Entonces, ¡vamos a dar el siguiente paso!
      </p>
      <div>
        <Link to="/cardPreviewSite" className="button--preview">¡Hecho!</Link>
      </div>
    </div>
  );
}

export default ButtonCard;
