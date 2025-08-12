import { Link } from 'react-router';

function ButtonCard() {
  return (
    <div className="sectionButton">
      <p className="sectionButton__text">
        ¿Lo has revisado bien? Entonces, ¡vamos a dar el siguiente paso!
      </p>
      <div>
        <Link to="/cardPreview" className="button--preview">¡Hecho!</Link>
      </div>
    </div>
  );
}

export default ButtonCard;
