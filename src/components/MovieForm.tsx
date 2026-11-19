import { useState } from 'react'
import type { SubmitEvent } from 'react'
import type { Movie, MovieCreate } from '../types/movie'
import { createMovie } from '../api/movieAPI'

interface MovieFormProps {
    onCreated: (movie: Movie) => void
}

export function MovieForm({ onCreated }: MovieFormProps) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [year, setYear] = useState('')
    const [duration, setDuration] = useState('')
    const [age, setAge] = useState('0')

    const [error, setError] = useState('')
    const [saving, setSaving] = useState(false)

    async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault()

        setError('')
        setSaving(true)

        const newMovie: MovieCreate = {
            title: title,
            description: description,
            release_year: Number(year),
            duration_minutes: Number(duration),
            minimum_age: Number(age)
        }

        try {
            const createdMovie = await createMovie(newMovie)
            onCreated(createdMovie)

            //Film wordt gemaakt met lege velden, daarna ingevuld
            setTitle('')
            setDescription('')
            setYear('')
            setDuration('')
            setAge('0')

        } catch (err) {
            setError('Opslaan mislukt')

        } finally {
            setSaving(false)
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>

            <div className="form-row">
                <label htmlFor="title">Titel</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="form-row">
                <label htmlFor="description">Beschrijving</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div className="form-row">
                <label htmlFor="year">Jaar</label>
                <input
                    id="year"
                    type="number"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
            </div>

            <div className="form-row">
                <label htmlFor="duration">Duur in minuten</label>
                <input
                    id="duration"
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />
            </div>

            <div className="form-row">
                <label htmlFor="age">Leeftijd</label>
                <select
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                >
                    <option value="0">0</option>
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="12">12</option>
                    <option value="14">14</option>
                    <option value="16">16</option>
                    <option value="18">18</option>
                </select>
            </div>

            {error && (
                <p className="message-error">{error}</p>
            )}

            <button type="submit" disabled={saving}>
                {saving ? 'Opslaan...' : 'Film opslaan'}
            </button>

        </form>
    )
}