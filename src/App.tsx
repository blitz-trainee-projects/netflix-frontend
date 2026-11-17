import { PlanList } from './components/PlanList'
import { MovieList } from './components/MovieList'
import { mockMovies } from './data/mockMovies'
import {MoviesPage} from './components/MoviePage'

function App() {
  return (
    <main className="app">
      <h1 className="app-title">Netflix</h1>

      <section className="section">
        <h2 className="section-title">Abonnementen</h2>
        <PlanList />
      </section>

      {/* Hier komen vanaf laag 1 je films. */}
      <section className="section">
        <h2 className="section-title">Films</h2>
          {/* <MovieList movies={mockMovies} /> */}
          <MoviesPage />
      </section>
    </main>
  )
}

export default App
