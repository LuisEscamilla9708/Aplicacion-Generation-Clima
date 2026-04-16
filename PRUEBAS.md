# Casos de prueba de la Aplicación del Clima

## Prueba 1: caso válido

**Entrada:** `Tokio`

**Esperado:**
- la aplicación encuentra la ciudad
- muestra temperatura, viento, humedad y descripción del clima
- el estado cambia a éxito

## Prueba 2: caso inválido

**Entrada:** cadena vacía

**Esperado:**
- la aplicación no intenta consultar la API
- muestra el mensaje: `Escribe al menos una ciudad válida.`

## Prueba 3: ciudad no encontrada

**Entrada:** `CiudadInventada123`

**Esperado:**
- aparece una tarjeta de error para esa ciudad
- el estado general indica que hubo un problema con la consulta

## Prueba 4: funcionalidad avanzada con varias ciudades

**Entrada:** `Tokio, Madrid, Ciudad de México`

**Esperado:**
- se muestran varias tarjetas
- los resultados permanecen organizados
- si una ciudad falla, las demás aún se muestran

## Pruebas rápidas incluidas en el código

El botón **Ejecutar pruebas rápidas** valida lo siguiente:

1. Que la función de sanitización separe correctamente varias ciudades.
2. Que el mapeo de códigos meteorológicos regrese textos esperados.
