<img src="../assets/blitz-logo.png" alt="Blitz" width="160">

# Laag 2 – useState

**Doel:** je kunt zoeken in de films en een film aanklikken om de details te zien.

**Lees eerst:** [Responding to Events](https://react.dev/learn/responding-to-events), [State: A Component's Memory](https://react.dev/learn/state-a-components-memory), [Thinking in React](https://react.dev/learn/thinking-in-react) (stap 3 en 4 over state)

---

## Begrippen

| Begrip | Wat het is |
|---|---|
| **State** | Gegevens die een component onthoudt en die kunnen veranderen. Verander je state met de setter, dan tekent React het component opnieuw. |
| **`useState`** | De hook waarmee je state maakt: `const [search, setSearch] = useState('')`. Je krijgt de huidige waarde en een functie om hem te veranderen. |
| **Hook** | Een functie van React die begint met `use`. Je roept hem alleen bovenaan je component aan, nooit in een `if` of een loop. |
| **Event** | Iets wat de gebruiker doet, zoals klikken of typen. Je reageert erop met `onClick` of `onChange`. |

---

## 2.1 `MoviesPage`

### Opdracht

Maak `src/components/MoviesPage.tsx`. Dit component wordt de pagina met de films en bewaart straks de state. Voorlopig toont het alleen `<MovieList movies={mockMovies} />`.

Zet in `App.tsx` `<MoviesPage />` in plaats van de `MovieList`.

### Klaar als

- [ ] De app ziet er hetzelfde uit als na laag 1.
- [ ] `App.tsx` weet niets meer van `mockMovies`.

---

## 2.2 Zoeken

### Opdracht

Zet boven de lijst een zoekveld met de class `search-input`. Typ je iets, dan zie je alleen nog de films waarvan de titel die tekst bevat. Hoofdletters maken niet uit.

Zo pak je het aan:

1. Maak in `MoviesPage` state voor de zoektekst: `useState('')`.
2. Koppel die aan het zoekveld met `value` en `onChange`. Zo'n veld heet een **controlled input**: React bepaalt wat erin staat.
3. Maak een **gewone variabele** `filteredMovies`, met `filter` op de lijst. Geef die aan `MovieList`.

> **Waarom geen state voor de gefilterde lijst?** Die kun je altijd uitrekenen uit de films en de zoektekst. Wat je kunt uitrekenen, zet je niet in state. Anders moet je twee dingen gelijk houden en dat gaat vroeg of laat mis.

> **AI mag.** Weet je niet meer hoe `filter` of `toLowerCase` werkt in TypeScript? Vraag het. Het gaat hier om de state, niet om de syntax.

### Klaar als

- [ ] Typ je `the`, dan zie je alleen films met "the" of "The" in de titel.
- [ ] Er is één `useState` voor de zoektekst en geen state voor de gefilterde lijst.

---

## 2.3 Een film selecteren

### Opdracht

Klik je op een film, dan verschijnen de details van die film in een blok onder de lijst. De aangeklikte kaart krijgt een rode rand.

Zo pak je het aan:

1. Maak in `MoviesPage` state voor de geselecteerde film. Aan het begin is er nog niets geselecteerd. Welk type geef je mee aan `useState`?
2. `MovieCard` weet niet wat er moet gebeuren bij een klik. Geef daarom via `MovieList` een functie mee als prop, bijvoorbeeld `onSelect`. `MovieCard` roept die aan in `onClick`.
3. Geef `MovieCard` ook een prop `isSelected`. Is die `true`, dan krijgt de kaart de classes `card card-selected`. `MovieList` moet daarvoor weten welke film geselecteerd is. Geef dat dus ook mee.
4. Maak `src/components/MovieDetail.tsx`. Die toont alle gegevens van één film, in een `div` met de class `detail`. Toon het alleen als er een film is geselecteerd.

> **Tip.** Een functie als prop beschrijf je in een interface zo: `onSelect: (movie: Movie) => void`. Dat betekent: een functie die een `Movie` krijgt en niets teruggeeft.

### Klaar als

- [ ] Klik je op een film, dan zie je de details en een rode rand om de kaart.
- [ ] Klik je op een andere film, dan wisselen de details mee.
- [ ] De state staat in `MoviesPage`, niet in `MovieCard`. Je kunt uitleggen waarom.

---

## 2.4 Maak het stuk

### Opdracht

Doe dit één voor één en herstel het daarna.

1. Vervang de `useState` van de zoektekst door een gewone variabele: `let search = ''`, en verander die in `onChange`. Wat zie je als je typt? Waarom?
2. Haal `onChange` weg bij het zoekveld, maar laat `value` staan. Kun je nog typen? Wat zegt de Console?
3. Zet de `useState` van de zoektekst in een `if`. Start daarna het script `lint` in `package.json`, met de groene pijl. Wat zegt het?

### Klaar als

- [ ] Je kunt per punt uitleggen wat er misgaat.

---

## Oplevering laag 2

- **Pull request** met het zoekveld, het selecteren en `MovieDetail`.
- **Demo:** zoek een film, selecteer een film en wissel van film.
- **Vragen die je in de demo kunt verwachten:**
  - "Wat gebeurt er precies als je een letter in het zoekveld typt? Begin bij `onChange`."
  - "Waarom is `filteredMovies` geen state?"
  - "Waarom kan `MovieCard` zelf niet onthouden welke film geselecteerd is?"
  - "Wat is het verschil tussen props en state?"

---

[← Laag 1 – Components](laag-1-components.md) · [Laag 3 – useEffect en fetch →](laag-3-useeffect-en-fetch.md)
