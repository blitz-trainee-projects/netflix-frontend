<img src="docs/assets/blitz-logo.png" alt="Blitz" width="200">

# Netflix-frontend

Je bouwt een frontend voor je eigen Netflix-backend, met React en TypeScript. De app toont je films, je kunt zoeken, een film aanklikken, een film toevoegen en een film verwijderen. Alle gegevens komen uit de API die je in je backend-repo hebt gebouwd.

## Begin hier

1. Lees de [introductie](docs/opdrachten/00-introductie.md).
2. Zet je werkplek klaar met de [handleiding WebStorm en Node.js](docs/webstorm/00-webstorm-en-node.md).
3. Start met [laag 0 – Werkplek](docs/opdrachten/laag-0-werkplek.md).

## Lagen

Elke laag levert een werkende app op. Je werkt ze op volgorde af.

| Laag | Onderwerp | Wat je leert |
|---|---|---|
| 0 | [Werkplek](docs/opdrachten/laag-0-werkplek.md) | De app starten, DevTools, CORS |
| 1 | [Components](docs/opdrachten/laag-1-components.md) | Components, props, interfaces, lijsten |
| 2 | [useState](docs/opdrachten/laag-2-usestate.md) | State, events, zoeken en selecteren |
| 3 | [useEffect en fetch](docs/opdrachten/laag-3-useeffect-en-fetch.md) | Gegevens ophalen uit je backend |
| 4 | [Formulier en POST](docs/opdrachten/laag-4-formulier-en-post.md) | Een film toevoegen en verwijderen |

## Structuur

```
netflix-frontend/
├── README.md
├── package.json        ← de packages en de scripts (dev, build, lint)
├── index.html          ← de enige HTML-pagina; React vult <div id="root">
├── vite.config.ts      ← instellingen van Vite, hoef je niet aan te komen
├── src/
│   ├── main.tsx        ← start React
│   ├── App.tsx         ← het hoofdcomponent: hier begint je pagina
│   ├── index.css       ← alle opmaak, kant-en-klaar
│   ├── types/          ← interfaces: de vorm van je gegevens
│   ├── api/            ← alle fetch-aanroepen naar de backend
│   └── components/     ← je components
└── docs/
```

Het skelet heeft één werkend voorbeeld door alle mappen: de **abonnementen** (`Plan`). Kijk daar steeds hoe het moet. De films bouw je zelf.

## Lokaal starten

Je hebt geen terminal nodig. Alles gaat via WebStorm.

1. Start eerst je **backend** in PyCharm met `run.py`. Die draait op `http://127.0.0.1:8000`.
2. Open in WebStorm `package.json` en klik op de groene pijl naast `"dev"`.
3. In het venster **Run** onderin staat `Local: http://localhost:5173/`. Klik op die link.
4. Sla je een bestand op, dan ververst de pagina vanzelf.
5. Stoppen doe je met het rode vierkantje in het venster **Run**.

Meer uitleg staat in de [handleiding WebStorm en Node.js](docs/webstorm/00-webstorm-en-node.md).
