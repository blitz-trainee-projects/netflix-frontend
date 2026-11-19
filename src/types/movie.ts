// Een interface beschrijft de vorm van een object: welke velden het heeft en van welk type.
// Deze velden zijn precies hetzelfde als `MovieResponse` in de backend.
export interface Movie {
    id: number;
    title: string;
    description: string | null;
    release_year: number;
    duration_minutes: number;
    minimum_age: number;
}

// Deze velden zijn precies hetzelfde als `MovieCreate` in de backend.
export interface MovieCreate {
    title: string;
    description: string | null;
    release_year: number;
    duration_minutes: number;
    minimum_age: number;
}