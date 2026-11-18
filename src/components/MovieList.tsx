import { MovieCard } from './MovieCard'
import type { Movie } from '../types/movie'

// Altijd EEN props-object doorgeven aan een component
interface MovieListProps {
    movies: Movie[]
    selectedMovie: Movie | null
    onSelect: (movie: Movie) => void
}

export function MovieList({
                              movies: initialMovies,
                              selectedMovie,
                              onSelect
                          }: MovieListProps) {
    return (
        <div className="card-grid">
            {/* Bij een lijst geef je elk element een unieke key, zodat React ze uit elkaar houdt. */}
            {initialMovies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    isSelected={selectedMovie?.id === movie.id}
                    onSelect={onSelect}
                />
            ))}
        </div>
    )
}
