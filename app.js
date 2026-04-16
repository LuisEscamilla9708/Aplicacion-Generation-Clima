const cityInput = document.getElementById('cityInput');
const fetchBtn = document.getElementById('fetchBtn');
const testBtn = document.getElementById('testBtn');
const statusMessage = document.getElementById('statusMessage');
const results = document.getElementById('results');

const WEATHER_CODE_MAP = {
  0: 'Despejado',
  1: 'Mayormente despejado',
  2: 'Parcialmente nublado',
  3: 'Nublado',
  45: 'Niebla',
  48: 'Niebla con escarcha',
  51: 'Llovizna ligera',
  53: 'Llovizna moderada',
  55: 'Llovizna intensa',
  56: 'Llovizna helada ligera',
  57: 'Llovizna helada intensa',
  61: 'Lluvia ligera',
  63: 'Lluvia moderada',
  65: 'Lluvia intensa',
  66: 'Lluvia helada ligera',
  67: 'Lluvia helada intensa',
  71: 'Nieve ligera',
  73: 'Nieve moderada',
  75: 'Nieve intensa',
  77: 'Granos de nieve',
  80: 'Chubascos ligeros',
  81: 'Chubascos moderados',
  82: 'Chubascos violentos',
  85: 'Chubascos de nieve ligeros',
  86: 'Chubascos de nieve intensos',
  95: 'Tormenta',
  96: 'Tormenta con granizo ligero',
  99: 'Tormenta con granizo fuerte'
};

/**
 * Muestra un mensaje de estado visible para el usuario.
 * @param {string} message
 * @param {'info'|'success'|'warning'|'error'} [type='info']
 */
function setStatus(message, type = 'info') {
  statusMessage.textContent = message;
  statusMessage.className = `status ${type}`;
}

/**
 * Convierte una cadena de entrada en una lista limpia de ciudades.
 * @param {string} rawValue
 * @returns {string[]}
 */
function sanitizeCityList(rawValue) {
  return rawValue
    .split(',')
    .map((city) => city.trim())
    .filter(Boolean);
}

/**
 * Convierte un código meteorológico de Open-Meteo a texto legible.
 * @param {number} code
 * @returns {string}
 */
function weatherCodeToText(code) {
  return WEATHER_CODE_MAP[code] || 'Condición no disponible';
}

/**
 * Realiza una solicitud fetch y valida el estado de la respuesta.
 * @param {string} url
 * @returns {Promise<any>}
 */
