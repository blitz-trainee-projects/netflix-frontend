<img src="../assets/blitz-logo.png" alt="Blitz" width="160">

# Laag 1 – Components

**Doel:** je app toont een lijst met films. De films staan voorlopig nog in je code (nepdata). In laag 3 komen ze uit je backend.

**Lees eerst:** [Your First Component](https://react.dev/learn/your-first-component), [Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component), [Rendering Lists](https://react.dev/learn/rendering-lists), [Conditional Rendering](https://react.dev/learn/conditional-rendering), [TypeScript: Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html) (alleen het begin, tot *Property Modifiers*)

---

## Begrippen

| Begrip | Wat het is |
|---|---|
| **Component** | Een functie die JSX teruggeeft: een stuk van je pagina. De naam begint met een hoofdletter, bijvoorbeeld `PlanCard`. |
| **JSX** | HTML-achtige code in je TypeScript. Tussen `{ }` zet je gewone code, zoals `{plan.name}`. Let op: `class` heet in JSX `className`. |
| **Props** | De gegevens die je aan een component meegeeft, zoals `<PlanCard plan={plan} />`. Te vergelijken met de parameters van een functie. |
| **Interface** | Een beschrijving van de vorm van een object. TypeScript waarschuwt als je een veld vergeet of het verkeerde type gebruikt. |

---

## 1.1 De interface `Movie`

### Opdracht

Maak `src/types/movie.ts` met een interface `Movie`. De velden zijn precies die van `MovieResponse` in je backend. Kijk hoe `src/types/plan.ts` het doet.

Twee dingen om op te letten:

- In Python is het `int`, in TypeScript gewoon `number`. TypeScript kent geen apart type voor hele getallen.
- `description` kan in je backend `None` zijn. In TypeScript schrijf je dat als `string | null`.

### Klaar als

- [ ] `Movie` heeft dezelfde velden als `MovieResponse` in je backend, met dezelfde namen.
- [ ] Je kunt uitleggen wat `string | null` betekent.

---

## 1.2 Nepdata

### Opdracht

Maak `src/data/mockMovies.ts` met een lijst van minstens vier films:

```ts
import type { Movie } from '../types/movie'

export const mockMovies: Movie[] = [
  // je films
]
```

Zorg dat er minstens één film bij zit zonder beschrijving (`null`) en één met `minimum_age` 0.

> **AI mag.** Vraag AI om vier films in dit formaat. Het typwerk is niet waar het om gaat.

Probeer daarna eens een veld weg te laten bij één film, of zet een tekst in `release_year`. Wat zegt WebStorm? Zet het daarna terug.

### Klaar als

- [ ] De lijst heeft het type `Movie[]` en WebStorm geeft geen rode strepen.
- [ ] Je hebt gezien dat TypeScript klaagt als een film niet bij de interface past.

---

## 1.3 `MovieCard`

### Opdracht

Maak `src/components/MovieCard.tsx`. Het component krijgt één film binnen als prop en toont:

- de titel, het jaar en de duur in minuten;
- de leeftijd als label, met de class `badge`. Is de leeftijd 0, toon dan **AL** (alle leeftijden). Anders bijvoorbeeld **12+**;
- de beschrijving. Is die er niet (`null`), toon dan *Geen beschrijving*.

Beschrijf de props met een interface `MovieCardProps`, net als `PlanCardProps` in `PlanCard.tsx`. Gebruik de classes `card`, `card-title`, `card-meta` en `card-text` uit `index.css`.

### Klaar als

- [ ] `MovieCard` heeft een interface voor de props.
- [ ] De leeftijd en de beschrijving tonen het juiste bij 0 en bij `null`.

---

## 1.4 `MovieList`

### Opdracht

Maak `src/components/MovieList.tsx`. Het component krijgt een lijst films binnen als prop en toont voor elke film een `MovieCard`, in een `div` met de class `card-grid`.

Toon in `App.tsx` een nieuwe `section` met de kop **Films** en daarin `<MovieList movies={mockMovies} />`.

> **Let op de `key`.** Geef elke `MovieCard` in de lijst een unieke `key`, net als in `PlanList`. Gebruik het `id` van de film, niet de positie in de lijst.

### Klaar als

- [ ] Je ziet de films onder de abonnementen.
- [ ] `MovieList` haalt de films niet zelf op, maar krijgt ze als prop.
- [ ] De Console in de DevTools is leeg: geen waarschuwingen over een `key`.

---

## 1.5 Maak het stuk

### Opdracht

Doe dit één voor één en herstel het daarna.

1. Haal de `key` weg in `MovieList`. Welke waarschuwing zie je in de Console?
2. Geef `MovieList` geen `movies` mee in `App.tsx`. Waar zie je de fout: in WebStorm, in de browser of allebei?
3. Schrijf de naam van je component met een kleine letter: `movieCard`. Wat gebeurt er?

### Klaar als

- [ ] Je kunt per punt uitleggen wat er misgaat.

---

## Oplevering laag 1

- **Pull request** met `Movie`, de nepdata, `MovieCard` en `MovieList`.
- **Demo:** laat de lijst zien, en laat zien wat er gebeurt als je een veld uit een nepfilm weghaalt.
- **Vragen die je in de demo kunt verwachten:**
  - "Wat is het verschil tussen een prop en een gewone variabele in je component?"
  - "Waarom heeft een lijst in React een `key` nodig?"
  - "Wat is het verschil tussen `MovieCardProps` en `Movie`?"
  - "Controleert TypeScript ook of de backend straks echt een `Movie` stuurt?"

---

[← Laag 0 – Werkplek](laag-0-werkplek.md) · [Laag 2 – useState →](laag-2-usestate.md)
