# Aplicación del Clima Asistida por IA

## Qué hace la aplicación

Esta aplicación permite consultar el clima actual de cualquier ciudad que ingrese el usuario. Cuando se escribe el nombre de una ciudad y se presiona el botón **Obtener clima**, la app primero consulta la API de geocodificación de Open-Meteo para obtener la latitud y longitud. Después usa esas coordenadas para consultar el clima actual en la API de pronóstico de Open-Meteo.

La aplicación muestra la información en tarjetas claras y fáciles de leer, incluyendo temperatura, velocidad del viento, humedad y una descripción breve de las condiciones climáticas.

## Características de la aplicación

La aplicación incluye lo siguiente:

- una barra de búsqueda para ingresar una ciudad o varias separadas por coma
- un botón para obtener información del clima
- un área de resultados que muestra:
  - temperatura en grados Celsius
  - velocidad del viento en km/h
  - humedad relativa
  - una descripción breve como “Despejado” o “Nublado”
- soporte para consultar el clima en múltiples ciudades al mismo tiempo
- mensaje automático cuando no se puede encontrar una ciudad o cuando falla la recuperación de datos
- pruebas rápidas integradas para validar partes importantes del proyecto
- comentarios y funciones organizadas para facilitar la lectura del código

## Cómo ejecutar la aplicación

1. Descarga o descomprime la carpeta del proyecto.
2. Abre el archivo `index.html` en tu navegador.
3. Escribe una ciudad, por ejemplo: `Tokio`.
4. Haz clic en **Obtener clima**.
5. Si quieres consultar varias ciudades, sepáralas por coma. Ejemplo: `Tokio, Madrid, Ciudad de México`.

## Estructura del proyecto

- `index.html`: estructura visual de la aplicación
- `styles.css`: estilos de la interfaz
- `app.js`: lógica de la aplicación y pruebas rápidas
- `PRUEBAS.md`: casos de prueba usados para validar el proyecto
- `RESUMEN_PROYECTO.md`: resumen listo para entregar o adaptar

## Capturas de pantalla sugeridas

Para tu entrega puedes tomar capturas como estas:

1. Ciudad ingresada: `Tokio`
2. Resultado mostrado con temperatura, viento, humedad y clima
3. Ejemplo con varias ciudades al mismo tiempo
4. Ejemplo de mensaje de error cuando la ciudad no existe

## Cómo se usó la IA

La IA se usó como apoyo durante el desarrollo. Sirvió para organizar los pasos de la aplicación, proponer la estructura general del código, dividir el problema en funciones pequeñas y mejorar la claridad de algunos comentarios y del README.

También ayudó a detectar que el flujo correcto era primero buscar la ubicación de la ciudad y después consultar el clima con las coordenadas obtenidas. Cada sugerencia fue revisada y entendida antes de dejarla en el proyecto.

## Lo que se aprendió y lo que fue un desafío

Durante este proyecto se aprendió a trabajar con APIs, a manejar solicitudes HTTP en JavaScript y a responder a acciones del usuario desde la interfaz.

Uno de los principales desafíos fue coordinar correctamente dos pasos seguidos: primero obtener la ciudad y después obtener el clima. También fue un reto manejar los errores de forma clara para que la aplicación no fallara cuando el usuario escribiera una ciudad inválida o cuando hubiera un problema de red.

Además, se aprendió que la IA puede ayudar mucho a acelerar el trabajo, pero siempre es necesario revisar y probar el código para asegurar que realmente funciona.

## Una cosa de la que estoy orgulloso

Estoy orgulloso de que la aplicación complete todo el flujo de forma clara: recibe la entrada del usuario, consulta una API real, procesa la respuesta y muestra los resultados de manera ordenada. También fue satisfactorio agregar la función avanzada de consultar múltiples ciudades y mantener la información organizada en tarjetas separadas.

## Una cosa que mejoraría

Si tuviera más tiempo, mejoraría el diseño visual con iconos para las condiciones del clima, una interfaz todavía más atractiva y quizá una sección para guardar búsquedas recientes. También sería interesante agregar pronóstico de varios días como una mejora futura.

## Casos de prueba incluidos

### Caso 1: válido

Entrada: `Tokio`

Esperado:
- se obtiene una tarjeta con datos del clima
- se muestra un mensaje de éxito

### Caso 2: inválido

Entrada: campo vacío

Esperado:
- la aplicación no consulta la API
- se muestra el mensaje `Escribe al menos una ciudad válida.`

### Caso 3: ciudad no encontrada

Entrada: `CiudadInventada123`

Esperado:
- se muestra una tarjeta de error para esa ciudad

### Caso 4: funcionalidad avanzada

Entrada: `Tokio, Madrid, Ciudad de México`

Esperado:
- se muestran varias tarjetas de resultados
- si una ciudad falla, las demás siguen apareciendo

## Nota sobre la fuente de datos

La aplicación usa Open-Meteo como fuente de datos meteorológicos y deja visible la atribución correspondiente en la interfaz.
