import { Post, Category } from '../types';

export const post: Post = {
  id: 'termostato-diy-home-assistant',
  title: 'ProtoTricks: Crea tu propio Termostato Inteligente con Home Assistant',
  excerpt: '¿Por qué gastar más de 100€ cuando la electrónica es simple? Descubre cómo automaticé mi calefacción reciclando hardware y usando ESPHome con Home Assistant.',
  content: `
## El problema: La "tasa" de lo inteligente

Si has mirado el mercado recientemente, sabrás que un termostato inteligente comercial puede costar fácilmente **100€ o más**. Sin embargo, si analizas lo que hay dentro de esa carcasa de plástico brillante, la electrónica es sorprendentemente simple: un sensor de temperatura, un relé y conexión WiFi.

No me convencía pagar ese precio, así que decidí crear mi propia solución DIY no solo para ahorrar dinero, sino para disfrutar del **proceso creativo** y tener control total sobre mis dispositivos y datos.

## La Solución: Reciclaje y Código Abierto

Para este proyecto, he huido de las nubes de terceros y las suscripciones. La arquitectura se basa en la reutilización de equipos antiguos y componentes muy económicos.

### 1. El Calefactor

Cualquiera vale. Los calefactores tienen una interfaz muy simple para activar la calefacción. El mío tiene dos terminales marcados como "24V" y "RT". Cuando están conectados, se enciende la calefacción. Medí la corriente que se genera cuando se conectan los dos bornes con un multímetro: 24mA. Ya sabemos las condiciones de operación de la señal a controlar.

Debido a que se van a conectar dos terminales a 24V, y el módulo de control trabaja normalmente a 3.3V o 5V, además de que la referencia de tensión es distinta, debemos desacoplar los circuitos. Para ello utilizaremos un optoacoplador. Lo explico más adelante.

### 2. El Cerebro: Home Assistant en hardware reciclado
En lugar de comprar una [Raspberry Pi](https://amzn.to/3M4sU35), he rescatado un **ordenador portátil antiguo** dedicado a ejecutar [**Home Assistant**](https://www.home-assistant.io/). Este es un sistema de automatización de código abierto muy potente y popular en la comunidad. Existen otras alternativas como OpenHAB o Domoticz, pero Home Assistant tiene una interfaz web muy intuitiva, y además de integrar con muchos dispositivos y servicios, integra ESPHome de forma nativa.

![Home Assistant Web](/posts/2026-01-23-home-assistant-thermostat-1.png)

Al usar un portátil antiguo obtengo una batería integrada que actúa como SAI (Sistema de Alimentación Ininterrumpida) casero y doy uso a un portátil que habría acabado en el cubo de la basura. Un contra es que posiblemente consuma menos una Raspberry Pi que mi portatil, pero para este proyecto es suficiente.

Si no tienes mucha experiencia con sistemas linux, te recomiendo comprar una [Raspberry Pi](https://amzn.to/3M4sU35) porque la instalación del sistema operativo de Home Assistant es [sencillísima](https://www.home-assistant.io/installation/raspberrypi) en esta plataforma.

Además, no puedo olvidarme de la aplicación móvil [**Home Assistant para Android**](https://play.google.com/store/apps/details?id=io.homeassistant.companion.android&hl=en). Esta aplicación tiene muy benas valoraciones y permite conectar con Home Assistant perfectamente desde mi móvil.

Así de bien se ve:
![Home Assistant Android](/posts/2026-01-23-home-assistant-thermostat-android.jpg)

### 3. La Seguridad: Acceso remoto con Tailscale
Uno de los mayores miedos al domotizar una casa es la seguridad. ¿Cómo controlo la calefacción desde la calle sin abrir puertos en el router y exponer mi red a hackers?

La respuesta es [**Tailscale**](https://tailscale.com/). He instalado esta herramienta en el portátil y en mis móviles. Crea una red privada virtual (VPN) que me permite conectar mis dispositivos de forma segura y encriptada, como si estuvieran todos en la misma habitación, sin configuraciones complejas de red.

### 4. El Hardware: ESP8266
Para la parte física, he utilizado dos módulos [**ESP8266**](https://amzn.to/4qEZms3), unos microcontroladores con WiFi que cuestan apenas unos euros. La configuración es la siguiente:

* **Módulo A (Sensor):** Conectado a un sensor [**DHT11**](https://amzn.to/4r4nxzI). Este se encarga de leer la temperatura y humedad de la habitación y enviarla al servidor.

* **Módulo B (Actuador):** Controla un [**optoacoplador**](https://amzn.to/4sUzBoY). Este componente es clave: aísla eléctricamente el circuito del microcontrolador del circuito de la caldera. Se conecta a los terminales del calefactor para encenderlo o apagarlo según la lógica que definamos. Yo utilicé el [integrado PC817](https://amzn.to/3LSKbfp), un foto transistor, y lo soldé directamente a una PCB de prototipado con el módulo ESP8266. Recuerda controlar la corriente de activación del diodo para no quemarlo, y que los terminales de entrada y salida tienen polaridad. Dimensioné la resistencia en serie para introducir una corriente de 20mA, más que suficiente. Un [relé](https://amzn.to/45vGIu5) habría funcionado igual, pero al ser actuación mecánica tiene menor vida útil.

Esta es mi versión del módulo actuador:
![Modulo Actuador](/posts/2026-01-23-home-assistant-thermostat-modulo-actuador.jpg)

### 5. El Software: La magia de ESPHome
Aquí es donde todo cobra sentido. Antiguamente, programar estos chips requería código C++ y entornos complejos. Hoy usamos [**ESPHome**](https://esphome.io/). 

ESPHome es un firmware diseñado para placas de desarrollo de Espressif (como el ESP32 y el ESP8266). Lo genial es su historia: funcionaba tan bien que los desarrolladores de Home Assistant (Nabu Casa) [compraron en 2021 el proyecto](https://www.home-assistant.io/blog/2021/03/18/nabu-casa-has-acquired-esphome/) y lo integraron nativamente en la plataforma. Para trabajar con ESP Home desde Home Assistant es necesario instalar el Add-on [**ESPHome Device Builder**](https://esphome.io/guides/getting_started_hassio/).

![ESPHome Device Builder](/posts/2026-01-23-home-assistant-thermostat-esphome-add-on.png)

Gracias a esto, he programado los módulos directamente desde el panel de Home Assistant. No escribes código C++, solo un archivo de configuración YAML sencillo, y Home Assistant se encarga de compilarlo y enviarlo a los microprocesadores vía WiFi (OTA). Es sencillísimo y extremadamente potente. La única precaución es programar por primera vez el módulo por USB conectándolo al ordenador donde está ejecutándose Home Assistant. A partir de este momento puedes realizar actualizaciones inalámbricas.

A continuación, describo cómo he programado cada uno de los componentes:

#### Módulo A (Sensor):
\`\`\`yaml
esphome:
  name: "dht11-sensor"
  friendly_name: DHT11 Sensor

esp8266:
  board: esp01_1m

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    # Esta clave se genera automáticamente al crear el nodo. ¡No la compartas!
    key: "CLAVE_DE_ENCRIPTACION_GENERADA_AUTOMATICAMENTE"

ota:
  - platform: esphome
    # Contraseña para actualizaciones inalámbricas. ¡Privada!
    password: "CLAVE_OTA_GENERADA_AUTOMATICAMENTE"

wifi:
  # Usamos secretos para no exponer el WiFi en el código
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Fallback hotspot: se activa si falla la conexión WiFi principal
  ap:
    ssid: "DHT11 Sensor Fallback Hotspot"
    password: "CLAVE_PARA_CONECTARSE_AL_HOTSPOT"

captive_portal:

sensor:
  - platform: dht
    pin: 2
    model: DHT11
    temperature:
      name: "DHT11 Sensor Temperature"
      # Calibración: he notado que medía 2 grados de más
      filters:
        - offset: -2.0
    humidity:
      name: "DHT11 Sensor Humidity"
    update_interval: 120s
\`\`\`

Para que entiendas qué estamos "flasheando" en el chip, aquí tienes la explicación de los bloques principales:

* esphome y esp8266: Son el DNI del dispositivo. Le damos un nombre para identificarlo en la red y le decimos al compilador qué hardware físico estamos usando (el board). Es vital elegir la placa correcta para que los pines funcionen bien.

* api: Esta es la magia. En lugar de configuraciones complejas, este bloque habilita la conexión nativa con Home Assistant. Es bidireccional, instantánea y segura gracias a la clave de encriptación.

* ota (Over-The-Air): Imprescindible. Significa que solo tendrás que conectar el ESP8266 al ordenador la primera vez. Las futuras actualizaciones de código las enviarás por WiFi desde el sofá.

* wifi y ap: Aquí definimos la conexión.

* Fíjate en el bloque ap (Access Point). Si cambias la contraseña de tu router o el WiFi falla, el dispositivo no se queda "muerto"; crea su propia red WiFi de emergencia para que puedas conectarte a él y darle las nuevas credenciales.

* sensor: Aquí definimos la lógica del componente físico.

* model: Especificamos que es un DHT11 (el azul) y no un DHT22 (el blanco, que es más preciso).

* filters: Esto es muy potente. Los sensores baratos no siempre son precisos. Con offset: -2.0 estoy diciéndole al chip: "Lee la temperatura, réstale 2 grados para corregir el error, y luego envíala a Home Assistant". Es una calibración por software sencilla y efectiva.

* update_interval: Leemos cada 2 minutos (120s). No hace falta leer la temperatura cada segundo; hacerlo solo saturaría la red y calentaría el chip innecesariamente.


#### Módulo B (Actuador):
\`\`\`yaml
esphome:
  name: thermostat
  friendly_name: Thermostat

esp8266:
  board: d1_mini # O el que estés usando (ej. nodemcuv2)

logger:

api:
  encryption:
    key: "TU_CLAVE_DE_ENCRIPTACION_AQUI"

ota:
  - platform: esphome
    password: "TU_PASSWORD_OTA_AQUI"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "Thermostat Fallback"
    password: "TU_PASSWORD_RESCATE"

captive_portal:

# ---------------------------------------------------------
# HARDWARE
# ---------------------------------------------------------
switch:
  - platform: gpio
    pin: 13 # Pin D7 en la Wemos D1 Mini
    id: opto_heater
    name: "Relé Calefacción (Hardware)"
    internal: false 
    # Si se va la luz y vuelve, que arranque APAGADO por seguridad
    restore_mode: ALWAYS_OFF

# ---------------------------------------------------------
# INTERFAZ DE USUARIO (Crean controles en Home Assistant)
# ---------------------------------------------------------
select:
  - platform: template
    name: "Modo Termostato"
    id: modo_calefaccion
    options:
      - "Off"
      - "Auto"
      - "Manual On"
    initial_option: "Off"
    optimistic: true # El estado cambia al pulsarlo sin esperar confirmación
    icon: mdi:cog
    # Cuando cambie el modo, ejecuta la lógica inmediatamente
    on_value:
      then:
        - script.execute: logica_control

number:
  - platform: template
    name: "Temperatura Objetivo"
    id: temp_objetivo
    min_value: 15
    max_value: 30
    step: 0.5
    initial_value: 21
    optimistic: true
    unit_of_measurement: "°C"
    mode: slider
    icon: mdi:thermometer-lines
    # Cuando cambies la temperatura, recalcula si debe encender/apagar
    on_value:
      then:
        - script.execute: logica_control

# ---------------------------------------------------------
# SENSOR REMOTO Y SEGURIDAD
# ---------------------------------------------------------
sensor:
  # TRUCO PRO: Importamos el sensor del OTRO módulo a través de Home Assistant
  - platform: homeassistant
    id: temperatura_remota
    # Este es el ID de la entidad en tu Home Assistant (el sensor del módulo A)
    entity_id: sensor.dht11_sensor_temperature 
    internal: true # No lo mostramos en HA (ya lo tenemos allí)
    # Cada vez que llega una temperatura nueva:
    on_value:
      then:
        - script.execute: watchdog_seguridad # Reinicia el temporizador de seguridad
        - script.execute: logica_control     # Verifica si hay que encender la caldera

# ---------------------------------------------------------
# SCRIPTS (CEREBRO DEL SISTEMA)
# ---------------------------------------------------------
script:
  # 1. WATCHDOG (Perro guardián): Seguridad vital
  # Si Home Assistant se cuelga o el WiFi falla, este script
  # apagará la calefacción pasados 30 minutos para evitar sobrecalentamiento.
  - id: watchdog_seguridad
    mode: restart # Cada vez que se llama, el contador de 30min vuelve a cero
    then:
      - delay: 30min
      - logger.log: "ALERTA CRÍTICA: Sin datos de HA en 30min. Apagando calefacción."
      - select.set:
          id: modo_calefaccion
          option: "Off"
      - switch.turn_off: opto_heater

  # 2. LÓGICA DE CONTROL (Histéresis)
  - id: logica_control
    then:
      - lambda: |-
          // Obtenemos los valores actuales
          std::string modo = id(modo_calefaccion).state;
          float actual = id(temperatura_remota).state;
          float objetivo = id(temp_objetivo).state;
          float histeresis = 0.5; // Margen para evitar encendidos rápidos constantes

          // Seguridad: Si estamos en Auto pero el sensor da error, apagar
          if (isnan(actual) && modo == "Auto") {
            ESP_LOGW("termostato", "Error: Sensor inválido en Auto. Apagando.");
            id(opto_heater).turn_off();
            return;
          }

          // --- CASO 1: MODO OFF ---
          if (modo == "Off") {
            if (id(opto_heater).state) {
               id(opto_heater).turn_off();
               ESP_LOGD("termostato", "Modo OFF: Apagando.");
            }
          }
          
          // --- CASO 2: MODO MANUAL ON (Forzar encendido) ---
          else if (modo == "Manual On") {
            if (!id(opto_heater).state) {
               id(opto_heater).turn_on();
               ESP_LOGD("termostato", "Modo MANUAL: Encendiendo.");
            }
          }

          // --- CASO 3: MODO AUTO (Termostato inteligente) ---
          else if (modo == "Auto") {
            // Hace frío: Encender (Temp Actual <= Objetivo - 0.5)
            if (actual <= (objetivo - histeresis)) {
              if (!id(opto_heater).state) {
                id(opto_heater).turn_on();
                ESP_LOGD("termostato", "Auto: Hace frío. Encendiendo.");
              }
            } 
            // Hace calor: Apagar (Temp Actual >= Objetivo + 0.5)
            else if (actual >= (objetivo + histeresis)) {
              if (id(opto_heater).state) {
                id(opto_heater).turn_off();
                ESP_LOGD("termostato", "Auto: Temperatura alcanzada. Apagando.");
              }
            }
          }

# ---------------------------------------------------------
# MANTENIMIENTO
# ---------------------------------------------------------
interval:
  - interval: 10min
    then:
      - lambda: |-
          // Cada 10 min, forzamos la lógica por si el relé se quedó "atascado"
          if (id(modo_calefaccion).state == "Manual On") {
            id(opto_heater).turn_on();
          } else {
             id(logica_control).execute();
          }
\`\`\`

Este código es diferente al del sensor. Aquí no solo leemos datos, tomamos decisiones. Lo instalamos en el módulo que está pegado a la caldera (Actuador). Vamos a desglosar las secciones clave:

1. **Interfaz de Usuario (select y number)** En lugar de crear botones en Home Assistant, los creamos directamente en el chip. Aquí estamos indicando cómo queremos que se integren los datos en Home Assistant.

* Modo Termostato: Nos permite elegir entre "Apagado", "Automático" (sigue la temperatura) o "Manual On".

* Temperatura Objetivo: Un slider para elegir los grados deseados. Al definirlos aquí, si Home Assistant se reinicia, el chip recuerda la temperatura que le pusiste.

2. **El Sensor "Fantasma"** (platform: homeassistant) Aquí ocurre la magia. Este chip no tiene sensor de temperatura. ¿De dónde saca el dato? Usa la plataforma homeassistant para "importar" el valor del sensor DHT11 que instalamos en la otra habitación.

* El flujo es: Módulo Sensor -> WiFi -> Home Assistant -> WiFi -> Módulo Actuador.

3. **El Watchdog** Esto es vital en calefacción. ¿Qué pasa si el WiFi se cae o Home Assistant se cuelga justo cuando la caldera está encendida? La caldera seguiría quemando gas indefinidamente hasta que haga 40 grados en casa. Para evitarlo, he programado un Watchdog (Perro Guardián):

* Cada vez que llega un dato de temperatura, el contador se pone a cero.

* Si pasan **30 minutos** sin recibir datos (fallo de red), el script asume lo peor y **apaga la caldera automáticamente**.

4. **La Lógica Lambda (C++)** El cerebro del sistema. Usamos una función lambda en C++ para calcular si encender o apagar. Incluye **histéresis** de 0.5ºC.

* Sin histéresis: Si pones 21ºC, la caldera se encendería a 20.99ºC y se apagaría a 21.01ºC, encendiéndose y apagándose cada 10 segundos (lo cual rompería la caldera).

* Con histéresis: Se enciende a 20.5ºC y se apaga al llegar a 21.5ºC. Ciclos más largos y saludables para tu equipo.

5. **Intervalo de Refresco** Cada 10 minutos, el sistema "revisa" que todo esté bien. Este es el parámetro keep-alive que mantiene el módulo activo y comprobando periódicamente que el modo de operación del control.

### 6. Configuraciones finales

El dashboard de Home Automation lo he creado manualmente con el siguiente fichero de configuración:

\`\`\`yaml
type: entities
title: Termostato Salón
entities:
  # --- SECCIÓN DE CONTROL (Inputs) ---
  # Desplegable para elegir Off / Auto / Manual
  - entity: select.thermostat_modo_termostato
    name: Modo de Funcionamiento
  
  # Slider o caja numérica para elegir los grados
  - entity: number.thermostat_temperatura_objetivo
    name: Temperatura Objetivo

  # --- SEPARADOR VISUAL ---
  - type: section
    label: Información en Tiempo Real

  # --- SECCIÓN DE DATOS (Outputs) ---
  # El sensor remoto (que viene del otro ESP8266)
  - entity: sensor.dht11_sensor_dht11_sensor_temperature
    name: Temp. Actual (Sensor Remoto)
    icon: mdi:thermometer
  
  # La humedad
  - entity: sensor.dht11_sensor_dht11_sensor_humidity
    name: Humedad Relativa

  # --- FEEDBACK VISUAL ---
  # Vemos si el relé está físicamente encendido o apagado
  - entity: switch.thermostat_rele_calefaccion_hardware
    name: Estado Caldera (Relé)
    # state_color: true hace que el icono se ponga amarillo cuando está ON
    state_color: true 
    secondary_info: last-updated # Opcional: ver cuándo cambió por última vez
\`\`\`

¿Qué estamos viendo aquí?
* type: entities: Es la tarjeta más sencilla y versátil. Muestra una lista de filas.

* Los Controles (select y number): Estas son las entidades que creamos en el código ESPHome anterior. Al cambiarlas aquí, Home Assistant envía la orden al chip inmediatamente.

* type: section: Un simple separador estético que ayuda a organizar visualmente Inputs (arriba) y Outputs (abajo).

* state_color: true: Este detalle es importante en la última fila. Hace que el icono del interruptor (rayo o enchufe) se ilumine en color ámbar cuando la calefacción está encendida y gris cuando está apagada. Es la forma más rápida de saber si estás gastando gas.

![Home Assistant Dashboard](/posts/2026-01-23-home-assistant-thermostat-android.jpg)

---

**¿Te animas a "cacharrear"?**
Con una inversión mínima y una tarde de configuración, tienes un sistema que rivaliza con los de gama alta. Si tienes dudas sobre el esquema de conexión o la configuración YAML, escríbeme y lo vemos.
`,
  author: 'Gabriel Faleiro',
  date: new Date('2026-01-23'),
  category: Category.PROTOTRICKS,
  imageUrl: '/posts/2026-01-23-home-assistant-thermostat-1.png',
};