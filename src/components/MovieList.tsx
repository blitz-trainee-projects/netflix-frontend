import {useEffect, useState} from 'react'
import { MovieCard } from './MovieCard'
import type { Movie } from '../types/movie'
//import { fetchMovies } from '../api/movieApi'

// Altijd EEN props-object doorgeven aan een component
interface MovieListProps {
    movies: Movie[]
}

export function MovieList({movies: mockMovies}: MovieListProps) {
    // State: gegevens die kunnen veranderen. Verandert state, dan tekent React het component opnieuw.
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // useEffect met een lege lijst [] draait één keer, nadat het component op het scherm staat.
    useEffect(() => {
        async function loadMovies() {
            try {
                //const data = await fetchMovies() //moet nog gemaakt worden in movieApi
                //setMovies(data)
                setMovies(mockMovies)
            } catch {
                setError('Kon de films niet ophalen.')
            } finally {
                setLoading(false)
            }
        }

        loadMovies()
    },) //was eerst },[]

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
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}
