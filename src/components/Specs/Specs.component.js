import React from 'react';
import Section from '../Section/Section.component';
import SpecItem from '../SpecItem/SpecItem.component';

const Specs = () => {
  return (
    <Section title='Especificaciones técnicas'>
      <SpecItem title='Acabado'>
        <ul>
          <li>Color oro</li>
        </ul>
      </SpecItem>

      <SpecItem title='Pantalla'>
        <ul>
          <li>
            <strong>Pantalla Retina</strong>
          </li>
          <li>
            Pantalla de 13.3 pulgadas (diagonal) retroiluminada por LED con
            tecnología IPS; resolución nativa de 2560 x 1600 a 227 pixeles por
            pulgada compatible con millones de colores
          </li>
          <li>
            Resoluciones ajustadas compatibles:
            <ul>
              <li>1680 x 1050</li>
              <li>1440 x 900</li>
              <li>1024 x 640</li>
            </ul>
          </li>
          <li>Relación de aspecto de 16:10</li>
          <li>Tecnología True Tone</li>
        </ul>
      </SpecItem>

      <SpecItem title='Touch ID'>
        <ul>
          <li>Sensor Touch ID integrado</li>
        </ul>
      </SpecItem>

      <SpecItem title='Procesador'>
        <ul>
          <li>
            Intel Core i5 de doble núcleo y 1.6 GHz (Turbo Boost de hasta 3.6
            GHz) con 4 MB de caché L3
          </li>
        </ul>
      </SpecItem>

      <SpecItem title='Almacenamiento'>
        <ul>
          <li>SSD basado en PCIe de 128 GB</li>
        </ul>
      </SpecItem>

      <SpecItem title='Memoria'>
        <ul>
          <li>8 GB de memoria LPDDR3 de 2133 MHz integrada</li>
        </ul>
      </SpecItem>

      <SpecItem title='Batería y energía'>
        <ul>
          <li>Hasta 12 horas de navegación web inalámbrica</li>
          <li>Hasta 13 horas de reproducción de video en la app Apple TV</li>
          <li>Hasta 30 días en modo de espera</li>
          <li>Batería de polímero de litio integrada de 49.9 Wh</li>
          <li>Adaptador de corriente USB-C de 30 W; puerto de carga USB-C</li>
        </ul>
      </SpecItem>

      <SpecItem title='Tamaño y peso'>
        <ul>
          <li>
            <b>Grosor:</b> 0.41 a 1.56 cm
          </li>
          <li>
            <b>Ancho:</b> 30.41 cm
          </li>
          <li>
            <b>Profundidad:</b> 21.24 cm
          </li>
          <li>
            <b>Peso:</b> 1.25 kg
          </li>
        </ul>
      </SpecItem>

      <SpecItem title='Gráficos'>
        <ul>
          <li>Intel UHD Graphics 617</li>
          <li>
            Admite procesadores gráficos externos (eGPU) compatibles con
            Thunderbolt 3
          </li>
        </ul>
      </SpecItem>

      <SpecItem title='Compatibilidad con video'>
        <p>
          <strong>
            Es compatible simultáneamente con la resolución nativa de la
            pantalla integrada en millones de colores y:
          </strong>
        </p>

        <ul>
          <li>Un monitor con resolución de 5120 x 2880 hasta 60 Hz</li>
          <li>
            Hasta dos monitores externos con resolución de 4096 x 2304 hasta 60
            Hz
          </li>
        </ul>

        <br />

        <p>
          <strong>Salida de video digital Thunderbolt 3</strong>
        </p>

        <ul>
          <li>Salida DisplayPort nativa a través de USB‑C</li>
          <li>
            Compatible con salidas VGA, HDMI y Thunderbolt 2 mediante
            adaptadores (se venden por separado)
          </li>
        </ul>
      </SpecItem>

      <SpecItem title='Cámara'>
        <ul>
          <li>Cámara FaceTime HD de 720p</li>
        </ul>
      </SpecItem>

      <SpecItem title='Carga y expansión'>
        <p>
          <strong>Dos puertos Thunderbolt 3 (USB-C) compatibles con:</strong>
        </p>

        <ul>
          <li>Carga</li>
          <li>DisplayPort</li>
          <li>Thunderbolt (hasta 40 Gb/s)</li>
          <li>USB-C 3.1 de segunda generación (hasta 10 Gb/s)</li>
        </ul>
      </SpecItem>

      <SpecItem title='Conexión inalámbrica'>
        <p>
          <strong>Wi-Fi</strong>
        </p>

        <ul>
          <li>Conexión inalámbrica Wi-Fi 802.11ac</li>
          <li>Compatible con IEEE 802.11a/b/g/n</li>
        </ul>

        <br />

        <p>
          <strong>Bluetooth</strong>
        </p>

        <ul>
          <li>Tecnología inalámbrica Bluetooth 4.2</li>
        </ul>
      </SpecItem>

      <SpecItem title='Audio'>
        <ul>
          <li>Bocinas estéreo</li>
          <li>Tres micrófonos</li>
          <li>Entrada de 3.5 mm para audífonos</li>
        </ul>
      </SpecItem>

      <SpecItem title='Teclado y trackpad'>
        <p>
          <strong>Teclado de tamaño completo con:</strong>
        </p>

        <ul>
          <li>
            78 (EE.UU.) teclas retroiluminadas por LED individuales, incluidas
            12 teclas de función y 4 teclas de flecha
          </li>
          <li>Sensor de luz ambiental</li>
          <li>
            Trackpad Force Touch con control preciso del cursor y sensibilidad a
            la presión. Permite clics fuertes, aceleradores, trazos sensibles a
            la presión y gestos Multi‑Touch
          </li>
        </ul>
      </SpecItem>

      <SpecItem title='Requisitos eléctricos y operativos'>
        <ul>
          <li>
            <b>Tensión eléctrica:</b> 100-240 V CA
          </li>
          <li>
            <b>Frecuencia:</b> 50 a 60 Hz
          </li>
          <li>
            <b>Temperatura operativa:</b> 10 a 35 ºC
          </li>
          <li>
            <b>Temperatura de almacenamiento:</b> –25 a 45 °C
          </li>
          <li>
            <b>Humedad relativa:</b> 0% a 90% sin condensación
          </li>
          <li>
            <b>Altitud de funcionamiento:</b> probada hasta 3,000 m
          </li>
          <li>
            <b>Altitud máxima de almacenamiento:</b> 4,500 m
          </li>
          <li>
            <b>Altitud máxima de transporte:</b> 10,500 m
          </li>
        </ul>
      </SpecItem>

      <SpecItem title='Sistema operativo'>
        <p>
          <strong>macOS</strong>
        </p>

        <p>
          Detrás de cada Mac está la potencia de macOS, su sistema operativo.
          macOS Catalina tiene todo lo que te encanta de tu Mac y mucho más,
          para que puedas hacer más cosas, y mejor.
        </p>

        <p>
          <a
            href='https://www.apple.com/la/macos/big-sur/'
            target='_blank'
            rel='noreferrer'
          >
            Más información
          </a>
        </p>
      </SpecItem>

      <SpecItem title='Accesibilidad'>
        <p>
          Las funcionalidades de accesibilidad ayudan a las personas con alguna
          discapacidad a aprovechar al máximo su nueva MacBook Air. Gracias al
          soporte integrado para visión, audición, motricidad y aprendizaje,
          crear y hacer cosas asombrosas está al alcance de todos.
        </p>

        <p>
          <a
            href='https://www.apple.com/la/accessibility/'
            target='_blank'
            rel='noreferrer'
          >
            Más información
          </a>
        </p>

        <br />

        <p>
          <strong>Funcionalidades incluidas:</strong>
        </p>

        <ul>
          <li>Control por Voz​</li>
          <li>VoiceOver</li>
          <li>Zoom</li>
          <li>Aumentar Contraste</li>
          <li>Reducir Movimiento</li>
          <li>Siri y Dictado</li>
          <li>Control por Botón</li>
          <li>Subtítulos opcionales</li>
          <li>Texto a Voz</li>
        </ul>
      </SpecItem>

      <SpecItem title='En la caja'>
        <ul>
          <li>MacBook Air</li>
          <li>Adaptador de corriente USB-C de 30 W</li>
          <li>Cable de carga USB-C (2 m)</li>
        </ul>

        <br />

        <img src='img/in-the-box.png' alt='in-the-box.png' />
      </SpecItem>
    </Section>
  );
};

export default Specs;
