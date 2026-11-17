import { MovieList } from './MovieList.tsx'
import { mockMovies } from '../data/mockMovies'
import { useState } from 'react'

export function MoviesPage() {
    // State voor de zoektekst
    const [search, setSearch] = useState('')

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
                <MovieList movies={filteredMovies} />
            </section>
        </main>
    )
}
