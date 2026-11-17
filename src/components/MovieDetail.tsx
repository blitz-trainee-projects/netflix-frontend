import type { Movie } from '../types/movie'

interface MovieDetailProps {
    movie: Movie
}

export function MovieDetail({ movie }: MovieDetailProps) {
    return (
        <div className="detail">
            <h2>{movie.title}</h2>

            <p>
                Beschrijving: {movie.description ?? 'Geen beschrijving beschikbaar'}
            </p>

            <p>Releasejaar: {movie.release_year}</p>

            <p>Duur: {movie.duration_minutes} minuten</p>

            <p>Minimale leeftijd: {movie.minimum_age} jaar</p>
        </div>
    )
}