<img src="../assets/blitz-logo.png" alt="Blitz" width="160">

# Laag 3 – useEffect en fetch

**Doel:** de films komen uit je backend in plaats van uit je nepdata.

**Lees eerst:** [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects), [MDN: Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) (tot en met *Checking response status*)

**Zorg dat:** je backend draait en er een paar films in je database staan. Maak ze aan met Postman als dat nog niet zo is.

---

## Begrippen

| Begrip | Wat het is |
|---|---|
| **`fetch`** | De functie van de browser om een request te doen, net als een request in Postman. |
| **`async` / `await`** | `fetch` duurt even. Met `await` wacht je op het antwoord zonder dat de pagina vastloopt. Een functie met `await` erin is `async`. |
| **Promise** | Wat een `async`-functie teruggeeft: een belofte dat er later een antwoord komt. `Promise<Movie[]>` betekent: straks krijg je een lijst films. |
| **`useEffect`** | Code die draait **nadat** je component op het scherm staat. Daar hoort een fetch thuis, niet midden in je component. |
| **Dependency array** | De lijst achter je effect, zoals `[]`. Een lege lijst betekent: draai dit één keer, als het component op het scherm komt. |

---

## 3.1 De API-functie

### Opdracht

Maak `src/api/movieApi.ts` met een functie `fetchMovies()` die `GET /movies` aanroept en een `Promise<Movie[]>` teruggeeft. Kijk hoe `fetchPlans` in `src/api/planApi.ts` het doet.

> **Belangrijk.** `fetch` geeft bij een `404` of `500` **geen** fout. Het request is gelukt, alleen het antwoord is slecht nieuws. Daarom controleer je zelf `response.ok`.

### Klaar als

- [ ] `fetchMovies` staat in de map `api`, niet in een component.
- [ ] Je controleert `response.ok` en gooit een fout als die `false` is.

---

## 3.2 Films ophalen

### Opdracht

Haal in `MoviesPage` de films op met `useEffect` in plaats van `mockMovies` te gebruiken. Kijk hoe `PlanList` het doet.

Je hebt drie stukken state nodig:

| State | Type | Begint als |
|---|---|---|
| De films | `Movie[]` | `[]` |
| Aan het laden? | `boolean` | `true` |
| Een foutmelding | `string \| null` | `null` |

Toon *Films laden...* zolang de films laden, en een foutmelding (class `message-error`) als het misgaat.

Gooi daarna `src/data/mockMovies.ts` weg. Je hebt het niet meer nodig.

> **AI mag.** Laat AI gerust de `try`/`catch`/`finally` uitschrijven. Zorg wel dat je kunt aanwijzen welke regel de request doet, waar de state verandert en wanneer React opnieuw tekent.

### Klaar als

- [ ] Je ziet de films uit je database. Maak er een aan in Postman, ververs de pagina en hij staat erbij.
- [ ] Zoeken en selecteren uit laag 2 werken nog.
- [ ] Stop je backend en ververs de pagina, dan zie je je foutmelding.

---

## 3.3 Kijken in de DevTools

### Opdracht

Open de DevTools (`F12`), tabblad **Network**, en ververs de pagina.

1. Klik op het request `movies`. Bekijk de tabbladen **Headers** en **Response**. Herken je het uit Postman?
2. Je ziet het request **twee keer**. Dat komt door `<StrictMode>` in `main.tsx`: tijdens het ontwikkelen zet React elk component er even op, haalt het weg en zet het er opnieuw op. Zo vind je fouten in je effects sneller. In de echte, gebouwde app gebeurt dit niet.

### Klaar als

- [ ] Je kunt in de DevTools de statuscode en de JSON van `GET /movies` laten zien.
- [ ] Je kunt uitleggen waarom het request twee keer gebeurt.

---

## 3.4 Maak het stuk

### Opdracht

Doe dit één voor één en herstel het daarna. Houd het tabblad **Network** open.

1. Haal de lege lijst `[]` achter je `useEffect` weg. Wat zie je in het tabblad **Network**? Waarom stopt het niet? Herstel het snel, je backend krijgt het druk.
2. Haal de controle op `response.ok` weg en verander de URL in `/moviez`. Wat zie je nu op je scherm, en in de Console?
3. Zet de fetch direct in je component, buiten `useEffect`, met `.then(...)` en `setMovies`. Wat gebeurt er? (Zelfde effect als bij 1.)

### Klaar als

- [ ] Je kunt per punt uitleggen wat er misgaat.

---

## Oplevering laag 3

- **Pull request** waarin de films uit de backend komen en de nepdata weg is.
- **Demo:** maak een film aan in Postman en ververs de app. Stop daarna de backend en laat de foutmelding zien.
- **Vragen die je in de demo kunt verwachten:**
  - "Loop met me mee: wat gebeurt er vanaf het openen van de pagina tot de films op het scherm staan?"
  - "Waarom staat de fetch in een `useEffect`?"
  - "Wat betekent de lege lijst `[]` achter je effect?"
  - "Je `Movie`-interface zegt dat `title` een `string` is. Wat als de backend iets anders stuurt?"

---

[← Laag 2 – useState](laag-2-usestate.md) · [Laag 4 – Formulier en POST →](laag-4-formulier-en-post.md)
