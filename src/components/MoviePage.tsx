import { MovieList } from './MovieList.tsx'
import { mockMovies } from '../data/mockMovies'
import { useState } from 'react'
import { MovieDetail } from './MovieDetail'
import type { Movie } from '../types/movie'

export function MoviesPage() {
    // State voor de zoektekst
    const [search, setSearch] = useState('')

    // Geselecteerde film bijhouden
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)

    // Filter films op basis van de titel
    const filteredMovies = mockMovies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    )

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
