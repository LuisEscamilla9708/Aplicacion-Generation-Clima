# Resumen del Proyecto de la Aplicación del Clima

## Qué Hace Mi Aplicación

Mi aplicación del clima permite a los usuarios consultar el clima actual de cualquier ciudad que ingresen. Cuando el usuario escribe el nombre de una ciudad y hace clic en el botón **Obtener clima**, la app utiliza la API de Geocodificación de Open-Meteo para encontrar las coordenadas de ubicación de esa ciudad. Luego, envía esas coordenadas a la API de Pronóstico del Clima de Open-Meteo para obtener los datos del clima actual. La app muestra la temperatura, la velocidad del viento, la humedad y una breve descripción de las condiciones climáticas en un formato claro y amigable.

## Características de la Aplicación

Mi aplicación del clima incluye las siguientes características:

- una barra de búsqueda para ingresar el nombre de una ciudad
- un botón para obtener información del clima
- un área de visualización que muestra:
  - temperatura en grados Celsius
  - velocidad del viento
  - humedad
  - un resumen breve como “Nublado” o “Despejado”
- soporte para visualizar el clima en múltiples ciudades
- mensaje automático cuando no se puede encontrar la ciudad o no se pueden recuperar los datos

## Capturas de Pantalla Sugeridas

- **Captura 1:** Ciudad ingresada – “Tokio”
- **Captura 2:** Visualización – “Temperatura: 24 °C | Velocidad del viento: 15 km/h | Humedad: 72 % | Clima: Despejado”
- **Captura 3:** Varias ciudades al mismo tiempo
- **Captura 4:** Mensaje de error para una ciudad inexistente

## Cómo Usé la IA

Utilicé la IA para apoyar mi proceso de codificación. Me ayudó a entender cómo organizar los pasos de mi aplicación, como obtener primero la ubicación y luego consultar los datos del clima. La IA también me ayudó a escribir funciones más simples, limpiar mi código y redactar comentarios claros. Me aseguré de leer y comprender cada sugerencia y solo utilicé el código que entendí completamente.

## Lo Que Aprendí y Lo Que Fue un Desafío

Aprendí a trabajar con APIs y a escribir código en JavaScript que responde a las acciones del usuario. Fue un reto coordinar varios pasos en el orden correcto y mostrar resultados solo cuando ambas APIs hubieran devuelto los datos. También aprendí a probar distintas partes de mi aplicación para asegurarme de que funcionara correctamente y a manejar los errores de forma adecuada.

## Una Cosa de la que Estoy Orgulloso

Estoy orgulloso de que la aplicación funcione sin problemas desde la entrada hasta la salida. Además, añadí una función que permite a los usuarios consultar el clima de más de una ciudad, manteniendo los resultados organizados de forma clara.

## Una Cosa que Mejoraría

Si tuviera más tiempo, mejoraría el diseño utilizando más CSS y quizá añadiría iconos para las distintas condiciones climáticas. También me gustaría explorar cómo almacenar búsquedas recientes para mejorar la experiencia del usuario.
