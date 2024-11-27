import React from "react";
const productos = [
  {
    src: "adaptador.png",
    description: "Adaptador de corriente: Adaptador de corriente OUTPUT 12V 3A INPUT 110 V.",
  },
  {
    src: "fuente.png",
    description: "Fuente de alimentación conmutada multicanal: Fuente de multivoltaje de 3V, 5V, 12 V.",
  },
  {
    src: "placa.jpg",
    description: "Placa modelo NodeMCU V3 LUA CP2102 ESP-12E: Placa con programa precargado.",
  },
  {
    src: "relevador.png",
    description:
      "Relevador de estado sólido 5V: Relevador a los que se conectarán los solenoides (no incluidos). Nota: los solenoides comúnmente trabajan a 12 V y 24 V.",
  },
  {
    src: "monedero.png",
    description:
      "Monedero aceptador de monedas: Configurado para monedas de $10, $5, $2 y $1. Incluye tornillería para su colocación.",
  },
  {
    src: "dimensionesmon.png",
    description: "Dimensiones monedero: Ver imagen",
  },
  {
    src: "boton.png",
    description:
      "Botones 30 mm: Incluye 5 botones: 3 para selección de volumen, 1 para pausa/llenado y 1 para configuración de costos, volúmenes y tiempos.",
  },
  {
    src: "dimensonesbot.png",
    description: "Dimensiones de los botones: Ver imagen",
  },
  {
    src: "pantalla.png",
    description: "Pantalla fondo azul: Pantalla LCD",
  },
  {
    src: "dimensionespan.png",
    description: "Dimensiones de la pantalla: Ver imagen",
  },
  {
    src: "cables.png",
    description:
      "Cables de conexión: Incluye cables necesarios y paquete de cables dupont (Hembra-Macho) para apoyo durante el montaje.",
  },
  {
    src: "instructivo.png",
    description:
      "Instructivo: Enlace para instructivo en línea que consta de conexión, operación y consideraciones del software (Se otorga tras la compra).",
  },
];

const FichaTecnica = () => {
  return (
    <div lang="es" className="bg-gray-100 font-sans">
      {/* Cabecera */}
      <header className="bg-blue-500 text-white text-center py-6 text-3xl font-bold">
        KIT VENDING WIFI
      </header>
      <header>
        <div className="text-lime-500 text-center text-2xl font-bold animate-pulse">
          UNIDADES DISPONIBLES: 1
        </div>
      </header>

      {/* Sección destacada */}
      <div className=" bg-white border-b-2 border-gray-300 p-6 text-center">
        <div className=" "><iframe
          src="https://www.youtube.com/embed/nIlMXeRPTC0"
          title="Video de YouTube"
          className="w-full max-w-4xl h-96 mx-auto rounded-lg"
        ></iframe>
          <iframe
            src="https://www.youtube.com/embed/oXFBJmgFJ7k"
            title="Video de YouTube"
            className="w-full max-w-4xl h-96 mx-auto rounded-lg"
          ></iframe>
        </div>
        <p className="mt-4 text-xl font-bold text-gray-800">
          Precio del Kit: $3,000 MXN (No incluye IVA)
        </p>
        <div className="m-2 flex-1 text-xl mt-2 rounded-xl border border-gray-500/25 bg-gray-900 dark:bg-gray-900 p-10 w-full">
          <div className="text-[#F7E16F] font-bold">BANCO: BBVA</div>
          <div className="font-light text-white">NO. DE CUENTA: 158 916 5248</div>
          <div className="font-light text-white">CLABE: 012 180 01589165248 9</div>
          <div className="font-light text-white">RAZÓN SOCIAL: RAUL GONZALEZ</div>
        </div>
      </div>

      {/* Título principal */}
      <h1 className="text-center text-4xl font-bold my-6 text-black">Ficha Técnica #10</h1>

      {/* Características Generales */}
      <div className="bg-white p-6 mx-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-500 mb-4">
          CARACTERÍSTICAS GENERALES:
        </h2>
        <p className="text-justify text-lg text-black">
          No da cambio, es de 4 botones, tres de selección y uno de enjuague
          llenado. El quinto botón es solo para entrar al modo wifi para ver
          ganancia acumulada. Este debe ir dentro junto con la placa. Se
          describen dimensiones en imágenes.
        </p>
      </div>

      {/* Contenedor de productos */}
      <div className="flex flex-col gap-6 p-6">
        {productos.map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-white rounded-lg shadow-lg p-4"
          >
            <div className="flex-shrink-0">
              <img
                src={item.src}
                alt={item.description}
                className="w-32 h-32 rounded-lg border border-gray-300 transform transition-transform hover:scale-[4] hover:translate-x-[400px] "
              />
            </div>
            <p className="ml-4 text-black text-lg">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Notas importantes */}
      <div className="bg-white p-6 mx-4 mt-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-500 mb-4">Notas importantes:</h2>
        <ul className="list-disc pl-6 text-lg text-black">
          <li>La disponibilidad del producto se comunica a través de esta página.</li>
          <li>El costo del kit es de $3,000 MXN (No incluye IVA).</li>
          <li>Enviar pago a la cuenta.</li>
          <li>
            Enviar comprobante de pago al WhatsApp 55 23 27 68 06 o al correo
            rgnewage007@gmail.com, enviar dirección de envío. La entrega se
            confirma en máx 48 horas.
          </li>
          <li>Las instrucciones se proporcionan posterior al pago.</li>
          <li>
            El kit se entrega armado, pero algunos componentes pueden
            desconectarse durante el transporte.
          </li>
          <li>El instructivo incluye detalles de reconexión y operación.</li>
          <li>Para facturación, enviar su CSF.</li>
        </ul>
        <p className="mt-4 text-lg text-black">
          Para más información, comunicarse vía WhatsApp al 55 23 27 68 06.
        </p>
      </div>
    </div>
  );
};

export default FichaTecnica;
