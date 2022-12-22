import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";

const bogliasco = "https://imgur.com/yuEOgoA.png";
const countyClare = "https://imgur.com/7Zh9QYv.png";
const clare = "https://imgur.com/sQxtcTS.png";

export default function hero() {
  return (
    <HeroSlider
      height={"100vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 250,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      <Overlay>
        <div className="flex justify-center flex-col w-full h-full">
          <div className="mx-auto">
            <h1 className=" text-white uppercase w-full h-full text-4xl font-bold">
              GENERADOR DC-3
            </h1>
          </div>
          <div className="mx-auto px-28 lg:pt-5 lg:px-96">
            <p className="text-white text-lg">
              Explora el maravilloso mundo de la automatización de procesos.
            </p>
            <p className="text-white text-lg">
              ¡Comienza tu prueba gratuita hoy mismo!
            </p>
            <div className="mx-auto mt-5">
              <button className="mr-5 text-xs font-bold bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-blue-500 hover:to-indigo-600 shadow text-white px-4 py-2 rounded-3xl">
                Iniciar prueba
              </button>
              <button className="text-xs font-bold text-white hover:underline">
                Más información
              </button>
            </div>
          </div>
        </div>
      </Overlay>

      <Slide
        // shouldRenderMask
        label="Generador de constancias empresariales"
        background={{
          backgroundImageSrc: bogliasco,
        }}
      />

      <Slide
        // shouldRenderMask
        label="Generador de constancias DC-3"
        background={{
          backgroundImageSrc: countyClare,
        }}
      />
      <Slide
        // shouldRenderMask
        label="Planes y costos"
        background={{
          backgroundImageSrc: clare,
        }}
      />

      <MenuNav />
    </HeroSlider>
  );
}
