
interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    vote_average: number;
    release_date: string;
}

interface MovieCardProps {
    movie: Movie;
}


const MovieCard = ({ movie }: MovieCardProps) => {
    return (
        <>
            <li className="movie-card">
                    <img 
                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : './placeholder.png'} 
                        alt={movie.title}
                    />
                    <h3 className="m-3">{movie.title}</h3>
                </li>
        </>
    )
}

export default MovieCard;