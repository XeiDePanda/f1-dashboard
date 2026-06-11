# F1 Results Dashboard

A responsive Formula 1 dashboard built with HTML, CSS, and vanilla JavaScript.
Live data is fetched from the [Jolpica F1 API](https://api.jolpi.ca/) — no frameworks, no build tools required.

## Live Demo
[View Dashboard](https://XeiDePanda.github.io/f1-dashboard)

## Features

- **Home** — Latest race summary with top 3 finishers and season stat cards
- **Driver Standings** — Championship table with team color theming and points progress bars
- **Race Results** — Complete finishing order with fastest lap highlights
- **Constructor Standings** — Team championship table with nationality and win count
- **Race Schedule** — All 24 rounds with real circuit SVG maps, completed/upcoming status, and next race highlight
- **Head-to-Head Comparator** — Select any two drivers and compare their season stats side by side

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- [Jolpica F1 API](https://api.jolpi.ca/) — free, no API key required
- [julesr0y/f1-circuits-svg](https://github.com/julesr0y/f1-circuits-svg) — circuit layouts via jsDelivr CDN
- Deployed on GitHub Pages

## Project Structure
f1-dashboard/
├── index.html          # Home page
├── standings.html      # Driver standings
├── results.html        # Race results
├── constructors.html   # Constructor standings
├── schedule.html       # Race schedule with circuit maps
├── compare.html        # Head-to-head driver comparator
├── api.js              # API functions, team colors, circuit maps
└── css/
└── style.css       # Global styles

## Running Locally

No installation needed. Clone the repo and open with Live Server in VS Code:

```bash
git clone https://github.com/XeiDePanda/f1-dashboard.git
cd f1-dashboard
```

Then right-click `index.html` and select **Open with Live Server**.

## API Reference

All data is sourced from the Jolpica F1 API:

| Endpoint | Used for |
|---|---|
| `/current/driverStandings.json` | Driver standings |
| `/current/constructorStandings.json` | Constructor standings |
| `/current/last/results.json` | Latest race results |
| `/current.json` | Full season schedule |
| `/current/drivers/{id}/results.json` | Per-driver results for comparator |