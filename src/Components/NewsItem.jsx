import image from '../assets/news.jpeg'

const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2" style={{maxWidth:"345px"}}>
            <img src={src?src:image} style={{height:"200px",width:"325px"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0,50)}</h5>
                    <p className="card-text">{description?description.slice(0,90):"News is current event. It is information about something that has just happened."}</p>
                    <a href={url} className="btn btn-primary">Read More</a>
                </div>
        </div>
    )
}

export default NewsItem