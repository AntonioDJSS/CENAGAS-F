import { useId } from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

const features = [
  {
    image: "https://imgur.com/0gQvt8W.png",
    color: "bg-[#bf40a2]",
    text: "text-[#bf40a2]",
    font: "Dado el rápido crecimiento de Slack, el uso de Stripe nos ayuda a escalar pagos fácilmente, ya que permite tanto recibir pagos de usuarios de todo el mundo como habilitar pagos ACH para clientes corporativos.",
    boton: "Más información sobre nuestros usuarios",
    icon: function ReportingIcon() {
      let id = useId();
      return (
        <>
          <defs>
            <linearGradient
              id={id}
              x1="11.5"
              y1={18}
              x2={36}
              y2="15.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".194" stopColor="#fff" />
              <stop offset={1} stopColor="#6692F1" />
            </linearGradient>
          </defs>
          <path
            d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
            stroke={`url(#${id})`}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      );
    },
  },
  {
    image: "https://imgur.com/0gQvt8W.png",
    color: "bg-[#611f69]",
    text: "text-[#611f69]",
    font: "Dado el rápido crecimiento de Slack, el uso de Stripe nos ayuda a escalar pagos fácilmente, ya que permite tanto recibir pagos de usuarios de todo el mundo como habilitar pagos ACH para clientes corporativos.",
    icon: function InventoryIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            opacity=".3"
            d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
        </>
      );
    },
  },
  {
    image: "https://imgur.com/0gQvt8W.png",
    color: "bg-[#ff8284]",
    text: "text-[#ff8284]",
    font: "Dado el rápido crecimiento de Slack, el uso de Stripe nos ayuda a escalar pagos fácilmente, ya que permite tanto recibir pagos de usuarios de todo el mundo como habilitar pagos ACH para clientes corporativos.",
    icon: function ContactsIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
            fill="#fff"
          />
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </>
      );
    },
  },
];

function Feature({ feature, isActive, className, ...props }) {
  return (
   <div className="flex">
     <div
      className={clsx(className, !isActive && "basis-1/3 opacity-75 hover:opacity-100")}
      {...props}
    >
      <div
        className={clsx(
          "w-9 rounded-lg",
          isActive ? "bg-[#e0a300] " : "bg-slate-500"
        )}
      >
        <div aria-hidden="true" className=" h-9 w-9" fill="none">
          {/* <feature.icon /> */}
        </div>
      </div>
      <div
        className={clsx(
          "mt-6 text-sm font-medium ",
          isActive ? "text-[#e0a300]" : "text-slate-600"
        )}
      >
        {feature.name}
      </div>
     
    </div>
   </div>
  );
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <img
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-7 lg:block">
      {({ selectedIndex }) => (
        <>
          <div className="flex">
            {features.map((feature, featureIndex) => (
              <Tab.Panel key={feature.name} className="py-5 w-full">
                <div
                  className={`mx-auto max-w-6xl overflow-hidden rounded-xl ${feature.color} shadow-lg shadow-black/10`}
                >
                  <div className="flex">
                    <div className="basis-1/2">
                      <p className="text-white text-[18px] mt-14 mx-12 mb-7">{feature.font}</p>
                      <button className="mx-10 mb-14 bg-white button duration-500 px-4 py-1 rounded-full hover:bg-white hover:opacity-60 hover:duration-500">
                        <span className={`${feature.text} text-[15px]`}>
                          {feature.boton}
                        </span>
                      </button>
                    </div>
                    <div className="basis-1/2">
                      <h1></h1>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          {features.map((feature, featureIndex) => (
            <Feature
              key={feature.name}
              feature={{
                ...feature,
                name: (
                  <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                    <span className="absolute inset-0 " />
                    {feature.name}
                  </Tab>
                ),
              }}
              isActive={featureIndex === selectedIndex}
              className="relative"
            />
          ))}
        </>
      )}
    </Tab.Group>
  );
}

export function Carousel() {
  return (
    <section>
      <div className="w-full bg-white">
        <div className="py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex">
              <a className="group underline-text-animation-a basis-7/12 font-medium text-[38px] text-[#0A2540] leading-[2.75rem] my-3">
                <span className="underline-text-animation-span-to-r font-semibold">
                  Stripe es la empresa líder según el informe The Forrester
                  Wave™ de proveedores de servicios de pago para comerciantes
                  del 2º trimestre de 2022
                </span>
              </a>
            </div>
            <div className="flex">
              <div className="mt-5 basis-2/4 text-[18px] mr-10 text-[#425266]">
                <div>
                  Stripe fue reconocida como la «mejor opción para las equipos
                  de pago basados en la tecnología...» y recibió la puntuación
                  más alta en la categoría Estrategia.
                </div>
                <div>
                  <button className="mt-7 bg-[#635BFF] button duration-500 px-4 py-1 rounded-full hover:bg-black hover:duration-500">
                    <span className="text-white text-[15px]">
                      Leer el informe
                    </span>
                  </button>
                </div>
              </div>
              <div className="mt-5 basis-1/4 text-[15px] ml-[70px] text-[#425466]">
                <div className="text-[24px] text-[#635BFF] font-semibold">
                  <span className="text-[#635BFF] pr-4 font-extralight">|</span>
                  5 / 5
                </div>
                Puntuación en la categoría Estrategia
              </div>
              <div className="mt-5 basis-1/4 text-[15px] ml-[70px] text-[#425466]">
                <div className="text-[24px] text-[#635BFF] font-semibold">
                  <span className="text-[#635BFF] pr-4 font-extralight">|</span>
                  16
                </div>
                Criterios con la puntuación más alta posible
              </div>
            </div>
            <FeaturesMobile />
            <FeaturesDesktop />
          </div>
        </div>
      </div>
    </section>
  );
}
