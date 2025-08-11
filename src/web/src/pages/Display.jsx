import { useEffect, useState } from 'react';
import CardImage from '../components/cardPreview/CardImage.jsx';
import CardAuthor from '../components/cardPreview/CardAuthor.jsx';
import CardProject from '../components/cardPreview/CardProject.jsx';
import '../styles/layout/display.scss';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/proyectos')
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
                <h2 className="article__projectTitle">Personal Project Card</h2>

                <div className="project__author">
                  <CardAuthor data={project} />
                </div>

                <p className="project__subtitle">About this project:</p>
                <CardProject data={project} />

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