async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Solicitud fallida con estado ${response.status}`);
  }

  return response.json();
}

/**
 * Busca una ciudad y devuelve sus coordenadas.
 * @param {string} city
 * @returns {Promise<{query:string,name:string,country:string,latitude:number,longitude:number,timezone:string}>}
 */
async function geocodeCity(city) {
  const url = new URL('https://geocoding-api.open-meteo.com/v1/search');
  url.searchParams.set('name', city);
  url.searchParams.set('count', '1');
  url.searchParams.set('language', 'es');
  url.searchParams.set('format', 'json');

  const data = await fetchJson(url.toString());

  if (!data.results || data.results.length === 0) {
    throw new Error(`No se encontró la ciudad: ${city}`);
  }

  const place = data.results[0];

  return {
    query: city,
    name: place.name,
    country: place.country || 'País no disponible',
    latitude: place.latitude,
    longitude: place.longitude,
    timezone: place.timezone || 'auto'
  };
}

/**
 * Consulta el clima actual a partir de una ubicación ya resuelta.
 * @param {{name:string,country:string,latitude:number,longitude:number,timezone:string}} place
 * @returns {Promise<any>}
 */
async function fetchCurrentWeather(place) {
  const url = new URL('https://api.open-meteo.com/v1/forecast');
  url.searchParams.set('latitude', String(place.latitude));
  url.searchParams.set('longitude', String(place.longitude));
  url.searchParams.set('current', 'temperature_2m,wind_speed_10m,weather_code,relative_humidity_2m');
  url.searchParams.set('temperature_unit', 'celsius');
  url.searchParams.set('wind_speed_unit', 'kmh');
  url.searchParams.set('timezone', 'auto');

  const data = await fetchJson(url.toString());

  if (!data.current) {
    throw new Error(`No se recibieron datos meteorológicos para ${place.name}`);
  }

  return {
    ...place,
    current: data.current,
    currentUnits: data.current_units || {}
  };
}

/**
 * Orquesta el flujo completo para una ciudad: geocodificación + clima.
 * @param {string} city
 * @returns {Promise<any>}
 */
async function getWeatherForCity(city) {
  const place = await geocodeCity(city);
  return fetchCurrentWeather(place);
}

/**
 * Crea una tarjeta visual con la información meteorológica.
 * @param {any} item
 * @returns {HTMLElement}
 */
function createWeatherCard(item) {
  const weatherText = weatherCodeToText(item.current.weather_code);
  const card = document.createElement('article');
  card.className = 'weather-card';
  card.innerHTML = `
    <div class="card-top">
      <div>
        <h3>${item.name}</h3>
        <p class="meta">${item.country}</p>
      </div>
      <span class="badge">${weatherText}</span>
    </div>
    <ul class="metrics">
      <li>
        <span class="metric-label">Temperatura</span>
        <span class="metric-value">${item.current.temperature_2m} ${item.currentUnits.temperature_2m || '°C'}</span>
      </li>
      <li>
        <span class="metric-label">Velocidad del viento</span>
        <span class="metric-value">${item.current.wind_speed_10m} ${item.currentUnits.wind_speed_10m || 'km/h'}</span>
      </li>
      <li>
        <span class="metric-label">Humedad</span>
        <span class="metric-value">${item.current.relative_humidity_2m} ${item.currentUnits.relative_humidity_2m || '%'}</span>
      </li>
      <li>
        <span class="metric-label">Coordenadas</span>
        <span class="metric-value">${item.latitude.toFixed(2)}, ${item.longitude.toFixed(2)}</span>
      </li>
    </ul>
  `;
  return card;
}

/**
 * Crea una tarjeta visual para errores por ciudad.
 * @param {string} city
 * @param {string} errorMessage
 * @returns {HTMLElement}
 */
function createErrorCard(city, errorMessage) {
  const card = document.createElement('article');
  card.className = 'error-card';
  card.innerHTML = `
    <h3>${city}</h3>
    <p>${errorMessage}</p>
  `;
  return card;
}

/**
 * Limpia resultados previos.
 */
function clearResults() {
  results.innerHTML = '';
}

/**
 * Maneja el clic principal del usuario.
 */
async function handleFetchWeather() {
  const rawValue = cityInput.value.trim();
  const cities = sanitizeCityList(rawValue);

  clearResults();

  if (cities.length === 0) {
    setStatus('Escribe al menos una ciudad válida.', 'error');
    cityInput.focus();
    return;
  }

  if (cities.length > 5) {
    setStatus('Ingresa hasta 5 ciudades por consulta para mantener los resultados claros.', 'warning');
    return;
  }

  fetchBtn.disabled = true;
  setStatus('Consultando ubicación y clima actual...', 'info');

  try {
    const settled = await Promise.allSettled(cities.map(getWeatherForCity));
    let successCount = 0;

    settled.forEach((result, index) => {
      const city = cities[index];

      if (result.status === 'fulfilled') {
        successCount += 1;
        results.appendChild(createWeatherCard(result.value));
      } else {
        results.appendChild(createErrorCard(city, result.reason.message));
      }
    });

    if (successCount === settled.length) {
      setStatus('Consulta completada correctamente.', 'success');
    } else if (successCount > 0) {
      setStatus('Se obtuvieron algunos resultados, pero una o más ciudades tuvieron errores.', 'warning');
    } else {
      setStatus('No fue posible obtener datos del clima. Revisa los nombres de ciudad e inténtalo de nuevo.', 'error');
    }
  } catch (error) {
    setStatus(error.message || 'Ocurrió un error inesperado.', 'error');
  } finally {
    fetchBtn.disabled = false;
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

/**
 * Ejecuta pruebas rápidas para demostrar que el proyecto fue validado.
 */
function runQuickTests() {
  const testResults = [];

  try {
    const cities = sanitizeCityList('Tokio,  Madrid , , Ciudad de México ');
    assert(cities.length === 3, 'La sanitización debe devolver 3 ciudades válidas.');
    assert(cities[0] === 'Tokio', 'La primera ciudad debe ser Tokio.');
    testResults.push('Prueba 1 aprobada: sanitización de múltiples ciudades.');
  } catch (error) {
    testResults.push(`Prueba 1 falló: ${error.message}`);
  }

  try {
    assert(weatherCodeToText(0) === 'Despejado', 'El código 0 debe mapearse a Despejado.');
    assert(weatherCodeToText(95) === 'Tormenta', 'El código 95 debe mapearse a Tormenta.');
    assert(weatherCodeToText(999) === 'Condición no disponible', 'Los códigos desconocidos deben devolver texto por defecto.');
    testResults.push('Prueba 2 aprobada: mapeo de códigos meteorológicos.');
  } catch (error) {
    testResults.push(`Prueba 2 falló: ${error.message}`);
  }

  const failed = testResults.some((line) => line.includes('falló'));
  setStatus(testResults.join(' '), failed ? 'warning' : 'success');
}

fetchBtn.addEventListener('click', handleFetchWeather);
testBtn.addEventListener('click', runQuickTests);
cityInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleFetchWeather();
  }
});
