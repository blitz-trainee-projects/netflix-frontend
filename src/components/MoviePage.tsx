import { MovieList } from './MovieList.tsx'
import { useState, useEffect } from 'react'
import { MovieDetail } from './MovieDetail'
import type { Movie } from '../types/movie'
import { fetchMovies } from "../api/movieAPI.ts";

//import { MovieCard } from "./MovieCard.tsx";

export function MoviesPage() {
    const [search, setSearch] = useState('')
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)

    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        async function loadMovies() {
            try {
                const data = await fetchMovies()
                setMovies(data)
            } catch {
                setError('Kon de films niet ophalen. Draait de backend?')
            } finally {
                setLoading(false)
            }
        }
        loadMovies()
    }, [])

    if (loading) {
        return <p className="message">Films laden...</p>
    }
    if (error) {
        return <p className="message message-error">{error}</p>
    }

    return (
        <main className="app">
            <h1 className="app-title">Netflix</h1>

            <section className="section">
                <h2 className="section-title">Films</h2>

                {/* Zoekveld */}
                <input
                    className="search-input"
                    type="text"
                    placeholder="Zoek een film..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* Gefilterde films doorgeven */}
                <MovieList
                    movies={filteredMovies}
                    selectedMovie={selectedMovie}
                    onSelect={setSelectedMovie}
                />
                {selectedMovie && (     //wat hier precies mee bedoeld?
                    <MovieDetail movie={selectedMovie} />
                )}

            </section>
        </main>
    )
}
