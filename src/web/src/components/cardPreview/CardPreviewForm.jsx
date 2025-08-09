
import CardImage from './CardImage.jsx';
import CardAuthor from './CardAuthor.jsx';
import CardProject from './CardProject.jsx';
import ButtonCard from '../ButtonCard.jsx';



function CardPreview({ data }) {
  return (
    <section className="preview">
        <CardImage data={data} />

      <article className="card">
        <h2 className="card__projectTitle">Project Card</h2>
        <CardAuthor data={data} />
        <CardProject data={data} />

       
      </article>
       <ButtonCard />
    </section>
     
  );
}

export default CardPreview;