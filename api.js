const BASE_URL = 'https://api.jolpi.ca/ergast/f1';

async function getDriverStandings() {
  const res = await fetch(`${BASE_URL}/current/driverStandings.json`);
  const data = await res.json();
  return data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
}

async function getLastRaceResults() {
  const res = await fetch(`${BASE_URL}/current/last/results.json`);
  const data = await res.json();
  return data.MRData.RaceTable.Races[0];
}

async function getConstructorStandings() {
  const res = await fetch(`${BASE_URL}/current/constructorStandings.json`);
  const data = await res.json();
  return data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
}

const TEAM_COLORS = {
  'Mercedes': '#00D2BE',
  'Ferrari': '#E8002D',
  'Red Bull': '#3671C6',
  'McLaren': '#FF8000',
  'Aston Martin': '#229971',
  'Alpine': '#FF87BC',
  'Williams': '#64C4FF',
  'Haas F1 Team': '#B6BABD',
  'Kick Sauber': '#52E252',
  'RB F1 Team': '#6692FF',
};

function getTeamColor(teamName) {
  for (const [key, color] of Object.entries(TEAM_COLORS)) {
    if (teamName.includes(key)) return color;
  }
  return '#E10600';
}

const BASE_SVG = 'https://cdn.jsdelivr.net/gh/julesr0y/f1-circuits-svg@main/circuits/minimal/white-outline/';

const CIRCUIT_IMAGES = {
  'Albert Park Grand Prix Circuit':    BASE_SVG + 'melbourne-2.svg',
  'Shanghai International Circuit':    BASE_SVG + 'shanghai-1.svg',
  'Suzuka Circuit':                    BASE_SVG + 'suzuka-1.svg',
  'Miami International Autodrome':     BASE_SVG + 'miami-1.svg',
  'Circuit Gilles Villeneuve':         BASE_SVG + 'montreal-6.svg',
  'Circuit de Monaco':                 BASE_SVG + 'monaco-6.svg',
  'Circuit de Barcelona-Catalunya':    BASE_SVG + 'catalunya-6.svg',
  'Red Bull Ring':                     BASE_SVG + 'spielberg-3.svg',
  'Silverstone Circuit':               BASE_SVG + 'silverstone-1.svg',
  'Circuit de Spa-Francorchamps':      BASE_SVG + 'spa-francorchamps-3.svg',
  'Hungaroring':                       BASE_SVG + 'hungaroring-3.svg',
  'Circuit Park Zandvoort':            BASE_SVG + 'zandvoort-1.svg',
  'Autodromo Nazionale di Monza':      BASE_SVG + 'monza-7.svg',
  'Baku City Circuit':                 BASE_SVG + 'baku-1.svg',
  'Marina Bay Street Circuit':         BASE_SVG + 'marina-bay-4.svg',
  'Circuit of the Americas':           BASE_SVG + 'austin-1.svg',
  'Autódromo Hermanos Rodríguez':      BASE_SVG + 'mexico-city-3.svg',
  'Autódromo José Carlos Pace':        BASE_SVG + 'interlagos-2.svg',
  'Las Vegas Strip Street Circuit':    BASE_SVG + 'las-vegas-1.svg',
  'Losail International Circuit':      BASE_SVG + 'lusail-1.svg',
  'Yas Marina Circuit':                BASE_SVG + 'yas-marina-1.svg',
  'Jeddah Corniche Circuit':           BASE_SVG + 'jeddah-1.svg',
};

function getCircuitImage(circuitName) {
  return CIRCUIT_IMAGES[circuitName] || null;
}

async function getAllDrivers() {
  const res = await fetch(`${BASE_URL}/current/driverStandings.json`);
  const data = await res.json();
  return data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
}

async function getDriverSeasonResults(driverId) {
  const res = await fetch(`${BASE_URL}/current/drivers/${driverId}/results.json?limit=100`);
  const data = await res.json();
  return data.MRData.RaceTable.Races;
}

async function getRaceSchedule() {
  const res = await fetch(`${BASE_URL}/current.json`);
  const data = await res.json();
  return data.MRData.RaceTable.Races;
}
