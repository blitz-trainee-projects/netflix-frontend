import { API_URL } from './config'
import type { Movie } from '../types/movie'

// Haalt alle films op bij GET /movies.
// Alle communicatie met de backend staat in de map api, niet in je components.
export async function fetchMovies(): Promise<Movie[]> {
    const response = await fetch(`${API_URL}/movies`)

    // fetch geeft bij een 404 of 500 géén fout. Dat moet je zelf controleren.
    if (!response.ok) {
        throw new Error(`De backend gaf status ${response.status}`)
    }

    // TypeScript controleert níet of de JSON echt een Movie[] is. Dat beloof jij hier.
    return response.json()
}
