import type { Movie } from '../types/movie'

// De props van een component beschrijf je ook met een interface.
interface MovieCardProps {
  movie: Movie
  isSelected: boolean
  onSelect: (movie: Movie) => void //functie in de prop
}

// Een component is een functie die HTML (JSX) teruggeeft. De naam begint met een hoofdletter.
export function MovieCard({
                              movie,
                              isSelected,
                              onSelect
                          }: MovieCardProps) {
  return (
    <article
      className={`card ${isSelected ? 'card-selected' : ''}`}
      onClick={() => onSelect(movie)}
    >
      <h3 className="card-title">{movie.title}</h3>
      <p className="card-meta">{movie.description ?? 'Geen beschrijving beschikbaar'}</p>
      <p className="card-meta">Uitgekomen in {movie.release_year}</p>
      <p className="card-meta">{movie.duration_minutes} mins</p>
      <p className="card-meta">Minimale leeftijd {movie.minimum_age} jaar</p>
    </article>
  )
}
