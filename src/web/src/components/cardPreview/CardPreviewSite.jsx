import CardImage from './CardImage.jsx';
import CardAuthor from './CardAuthor.jsx';
import CardProject from './CardProject.jsx';
import { Link } from 'react-router';



function CardPreviewSite({ data,saveProject, response }) {
  const handleSaveProject = () => {
    console.log("Proyecto guardado:", data);
    saveProject(data);
  };

  return (
  <>
    <h2 className="project__title">Aquí tienes tu proyecto:</h2>
      <span  className="bt-back">◀  <Link to="/app" className="bt-back__text"> Volver atrás</Link></span>
      <section className="project">
      <div className="project__image">
        <CardImage data={data} />
      </div>

      <article className="project__article">
        <h2 className="article__projectTitle">Personal Project Card</h2>

        <div className="project__author">
          <CardAuthor data={data} />
        </div>


          <p className="project__subtitle">About your project:</p>
          <CardProject data={data} />
          <a
              className="project__link"
              href={data.demo || '#'}
              target="_blank"
              rel="noreferrer"
              title="Haz click para ver el proyecto online"
            >
              {data.demo ? "Web" : ""}</a><span> {data.demo ? " | " : ""} </span>
            <a
              className="project__link"
              href={data.repo || '#'}
              target="_blank"
              rel="noreferrer"
              title="Haz click para ver el código del proyecto"
            >
             {data.repo ? "Repositorio" : ""}
            </a>

      </article>
    </section> 
    <section className="project__upload"> 
      <button className="button--preview" onClick={
        handleSaveProject }>Subir proyecto</button>
        {response && <p className='bt-back'>{response.success  ? 
        (
      <>
        Proyecto guardado correctamente. Puedes ver tu proyecto{' '}
        <a className="colorWhite" target="_blank" href={response.cardURL}>aquí</a>.
      </>
    ): 'Error al guardar el proyecto. Falta algún campo por completar'}</p>}

    </section>
 </>
  );
}

export default CardPreviewSite;