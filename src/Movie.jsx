export default function Movie(props) {
    const {title, star, genre, quote} = props;

    return (<div className="movie">
        <h2>{title}</h2>
        <p>Star: {star}</p>
        <p>Genre: {genre}</p>
        <blockquote>{quote}</blockquote>
    </div>)
}

