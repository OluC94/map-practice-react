import Movie from "./Movie";
import { useMovieGenerator } from "./useMovieGenerator";
export default function MapPractice2() {
    const [movies, regenerate] = useMovieGenerator();
    console.log("movies", movies);

    const movieList = movies.map((movie, index) => {
        return (<Movie
                key={index}
                title={movie.title}
                star={movie.star}
                genre={movie.genre}
                quote={movie.quote}
            />)
    })

    return (
        <div className="mapPractice">
            <h2>Map Practice 2</h2>
            <button onClick={regenerate}>Change Movies</button>
            <div className="movieList">
                {movieList}
            </div>
        </div>
    );
}
