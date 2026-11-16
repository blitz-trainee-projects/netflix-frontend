<img src="../assets/blitz-logo.png" alt="Blitz" width="160">

# Laag 4 – Formulier en POST

**Doel:** je kunt een film toevoegen via een formulier. Als extra kun je een film verwijderen.

**Lees eerst:** [`<input>`: Controlling an input with a state variable](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable), [Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state) (alleen *Adding to an array* en *Removing from an array*), [MDN: Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) (*Setting a body* en *Setting headers*)

---

## Begrippen

| Begrip | Wat het is |
|---|---|
| **Controlled input** | Een invoerveld waarvan de waarde in state staat. Dit ken je al van het zoekveld. |
| **`onSubmit`** | Het event van een formulier als je op de knop klikt of op Enter drukt. Standaard herlaadt de browser dan de pagina. Dat voorkom je met `event.preventDefault()`. |
| **Request body** | De JSON die je meestuurt, net als de body in Postman. Met `JSON.stringify` maak je van een object een JSON-tekst. |
| **Header `Content-Type`** | Vertelt de backend dat de body JSON is: `'Content-Type': 'application/json'`. In Postman ging dat automatisch. |

---

## 4.1 De interface `MovieCreate`

### Opdracht

Voeg in `src/types/movie.ts` een interface `MovieCreate` toe: wat je naar `POST /movies` stuurt. Kijk naar `MovieCreate` in je backend.

### Klaar als

- [ ] `MovieCreate` heeft alle velden van `Movie`, behalve `id`. Je weet waarom.

---

## 4.2 De API-functie

### Opdracht

Voeg in `src/api/movieApi.ts` een functie `createMovie(movie: MovieCreate)` toe. Die doet een `POST /movies` met de film als JSON-body en geeft de nieuwe film terug: een `Promise<Movie>`.

Het verschil met `fetchMovies` is dat je een tweede argument meegeeft aan `fetch`:

```ts
const response = await fetch(`${API_URL}/movies`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(movie),
})
```

Controleer daarna weer `response.ok`, net als in `fetchMovies`.

### Klaar als

- [ ] `createMovie` geeft de film terug die de backend heeft aangemaakt, mét `id`.

---

## 4.3 `MovieForm`

### Opdracht

Maak `src/components/MovieForm.tsx`: een formulier met de class `form`. Zet elk veld in een `div` met de class `form-row`, met een `label` erboven.

| Veld | Invoer |
|---|---|
| Titel | `<input>` |
| Beschrijving | `<textarea>` |
| Jaar | `<input type="number">` |
| Duur in minuten | `<input type="number">` |
| Leeftijd | `<select>` met de opties 0, 6, 9, 12, 14, 16 en 18 |

Bij het opslaan:

1. Roep `event.preventDefault()` aan.
2. Maak een `MovieCreate`-object van de velden en roep `createMovie` aan.
3. Geef de nieuwe film door aan `MoviesPage` met een prop `onCreated`, zoals je bij `onSelect` deed.
4. Maak de velden leeg.

Zet in `MoviesPage` de nieuwe film achteraan in de lijst. Gebruik daarvoor een **nieuwe** lijst: `setMovies([...movies, newMovie])`. Gebruik geen `movies.push(...)`: dan verandert de lijst wel, maar React ziet dat niet.

Toon het formulier in een eigen `section` met de kop **Film toevoegen**.

> **Het type van het event.** Je functie voor `onSubmit` krijgt een `SubmitEvent<HTMLFormElement>`, die je importeert met `import type { SubmitEvent } from 'react'`. Veel voorbeelden op internet, en ook AI, gebruiken nog `FormEvent`. Die is verouderd: WebStorm streept hem door.

> **Getallen uit een invoerveld.** `event.target.value` is altijd een `string`, ook bij `type="number"`. Bewaar het in je state als tekst en zet het pas bij het opslaan om met `Number(...)`.

> **AI mag.** Een formulier is veel typwerk. Laat AI gerust de velden uitschrijven. Controleer wel dat elk veld een controlled input is, met `value` én `onChange`.

### Klaar als

- [ ] Een nieuwe film verschijnt meteen in de lijst, zonder dat je de pagina ververst.
- [ ] Na het verversen staat de film er nog. Hij staat dus echt in je database.
- [ ] De pagina herlaadt niet als je op **Opslaan** klikt.
- [ ] De velden zijn leeg na het opslaan.

---

## 4.4 Fouten van de backend tonen

### Opdracht

Laat de titel leeg en klik op **Opslaan**. Je backend weigert dat met een `422`. Kijk in het tabblad **Network** wat de backend precies terugstuurt.

Toon in je formulier een foutmelding (class `message-error`) als het opslaan mislukt, bijvoorbeeld: *Opslaan mislukt (status 422)*.

Zet zolang het opslaan bezig is de knop op `disabled`, zodat niemand twee keer klikt.

### Klaar als

- [ ] Een film zonder titel geeft een foutmelding in het formulier en komt niet in de lijst.
- [ ] Na een fout staan de ingevulde velden er nog.

---

## 4.5 Extra: verwijderen

### Opdracht

Zet in `MovieDetail` een knop **Verwijderen**, met de classes `button button-danger`.

1. Voeg in `movieApi.ts` een functie `deleteMovie(id: number)` toe die `DELETE /movies/{id}` aanroept.
2. Je backend geeft `204 No Content` terug: er zit geen body in het antwoord. Roep dus **geen** `response.json()` aan. De functie geeft `Promise<void>` terug.
3. Geef `MovieDetail` een prop `onDelete`, net als `onSelect`. Haal de film in `MoviesPage` uit de lijst met `filter`, en zet de geselecteerde film terug op `null`.

### Klaar als

- [ ] Na verwijderen is de film weg uit de lijst en het detailblok is verdwenen.
- [ ] Na het verversen is hij nog steeds weg.

---

## 4.6 Maak het stuk

### Opdracht

Doe dit één voor één en herstel het daarna.

1. Haal `event.preventDefault()` weg en sla een film op. Wat zie je in het tabblad **Network**?
2. Haal de header `Content-Type` weg. Welke statuscode geeft je backend nu, en waarom?
3. Gebruik `movies.push(newMovie)` en `setMovies(movies)` in plaats van een nieuwe lijst. Verschijnt de film?
4. Roep in `deleteMovie` wel `response.json()` aan en verwijder een film. Wat zie je in de app? Ververs daarna de pagina: is de film echt weg?

### Klaar als

- [ ] Je kunt per punt uitleggen wat er misgaat.

---

## Oplevering laag 4

- **Pull request** met het formulier, de foutmelding en (als je het gedaan hebt) het verwijderen.
- **Demo:** voeg een film toe, laat de 422 zien met een lege titel, en verwijder een film.
- **Vragen die je in de demo kunt verwachten:**
  - "Loop met me mee: wat gebeurt er vanaf het klikken op **Opslaan** tot de film in de lijst staat?"
  - "Waarom heeft `MovieCreate` geen `id`?"
  - "Waarom maak je een nieuwe lijst in plaats van `push`?"
  - "Waarom roep je bij `DELETE` geen `response.json()` aan?"
  - "Waar is het nu het mooiste om te checken of een titel leeg is: in de frontend, de backend of allebei?"

Dit is de laatste laag. Je hebt nu een frontend die met je eigen backend praat: ophalen, toevoegen en verwijderen. Bespreek met je trainer wat de volgende stap is.

---

[← Laag 3 – useEffect en fetch](laag-3-useeffect-en-fetch.md)
