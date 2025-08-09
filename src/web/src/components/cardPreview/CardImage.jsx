import imgBook from '../../images/ebook-example.jpg';

function CardImage ({data}) {
    return (
        <>
            <div className="image"
            style={{ backgroundImage: 
            data.projectPhoto ? `url(${data.projectPhoto})` 
            : `url(${imgBook})`}}>  
            </div>
        </>
    )
}

export default CardImage