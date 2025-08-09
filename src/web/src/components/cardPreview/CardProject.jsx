

function CardProject ({data}) {
    return (
        <>
            
        <div className="article__project">
          <h3 className="article__name">{data.projectName || 'Nombre del proyecto'}</h3>
          <p className="article__slogan">{data.slogan || 'Slogan del proyecto'}</p>
          <h3>Product description:</h3>
          <p>
            {data.description ||
              'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
          </p>

          <div>
            <p>
              {data.technologies || 'React JS - HTML - CSS'}
            </p>

          </div>
        </div>
        </>
    )
}

export default CardProject


