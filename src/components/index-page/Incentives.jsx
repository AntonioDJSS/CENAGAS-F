const incentives = [
  {
    name: "Inicia tú prueba gratuita",
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    imageSrc: "bg-[url('https://imgur.com/VrhforX.png')]",
    link: "Iniciar prueba",
  },
  {
    name: "Contrata el plan associate",
    description:
      "Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.",
    imageSrc: "bg-[url('https://imgur.com/YWWE7VP.png')]",
    link: "Dirigete a los planes",
  },
  {
    name: "Destaca con el plan professional",
    description:
      "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
    imageSrc: "bg-[url('https://imgur.com/20XQjXe.png')]",
    link: "Quiero saber más",
  },
];

const incentives2 = [
  {
    name: "Inicia tú prueba gratuita",
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    imageSrc: "bg-[url('https://imgur.com/VrhforX.png')]",
    link: "Leer más",
  },
  {
    name: "Contrata el plan associate",
    description:
      "Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.",
    imageSrc: "bg-[url('https://imgur.com/YWWE7VP.png')]",
    link: "Free trail",
  },
];

export default function Incentives() {
  return (
    <div className="bg-white">
      <div className=" py-24 sm:px-2 sm:py-8 lg:px-4">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-10 gap-x-8 px-4 lg:max-w-none lg:grid-cols-3">
          {incentives.map((incentive) => (
            <div
              className={`object-fill h-[32rem] sm:flex sm:text-left lg:block md:py-6 md:px-7 ${incentive.imageSrc}`}
            >
              <div key={incentive.name} className="">
                {/* <div className="sm:flex-shrink-0">
                <div className="flow-root">
                  <img
                    className="mx-auto h-24 w-28"
                    src={incentive.imageSrc}
                    alt=""
                  />
                </div>
              </div> */}
                <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                  <h3 className="text-xl font-bold text-gray-900">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-md text-gray-700">
                    {incentive.description}
                  </p>
                  <p className="mt-2 text-xs font-bold text-black hover:underline">
                    {incentive.link}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-8 mx-4">
          <div className="mx-auto max-w-full flex flex-row">
            <div className="w-[38rem]">
              <div
                className={` h-[32rem] sm:flex sm:text-left lg:block md:py-6 md:px-7 bg-[url('https://imgur.com/nlQCTDS.png')]`}
              >
                <div className="mt-3 sm:mt-0 lg:mt-3 lg:ml-0">
                  <h3 className="text-xl font-bold text-gray-900">
                    Generador de constancias empresariales.
                  </h3>
                  <p className="mt-2 text-md text-gray-700">
                    "It's not actually free we just price it into the products.
                    Someone's paying for it, and it's not us."
                  </p>
                  <p className="mt-2 text-xs font-bold text-black hover:underline">
                    Leer más
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-2/3 ml-8">
              <div
                className={` h-[32rem] sm:flex sm:text-left lg:block md:py-6 md:px-7 bg-[url('https://imgur.com/XpUbeyI.png')]`}
              >
                <div className="mt-3 sm:mt-0 lg:mt-3 lg:ml-0">
                  <h3 className="text-xl font-bold text-gray-900">
                    Genera copias de seguridad con Google Drive.
                  </h3>
                  <p className="mt-2 text-md text-gray-700">
                    ¿Quieres mejorar la accesibilidad a tú información? Vincula
                    tu cuenta de Google Drive para generar respaldos
                    dinamicamente.
                  </p>
                  <p className="mt-2 text-xs font-bold text-black hover:underline">
                    Descubre como
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
