<h1 align="center">🌤️ Aplicación del Clima Asistida por IA</h1>

<p align="center">
  <b>Consulta el clima actual de una o varias ciudades con una interfaz clara, amigable y fácil de usar.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Estado-Completo-22c55e?style=for-the-badge" alt="Estado">
  <img src="https://img.shields.io/badge/HTML-Estructura-e34f26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML">
  <img src="https://img.shields.io/badge/CSS-Estilos-1572b6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS">
  <img src="https://img.shields.io/badge/JavaScript-L%C3%B3gica-f7df1e?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Open--Meteo-API-0ea5e9?style=for-the-badge" alt="Open-Meteo">
</p>

---

## 📌 Descripción de la aplicación

Esta aplicación web permite al usuario consultar el **clima actual** de cualquier ciudad que ingrese. Cuando se escribe el nombre de una ciudad y se presiona el botón **“Obtener clima”**, la app realiza estos pasos:

1. Usa la **API de Geocodificación de Open-Meteo** para encontrar la ubicación de la ciudad.
2. Obtiene la **latitud y longitud** de esa ciudad.
3. Usa esas coordenadas para consultar la **API de Pronóstico del Clima de Open-Meteo**.
4. Muestra la información en pantalla en un formato claro, amigable y ordenado.

La app presenta datos como:

- 🌡️ Temperatura
- 💨 Velocidad del viento
- 💧 Humedad
- ☁️ Descripción general del clima

---

## ✨ Características principales

- 🔎 Barra de búsqueda para ingresar una ciudad o varias separadas por coma
- 🖱️ Botón para consultar el clima
- 🧾 Tarjetas con resultados organizados por ciudad
- 🌡️ Temperatura en grados Celsius
- 💨 Velocidad del viento en km/h
- 💧 Humedad relativa
- ☁️ Resumen del estado del clima
- 🌍 Soporte para consultar **múltiples ciudades** al mismo tiempo
- ⚠️ Mensajes automáticos cuando no se encuentra una ciudad o falla la consulta
- 🧪 Pruebas rápidas para validar el comportamiento de la aplicación
- 🧹 Código organizado y fácil de leer

---

## 🖼️ Capturas o demostración sugerida

Para tu entrega puedes agregar capturas como estas:

### 1. Pantalla principal
- Campo de texto para ingresar la ciudad
- Botón **Obtener clima**

### 2. Consulta exitosa
Ejemplo:
- Ciudad ingresada: **Tokio**
- Resultado mostrado: **Temperatura, viento, humedad y clima**

### 3. Consulta múltiple
Ejemplo:
- Entrada: **Tokio, Madrid, Ciudad de México**
- Resultado: varias tarjetas en pantalla

### 4. Manejo de errores
Ejemplo:
- Entrada: **CiudadInventada123**
- Resultado: mensaje de ciudad no encontrada

---

## 🚀 Cómo ejecutar la aplicación

1. Descarga o descomprime la carpeta del proyecto.
2. Abre el archivo **`index.html`** en tu navegador.
3. Escribe una ciudad, por ejemplo: **`Tokio`**.
4. Haz clic en **Obtener clima**.
5. Si deseas buscar varias ciudades, sepáralas por coma.

**Ejemplo:**

```bash
Tokio, Madrid, Ciudad de México
```

---

## 🗂️ Estructura del proyecto

```bash
app_clima_openmeteo/
│
├── index.html              # Estructura principal de la app
├── styles.css              # Estilos de la interfaz
├── app.js                  # Lógica principal y conexión con la API
├── README.md               # Documentación del proyecto
├── PRUEBAS.md              # Casos de prueba
└── RESUMEN_PROYECTO.md     # Resumen general del proyecto
```

---

## 🤖 Cómo se usó la IA durante el proyecto

La inteligencia artificial se utilizó como una herramienta de apoyo durante el desarrollo. Ayudó a:

- Organizar la lógica de la aplicación paso a paso
- Dividir el problema en funciones pequeñas y fáciles de entender
- Mejorar la estructura general del código
- Proponer validaciones y manejo de errores
- Redactar comentarios y documentación más claros

La IA también ayudó a identificar que el flujo correcto era:

**primero obtener la ubicación de la ciudad y después consultar el clima con sus coordenadas.**

Todas las sugerencias fueron revisadas, comprendidas y ajustadas antes de usarlas.

---

## 📚 Lo que aprendí y lo que fue un desafío

### ✅ Lo que aprendí

Durante este proyecto aprendí a:

- Trabajar con APIs reales
- Hacer solicitudes HTTP con JavaScript
- Responder a acciones del usuario desde la interfaz
- Mostrar resultados dinámicos en pantalla
- Validar entradas y manejar errores

### ⚡ Lo que fue un desafío

Uno de los principales desafíos fue coordinar correctamente el uso de **dos APIs distintas** en el orden correcto:

1. Buscar la ciudad
2. Obtener sus coordenadas
3. Consultar el clima con esos datos

También fue un reto manejar errores de forma clara sin afectar la experiencia del usuario.

---

## 🏆 Una cosa de la que estoy orgulloso

Estoy orgulloso de que la aplicación complete correctamente todo el flujo de trabajo:

- recibe la entrada del usuario
- consulta una API real
- procesa la información
- muestra el resultado de forma ordenada

Además, me gustó haber agregado la funcionalidad de **consultar varias ciudades** y mantener los resultados organizados en tarjetas separadas.

---

## 🔧 Una cosa que mejoraría

Si tuviera más tiempo, me gustaría mejorar:

- 🎨 El diseño visual con más estilos y animaciones
- 🖼️ Íconos dinámicos según el tipo de clima
- 🕘 Historial de búsquedas recientes
- 📅 Pronóstico de varios días como mejora futura

---

## 🧪 Casos de prueba incluidos

### Caso 1: válido
**Entrada:** `Tokio`

**Resultado esperado:**
- Se obtiene una tarjeta con datos del clima
- Se muestra un mensaje de éxito

### Caso 2: inválido
**Entrada:** campo vacío

**Resultado esperado:**
- La aplicación no consulta la API
- Se muestra el mensaje: `Escribe al menos una ciudad válida.`

### Caso 3: ciudad no encontrada
**Entrada:** `CiudadInventada123`

**Resultado esperado:**
- Se muestra una tarjeta de error para esa ciudad

### Caso 4: funcionalidad avanzada
**Entrada:** `Tokio, Madrid, Ciudad de México`

**Resultado esperado:**
- Se muestran varias tarjetas de resultados
- Si una ciudad falla, las demás siguen apareciendo

---

## 📖 Resumen rápido del proyecto

| Elemento | Descripción |
|---|---|
| Tipo de proyecto | Aplicación web del clima |
| Tecnologías | HTML, CSS, JavaScript |
| API utilizada | Open-Meteo |
| Función principal | Consultar el clima actual |
| Función avanzada | Consulta de múltiples ciudades |
| Manejo de errores | Sí |
| Documentación | README + archivos de apoyo |

---

## 🌐 Fuente de datos

La aplicación utiliza **Open-Meteo** como fuente de datos meteorológicos y deja visible la atribución correspondiente dentro de la interfaz.

---

<p align="center">
  <b>☀️ Proyecto desarrollado como práctica de integración con APIs, manejo de errores y apoyo de IA en el desarrollo de software.</b>
</p>
