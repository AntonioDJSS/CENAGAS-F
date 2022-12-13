const botonConstancia = [
  {
    titulo: "Generador de Constancias Individuales",
    descripcion:
      "Crea constancias empresariales manualmente, dale un impulso a tu negocio y potencia tu profesionalismo.",
    boton: "Crear una constancia",
    imagen: "https://imgur.com/wX74YBX.png",
    url: "/dashboard/generar-constancia",
  },
  // {
  //   titulo: "Generador de Constancias Masivamente",
  //   descripcion:
  //     "Crea constancias empresariales masivamente, si cuentas con archivos de excel con los datos de tus usuarios listos, no dudes en usar esta alternativa.",
  //   boton: "Crear constancias",
  //   imagen: "https://imgur.com/2UbLbxJ.png",
  //   url: "/dashboard/generar-constancias",
  // },
];

export default function Overlay() {
  return (
    <div className="bg-white">
      {botonConstancia.map((data) => (
        <div className="mb-5 mx-auto max-w-2xl px-6 md:px-0 lg:max-w-7xl">
          <div className="relative overflow-hidden rounded-lg lg:h-96">
            <div className="absolute inset-0">
              <img
                src={data.imagen}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div
              aria-hidden="true"
              className="relative h-96 w-full lg:hidden"
            />
            <div
              aria-hidden="true"
              className="relative h-32 w-full lg:hidden"
            />
            <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:flex-col lg:items-start lg:rounded-tl-lg lg:rounded-br-none">
              <div>
                <h2 className="text-xl font-bold text-white">{data.titulo}</h2>
                <p className="mt-1 text-sm text-gray-300">{data.descripcion}</p>
              </div>
              <a
                href={data.url}
                className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 py-3 px-4 text-base font-medium text-white hover:bg-opacity-10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full"
              >
                {data.boton}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
