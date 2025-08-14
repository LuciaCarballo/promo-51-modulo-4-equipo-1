import { useEffect, useState } from 'react';
import CardImage from '../components/cardPreview/CardImage.jsx';
import '../styles/layout/display.scss';
import avatar from '../images/avatar.webp';


function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {

    fetch('https://promo-51-modulo-4-equipo-1.onrender.com/proyecto-autora')
      .then(res => res.json())
      .then(data => {
        setProjects(data.result);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al cargar los proyectos:', err);
        setLoading(false);
      });  
     }, []);
console.log(projects[0]);

return (

  <div>
{/* 
    <section className="hero">
            <h1 className="hero__title">TalentLAB</h1>
            
            <Link to="/app" className="hero__button">
                Subir nuevo proyecto
            </Link>

      </section> */}

    <section className="project">
      <h2 className="project__title">Proyectos subidos</h2>

      {loading ? (
        <p>Cargando proyectos...</p>
      ) : projects.length === 0 ? (
        <p>No hay proyectos disponibles.</p>
      ) : (
        <div className="project__list">
          {projects.map((project, index) => (
            <div key={index} className="project__card">
              <div className="project__image">
                <CardImage data={project} />
              </div>

              <article className="project__article">
                <h2 className="article__projectTitle">{project.projectName}</h2>

                <div className="project__author">
                   <div
                                      className="authorPhoto"
                                      style={{
                                      backgroundImage: project.image
                                          ? `url(${project.image})`
                                          : `url(${avatar})`
                                      }}
                                  ></div>
                  
                                  <h3>{project.autor || 'Nombre Apellido'}</h3>
                                   <p>{project.job || 'Full Stack Developer'}</p>
                </div>

                <p><strong>Description: </strong>{project.description}</p>
                <p><strong>Slogan: </strong> {project.slogan}</p>
                <p><strong>Technologies: </strong>{project.technologies}</p>

                <div className="project__links">
                  {project.demo && (
                    <a
                      className="project__link"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Web
                    </a>
                  )}
                  {project.repo && (
                    <a
                      className="project__link"
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Repositorio
                    </a>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      )}
    </section>

    </div>
  );


}

export default Projects;
