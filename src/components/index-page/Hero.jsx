export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-indigo-400 to-indigo-300">
      <video
        src="https://media.geeksforgeeks.org/wp-content/uploads/20221105184949/ezgif.com-gif-maker.mp4"
        autoplay="{true}"
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      ></video>
      <main className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight text-indigo-50 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <div className="">
                <span className=" block xl:inline font-extrabold text-transparent bg-clip-text text-black">
                  Generador Masivo
                </span>{" "}
              </div>
              <div className="my-2">
                <span className=" shadow-lg  bg-gradient-to-r from-indigo-600 to-indigo-400 font-extrabold block text-indigo-50 xl:inline">
                  Constancias DC-3
                </span>
              </div>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-50 sm:text-xl md:mt-5 md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="transition duration-150 ease-in-out mt-10 sm:flex sm:justify-center lg:justify-start">
              <button className=" rounded-md">
                <a
                  href="#"
                  className=" flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-400 px-8 py-3 text-base font-medium text-white hover:bg-indigo-500 md:py-4 md:px-10 md:text-lg"
                >
                  Regístrate
                </a>
              </button>
              <button className="mt-3 rounded-md sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-400 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                >
                  Saber más
                </a>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
