<img src="../assets/blitz-logo.png" alt="Blitz" width="160">

# Welkom bij de Netflix-frontend

Je hebt een backend gebouwd die je tot nu toe met Postman aanriep. Nu bouw je de **frontend**: een webpagina die dezelfde API aanroept, maar dan vanuit de browser. Je gebruikt **React** met **TypeScript**.

Het doel is niet een mooie site. Het doel is dat je snapt hoe een React-app in elkaar zit en hoe de frontend met je backend praat.

## Wat je leert

- **Components**: je pagina opdelen in kleine, herbruikbare stukken.
- **Props**: gegevens doorgeven van een component naar een ander component.
- **Interfaces**: met TypeScript vastleggen hoe je gegevens eruitzien.
- **useState**: gegevens die veranderen, zoals de tekst in een zoekveld.
- **useEffect**: code die draait nadat je component op het scherm staat, zoals het ophalen van films.
- **fetch**: je backend aanroepen vanuit de browser, met GET, POST en DELETE.
- **CORS**: waarom de browser je eerst tegenhoudt, en hoe je backend dat toestaat.

Dat is het. Routing, inloggen en state-libraries komen later.

## Wat je al moet kennen

- Je eigen backend: de endpoints voor `/plans` en `/movies`.
- Een beetje HTML. TypeScript lijkt veel op Python met types erbij. Je leert het onderweg.

## Hoe het traject werkt

Net als bij je backend bouw je de app **laag voor laag**. Elke laag levert een werkende app op.

**Per laag doe je dit:**

1. Maak een branch, bijvoorbeeld `laag-1-components`. Git werkt in WebStorm hetzelfde als in PyCharm, want ze komen van dezelfde maker. Gebruik de Git-handleiding uit je backend-repo.
2. Werk de opdrachten af. Elk onderdeel eindigt met een **Klaar als**-lijst.
3. Open een **pull request** naar `main`. Je trainer reviewt je code.
4. Geef een korte **demo** in de browser en beantwoord de vragen die erbij horen.
5. Verwerk de feedback, merge en begin aan de volgende laag.

## Werken met AI

Dit is anders dan bij je backend. **Je mag AI gebruiken, ook om code te laten schrijven.**

Waar het in deze opdracht om gaat, zijn de **begrippen**: wat een component is, wat state is, wanneer een effect draait, hoe een fetch werkt. Hoe je een knop precies opmaakt of welke syntax je voor een formulier gebruikt, doet er minder toe. Dat zoek je later ook gewoon op.

Wel een paar afspraken:

1. **Snap wat je commit.** In de demo vraagt je trainer waarom iets werkt. "Dat deed de AI" is geen antwoord.
2. **Vraag AI ook om uitleg.** Bijvoorbeeld: "Waarom moet ik hier `useState` gebruiken en niet een gewone variabele?"
3. **Houd het simpel.** Stelt AI een library voor, zoals Redux, React Query of Axios? Doe het dan zonder. Alles in deze opdracht kan met React zelf en `fetch`.

## Overzicht

| Laag | Onderwerp | Wat er nieuw is |
|---|---|---|
| 0 | [Werkplek](laag-0-werkplek.md) | Node.js, WebStorm, de app starten, DevTools, CORS in je backend |
| 1 | [Components](laag-1-components.md) | Components, props, interfaces, lijsten met `map` en `key` |
| 2 | [useState](laag-2-usestate.md) | State, events, zoeken, een film selecteren |
| 3 | [useEffect en fetch](laag-3-useeffect-en-fetch.md) | Films ophalen met GET, laden en fouten tonen |
| 4 | [Formulier en POST](laag-4-formulier-en-post.md) | Een film toevoegen met POST, extra: verwijderen met DELETE |

## Uitgangspunten

| Onderdeel | Keuze |
|---|---|
| Taal | TypeScript |
| Framework | React, met function components en hooks |
| Bouwtool | Vite |
| Editor | WebStorm, zonder terminal |
| Opmaak | Kant-en-klaar in `src/index.css`. Je gebruikt alleen de classes. |
| Backend | Je eigen Netflix-backend, lokaal op `http://127.0.0.1:8000` |
| Startpunt | Een skelet met één werkend voorbeeld: de abonnementen. De films bouw je zelf. |

## Bronnen

Deze bronnen gebruik je het hele traject als naslag. Ze zijn in het Engels. De officiële React-docs zijn erg goed: begin daar.

| Bron | Soort | Waarvoor |
|---|---|---|
| [React: Quick Start](https://react.dev/learn) | Docs | Het overzicht van React in één pagina |
| [React: Thinking in React](https://react.dev/learn/thinking-in-react) | Docs | Hoe je een pagina opdeelt in components |
| [React: Using TypeScript](https://react.dev/learn/typescript) | Docs | React en TypeScript samen |
| [TypeScript: Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html) | Docs | Interfaces |
| [MDN: Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) | Docs | Alles over `fetch` |
| [Vite: Getting Started](https://vite.dev/guide/) | Docs | Wat Vite is |

---

[Handleiding WebStorm en Node.js →](../webstorm/00-webstorm-en-node.md)
