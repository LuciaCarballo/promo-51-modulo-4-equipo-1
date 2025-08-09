
import avatar from '../../images/avatar.webp';

function CardAuthor ({data}) {
    return (
        <>
            <div className="author">
                <div
                    className="authorPhoto"
                    style={{
                    backgroundImage: data.authorPhoto
                        ? `url(${data.authorPhoto})`
                        : `url(${avatar})`
                    }}
                ></div>

                <h3>{data.authorName || 'Nombre Apellido'}</h3>
                 <p>{data.job || 'Full Stack Developer'}</p>
            </div>
        </>
    )
}

export default CardAuthor


