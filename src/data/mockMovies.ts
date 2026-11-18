import type { Movie } from '../types/movie'

export const mockMovies: Movie[] = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        description: "Een bankier wordt veroordeeld voor moord en probeert zijn leven opnieuw op te bouwen in de gevangenis.",
        release_year: 1994,
        duration_minutes: 142,
        minimum_age: 16,
    },
    {
        id: 2,
        title: "The Matrix",
        description: null,
        release_year: 1999,
        duration_minutes: 136,
        minimum_age: 12,
    },
    {
        id: 3,
        title: "Inception",
        description: "Een dief kan geheimen stelen uit dromen en krijgt een opdracht om een idee in iemands geest te planten.",
        release_year: 2010,
        duration_minutes: 148,
        minimum_age: 0,
    },
    {
        id: 4,
        title: "Interstellar",
        description: "Een groep astronauten reist door een wormgat op zoek naar een nieuwe leefbare planeet voor de mensheid.",
        release_year: 2014,
        duration_minutes: 169,
        minimum_age: 12,
    },
]
