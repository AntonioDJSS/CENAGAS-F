export default function Login() {
  return (
    <>
      <div className="relative bg-gradient-to-r from-indigo-200 to-indigo-400">
        <img
          className="absolute inset-0 h-full w-full object-cover blur-sm opacity-20"
          src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="fondo"
        />
        <div class="h-screen relative">
          <div className="flex min-h-full items-center justify-center sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
              {/* Este es el comienzo de div blanco */}
              <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-6 px-3 shadow sm:rounded-lg sm:px-10">
                  <div className="grid grid-row-3 gap-3">
                    <div>
                      <img
                        className="mx-auto h-12 w-auto"
                        src="https://imgur.com/fWWekZ9.png"
                        alt="Your Company"
                      />
                      <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Inicia sesión en tú cuenta
                      </h2>
                      <p className="mt-1 text-center text-sm text-gray-600">
                        o{" "}
                        <a
                          href="/registro"
                          className="font-medium text-indigo-600 hover:text-indigo-700"
                        >
                          registrate para acceder a la plataforma.
                        </a>
                      </p>
                    </div>

                    {/* Formas de logearse  */}
                    <div>
                      <a
                        href="#"
                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                      >
                        <span className="sr-only">
                          Iniciar sesión con Google
                        </span>
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#FFC107"
                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                          ></path>
                          <path
                            fill="#FF3D00"
                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                          ></path>
                          <path
                            fill="#4CAF50"
                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                          ></path>
                          <path
                            fill="#1976D2"
                            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                          ></path>
                        </svg>
                        <div className="pl-6">Acceder con Google</div>
                      </a>
                    </div>

                    <div>
                      <a
                        href="#"
                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                      >
                        <span className="sr-only">
                          Iniciar sesión con Facebook
                        </span>
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#039be5"
                            d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                          ></path>
                        </svg>
                        <div className="pl-3">Acceder con Facebook</div>
                      </a>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-500">
                          O continuar con
                        </span>
                      </div>
                    </div>
                  </div>

                  <form className="mt-4 space-y-4" action="#" method="POST">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Correo electrónico
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Contraseña
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="remember-me"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          Recuérdame
                        </label>
                      </div>

                      <div className="text-sm">
                        <a
                          href="/forgot-password"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          ¿Olvidaste tu contraseña?
                        </a>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Iniciar sesión
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* <Footer /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
