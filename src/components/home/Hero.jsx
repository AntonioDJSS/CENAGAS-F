import React from "react";

import "../../css/gradient.css";

import Header from "../Header";
import GradientAnimation from "./Gradient";

export default function Hero() {
  return (
    <>
      <Header />
      <GradientAnimation />
      <div className="relative h-screen overflow-hidden">
        <div className="mx-auto absolute flex h-full w-full items-center justify-center z-40">
          <div className="w-full">
            <div className="flex mx-auto max-w-6xl">
              <div className="basis-1/2">
                <a className="group underline-text-animation-a text-[94px] text-[#2c2c2c] leading-[95px] opacity-[0.95] tracking-tight font-bold">
                  <span className="underline-text-animation-span-to-r">
                    Infraestructura en gestión de capacitaciones
                  </span>
                </a>
                <h2 className="text-[#425466] text-[18px] py-12 mr-16">
                  Millones de empresas de todos los tamaños, desde startups
                  hasta grandes corporaciones, usan el software y las API de
                  Stripe para aceptar pagos, hacer transferencias y gestionar
                  sus negocios en Internet.
                </h2>
                <div className="flex">
                  <button className="bg-black button duration-500 px-4 py-1 rounded-full hover:bg-slate-600 hover:duration-500">
                    <span className="text-white text-[15px]">
                      Iniciar prueba
                    </span>
                  </button>
                  <button className="ml-4 button duration-500 px-4 py-1 rounded-full hover:duration-500">
                    <span className="text-black text-[15px]">
                      Contactar con ventas
                    </span>
                  </button>
                </div>
              </div>
              <div className="basis-1/2 ml-10">
                <img
                  className="absolute -mt-10 h-[650px]"
                  src="https://imgur.com/WJZxFke.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full">
          <svg
            className="absolute transform text-white mt-64"
            fill="currentColor"
            viewBox="0 0 100 70"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="100,0 100,0 100,100 -50,30" />
          </svg>
        </div>
      </div>
    </>
  );
}
