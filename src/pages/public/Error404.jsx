export default function Error404() {
  return (
    <>
      <div class="h-screen">
        <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
          <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
            <div className="flex flex-shrink-0 justify-center">
              <a href="/" className="inline-flex">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-12 w-auto"
                  src="https://imgur.com/LqXNYX3.png"
                  alt=""
                />
              </a>
            </div>
            <div className="py-16">
              <div className="text-center">
                <p className="text-base font-semibold text-[#8CB873]">404</p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Page no encontrada
                </h1>
                <p className="mt-2 text-base text-gray-500">
                  Lo sentimos, no pudimos encontrar la página que estás
                  buscando.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="text-base font-medium text-[#8CB873] duration-500 hover:text-[#98c67d]"
                  >
                    Volver al inicio
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </main>
          <footer className="mx-auto w-full max-w-7xl flex-shrink-0 px-4 sm:px-6 lg:px-8">
            <nav className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                ¿Crees que se trata de un error? Comunicate con soporte
              </a>
            </nav>
          </footer>
        </div>
      </div>
    </>
  );
}
