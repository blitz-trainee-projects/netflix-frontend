import {useEffect, useState} from 'react'
import { MovieCard } from './MovieCard'
import type { Movie } from '../types/movie'

//import { fetchMovies } from '../api/movieApi'

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
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // Geselecteerde film
    // const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)

    // useEffect met een lege lijst [] draait één keer, nadat het component op het scherm staat.
    useEffect(() => {
        async function loadMovies() {
            try {
                //const data = await fetchMovies() //moet nog gemaakt worden in movieApi
                //setMovies(data)
                setMovies(initialMovies)
            } catch {
                setError('Kon de films niet ophalen.')
            } finally {
                setLoading(false)
            }
        }

        loadMovies()
    }, [initialMovies])     //was eerst },[]  // [initialMovies] beetje raar wat het doet HIER

    if (loading) {
        return <p className="message">Films laden...</p>
    }

    if (error) {
        return <p className="message message-error">{error}</p>
    }

    return (
        <div className="card-grid">
            {/* Bij een lijst geef je elk element een unieke key, zodat React ze uit elkaar houdt. */}
            {movies.map((movie) => (
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
