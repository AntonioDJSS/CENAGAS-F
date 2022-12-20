/* This example requires Tailwind CSS v3.0+ */
import { CheckIcon } from "@heroicons/react/24/outline";

const tiers = [
  {
    id: "tier-hobby",
    name: "Associate",
    href: "#",
    priceMonthly: "49.00",
    description: "Genera constancias DC-3 manualmente de forma individual.",
    features: [
      "Generador ilimitado de constancias DC-3 individuales.",
      "Conectividad a Google Drive.",
      "Gestos de constancias DC-3.",
      "Soporte tecnico personalizado.",
    ],
  },
  {
    id: "tier-team",
    name: "Professional",
    href: "#",
    priceMonthly: "79.00",
    description:
      "Genera tus constancias DC-3 masivamente de forma automatizada.",
    features: [
      "Generador ilimitado de constancias DC-3 masivas.",
      "Generador ilimitado de constancias DC-3 individuales.",
      "Conectividad a Google Drive.",
      "Gestos de constancias DC-3.",
      "Soporte tecnico personalizado.",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-indigo-400">
      <div className="relative overflow-hidden pt-32 pb-96 lg:pt-20">
        <div>
          <img
            className="absolute bottom-0 left-1/2 max-w-[2000px] -translate-x-1/2 bg-gradient-to-r from-indigo-400 to-indigo-300 opacity-20 "
            src="https://imgur.com/fwatKkY.png"
            alt=""
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-lg font-semibold leading-8 text-white">
              Nuestros Planes
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/60">
              Aprovecha el poder de tus datos y genera constancias DC-3,
              contamos con distintos planes que se adaptan a tus necesidades.
            </p>
          </div>
        </div>
      </div>
      <div className="flow-root bg-white ">
        <div className="relative -mt-80">
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-8">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10"
                >
                  <div className="p-8 sm:p-10">
                    <h3
                      className="text-lg font-semibold leading-8 tracking-tight text-indigo-400"
                      id={tier.id}
                    >
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
                      ${tier.priceMonthly}
                      <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">
                        /mo
                      </span>
                    </div>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                      {tier.description}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-2">
                    <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
                      <ul role="list" className="space-y-6">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="h-6 w-6 text-indigo-400"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-sm leading-6 text-gray-600">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <a
                          href={tier.href}
                          className="inline-block w-full rounded-lg bg-indigo-400 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-indigo-300"
                          aria-describedby={tier.id}
                        >
                          Comprar ahora
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-8 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-md lg:max-w-4xl">
            <div className="flex flex-col gap-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 lg:flex-row lg:items-center lg:gap-8">
              <div className="lg:min-w-0 lg:flex-1">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-400">
                  Premium
                </h3>
                <div className="mt-2 text-base leading-7 text-gray-600">
                  El plan ideal para personas que quieren generar constancias
                  DC-3 constantemente y sin limitaciones.{" "}
                  <span className="font-semibold text-gray-900">
                    Pago único de $799
                  </span>
                  .
                </div>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-block rounded-lg bg-indigo-50 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-indigo-400 hover:bg-indigo-100"
                >
                  Comprar licencia permanente{" "}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-8 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-md lg:max-w-4xl">
            <div className="flex flex-col gap-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 lg:flex-row lg:items-center lg:gap-8">
              <div className="lg:min-w-0 lg:flex-1">
                <div className="my-2 text-base leading-7 text-gray-600">
                  Precios en Pesos Mexicanos, incluyen IVA, tenemos disponibles,
                  diferentes métodos de pago.
                </div>
                <img src="https://imgur.com/bLbZ7ld.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
