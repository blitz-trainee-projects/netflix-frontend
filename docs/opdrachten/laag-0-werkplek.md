<img src="../assets/blitz-logo.png" alt="Blitz" width="160">

# Laag 0 – Werkplek

**Doel:** de app draait in je browser en toont de abonnementen uit je eigen backend.

**Lees eerst:** [MDN: Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS), alleen de inleiding bovenaan. [FastAPI: CORS](https://fastapi.tiangolo.com/tutorial/cors/)

---

## 0.1 Werkplek klaarzetten

### Opdracht

Werk de [handleiding WebStorm en Node.js](../webstorm/00-webstorm-en-node.md) af. Daarna heb je Node.js en WebStorm, staat deze repo op je laptop en draait de app.

### Klaar als

- [ ] Je ziet in je browser de titel **Netflix** op `http://localhost:5173`.
- [ ] Je kunt uitleggen wat `npm install` doet en waar de packages terechtkomen.

---

## 0.2 Rondkijken in het skelet

### Opdracht

Open deze bestanden en lees de comments. Volg het pad van het begin tot het scherm:

| Bestand | Wat het doet |
|---|---|
| `index.html` | De enige HTML-pagina. Er staat alleen een lege `<div id="root">` in. |
| `src/main.tsx` | Start React en zet `App` in die `div`. |
| `src/App.tsx` | Het hoofdcomponent. Hier staat de pagina. |
| `src/components/PlanList.tsx` | Haalt de abonnementen op en toont ze. |
| `src/components/PlanCard.tsx` | Toont één abonnement. |
| `src/api/planApi.ts` | De `fetch` naar `GET /plans`. |
| `src/types/plan.ts` | De interface `Plan`. |

Vergelijk `src/types/plan.ts` met `PlanResponse` in je backend. Wat valt je op?

> **AI mag.** Plak een bestand in een AI-chat en vraag: "Leg regel voor regel uit wat dit React-component doet." Snap je het antwoord niet, vraag dan door.

### Klaar als

- [ ] Je kunt in je eigen woorden vertellen hoe `<PlanList />` in `App.tsx` uiteindelijk drie kaarten op je scherm oplevert.
- [ ] Je weet welk bestand bij `PlanResponse` in de backend hoort.

---

## 0.3 De CORS-fout

### Opdracht

1. Start je backend in PyCharm en start de frontend in WebStorm.
2. Open `http://localhost:5173`. Je ziet: *Kon de abonnementen niet ophalen. Draait de backend?*
3. Je backend draait wel. Open de **DevTools** met `F12` en ga naar het tabblad **Console**. Je ziet een rode melding met *blocked by CORS policy*.
4. Kijk ook in PyCharm, in het venster **Run** van je backend. Staat daar `GET /plans` met `200 OK`?

Wat is hier aan de hand? Je frontend draait op `http://localhost:5173` en je backend op `http://127.0.0.1:8000`. Dat zijn twee verschillende **origins**. De browser laat een pagina standaard geen antwoord lezen van een andere origin, tenzij de server zegt dat het mag. Dat heet **CORS** (Cross-Origin Resource Sharing).

Het request komt dus wél bij je backend aan, en die antwoordt gewoon. Maar de browser gooit het antwoord weg, omdat de backend er geen toestemming bij heeft gezet.

> **Waarom werkte het in Postman wel?** CORS is een regel van de **browser**. Postman is geen browser en controleert het niet.

### Klaar als

- [ ] Je hebt de CORS-melding in de Console gezien.
- [ ] Je kunt uitleggen waarom je backend `200 OK` logt, terwijl de frontend een fout toont.

---

## 0.4 CORS toestaan in je backend

Dit doe je in je **backend-repo**, in PyCharm.

### Opdracht

1. Maak in je backend-repo een branch `cors-frontend`, vanaf je nieuwste branch.
2. Voeg in `app/main.py` de `CORSMiddleware` toe, direct onder de regel `app = FastAPI(...)`:

   ```python
   from fastapi.middleware.cors import CORSMiddleware

   # Sta de frontend toe om deze API vanuit de browser aan te roepen.
   app.add_middleware(
       CORSMiddleware,
       allow_origins=["http://localhost:5173"],
       allow_methods=["*"],
       allow_headers=["*"],
   )
   ```

   De `import` zet je natuurlijk bovenaan bij de andere imports.
3. Herstart je backend en ververs de frontend. Je ziet nu de drie abonnementen.

Wat de regels doen:

| Regel | Betekenis |
|---|---|
| `allow_origins` | Alleen de frontend op `http://localhost:5173` mag de API aanroepen. |
| `allow_methods=["*"]` | Alle methodes mogen. Standaard is dat alleen `GET`, en in laag 4 heb je ook `POST` en `DELETE` nodig. |
| `allow_headers=["*"]` | Alle headers mogen, zoals `Content-Type` die je in laag 4 meestuurt. |

> **Let op.** Open je de frontend via `http://127.0.0.1:5173` in plaats van `http://localhost:5173`, dan is dat voor de browser een andere origin. Dan krijg je de CORS-fout weer. Gebruik altijd `localhost:5173`.

### Klaar als

- [ ] De drie abonnementen staan op je scherm.
- [ ] In de DevTools, tabblad **Network**, zie je het request naar `plans`. Klik erop: bij **Response Headers** staat `access-control-allow-origin: http://localhost:5173`.
- [ ] Je hebt een pull request in je backend-repo voor de branch `cors-frontend`.

---

## 0.5 Eerste pull request

### Opdracht

Zet in deze repo onderaan `README.md` een kopje **Mijn fouten en oplossingen**, net als in je backend. Schrijf de CORS-fout erin, met de oplossing in één zin. Commit, push en open een pull request naar `main`.

### Klaar als

- [ ] Je hebt een pull request in deze repo.

---

## Oplevering laag 0

- **Twee pull requests**: CORS in je backend-repo en je README in deze repo.
- **Demo:** start beide apps, laat de abonnementen zien en laat het request zien in het tabblad **Network**.
- **Vragen die je in de demo kunt verwachten:**
  - "Wat is een origin? Welke twee origins heb jij?"
  - "Waarom had je in Postman nooit last van CORS?"
  - "Waarom staat de oplossing in de backend en niet in de frontend?"
  - "Wat zou er gebeuren als je `allow_origins` leeg laat?"

---

[← Introductie](00-introductie.md) · [Laag 1 – Components →](laag-1-components.md)
