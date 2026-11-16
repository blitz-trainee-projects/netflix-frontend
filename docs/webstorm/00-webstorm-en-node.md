<img src="../assets/blitz-logo.png" alt="Blitz" width="160">

# WebStorm en Node.js

In deze handleiding installeer je wat je nodig hebt, zet je de repo op je laptop en start je de app. Je hebt geen terminal nodig.

| Programma | Wat het is |
|---|---|
| **Node.js** | Draait JavaScript buiten de browser. Vite en `npm` hebben het nodig. |
| **npm** | De pakketbeheerder van Node.js, zoals `pip` bij Python. Komt mee met Node.js. |
| **WebStorm** | De editor voor JavaScript en TypeScript, van dezelfde maker als PyCharm. |

---

## Stap 1: Node.js installeren

1. Ga naar [nodejs.org/en/download](https://nodejs.org/en/download).
2. Kies de versie met **LTS** (Long Term Support) en download de **Windows Installer (.msi)**.
3. Start de installer en klik door met de standaardinstellingen.

> **Waarom LTS?** Die versie krijgt het langst updates en is het stabielst. Vite heeft minimaal Node.js 20.19 of 22.12 nodig. Met de nieuwste LTS zit je altijd goed.

---

## Stap 2: WebStorm installeren

1. Download WebStorm via [jetbrains.com/webstorm/download](https://www.jetbrains.com/webstorm/download/) en installeer het met de standaardinstellingen.
2. Start WebStorm. Vraagt het om een licentie, kies dan **Non-commercial use** en log in met een gratis JetBrains-account.

---

## Stap 3: De repo clonen

1. Start WebStorm. Klik op het startscherm op **Clone Repository**.
2. Kies links **GitHub** en klik op **Log In via GitHub**. Je browser opent: log in en geef toestemming.
3. Kies de repository `netflix-frontend` en klik op **Clone**.
4. Vraagt WebStorm of je het project vertrouwt, kies dan **Trust Project**.

---

## Stap 4: Node.js controleren

WebStorm vindt Node.js meestal zelf. Controleer het even:

1. Druk op `Ctrl+Alt+S` en ga naar **Languages & Frameworks** → **JavaScript Runtime**.
2. Bij **Node runtime** staat een pad naar `node.exe` met een versienummer.

Staat er niets? Herstart WebStorm. Helpt dat niet, installeer Node.js dan opnieuw.

---

## Stap 5: Packages installeren

Het project gebruikt packages, zoals React en Vite. Die staan in `package.json`, maar zijn nog niet gedownload.

1. WebStorm toont rechtsonder een melding met **Run 'npm install'**. Klik erop.
2. Zie je die melding niet? Klik met rechts op `package.json` en kies **Run 'npm install'**.
3. Wacht tot het klaar is. Er staat nu een map `node_modules` in je project. Daarin staan alle packages.

> **`node_modules` komt nooit in Git.** De map is groot en iedereen maakt hem zelf aan met `npm install`. Daarom staat hij in `.gitignore`. Hetzelfde als je `.venv` bij Python.

Doe dit opnieuw als `package.json` verandert, bijvoorbeeld na een pull van iemand anders.

---

## Stap 6: De app starten

1. Start eerst je **backend** in PyCharm met `run.py`.
2. Open `package.json` in WebStorm. Naast de regel `"dev": "vite"` staat een groene pijl. Klik erop en kies **Run 'dev'**.
3. Onderin opent het venster **Run**. Staat daar `Local: http://localhost:5173/`, dan draait de app. Klik op de link.
4. Wijzig je een bestand en sla je het op, dan ververst de pagina vanzelf.
5. Stoppen doe je met het rode vierkantje in het venster **Run**.

De volgende keer staat `dev` rechtsboven naast de groene pijl. Dan kun je hem daar starten.

De andere scripts in `package.json`:

| Script | Wat het doet |
|---|---|
| `dev` | Start de app om te ontwikkelen. Dit gebruik je bijna altijd. |
| `build` | Controleert alle TypeScript en bouwt de app voor een echte server, in de map `dist`. |
| `lint` | Zoekt fouten en slordigheden in je code. |
| `preview` | Start de gebouwde app uit `dist`. |

> **Let op.** `dev` controleert je TypeScript niet. De app kan dus draaien met een fout erin. WebStorm laat die fouten wel zien met rode strepen. Draai voor je pull request ook `build` en `lint`: die moeten zonder fouten klaar zijn.

---

## Stap 7: De DevTools

Je browser heeft ingebouwde gereedschappen om je app te bekijken. Open ze met `F12` in Chrome of Edge.

| Tabblad | Waarvoor |
|---|---|
| **Console** | Foutmeldingen en wat je zelf logt met `console.log(...)` |
| **Network** | Alle requests van je app, met de statuscode, de headers en de JSON. Hetzelfde als je in Postman ziet. |

Bronnen: [Console](https://developer.chrome.com/docs/devtools/console) en [Network](https://developer.chrome.com/docs/devtools/network) in de Chrome-docs.

---

## Git

Git werkt in WebStorm hetzelfde als in PyCharm. Gebruik de Git-handleiding uit je backend-repo. Kort:

| Wat | Hoe |
|---|---|
| Nieuwe branch | Klik bovenin op de naam van je branch en kies **New Branch** |
| Commit | Venster **Commit** links (`Alt+0`), bericht typen, **Commit** of **Commit and Push** |
| Push | `Ctrl+Shift+K` |

---

[← Introductie](../opdrachten/00-introductie.md) · [Laag 0 – Werkplek →](../opdrachten/laag-0-werkplek.md)
