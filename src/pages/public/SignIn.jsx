import { useState } from "react";
import servidorAxios from "../../config/servidorAxios";
import Alerta from "../../components/Alerta";

export default function SignIn() {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [alerta, setAlerta] = useState({});

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      [nombre, apellidos, correo, contraseña, confirmarContraseña].includes("")
    ) {
      setAlerta({ msg: "Hay campos vacios", error: true });
      return;
    }
    if (contraseña !== confirmarContraseña) {
      setAlerta({ msg: "Las contraseñas no son iguales", error: true });
      return;
    }
    /*if (correo.includes(complementoCorreo)) {
      const estadoCorreo = true;
      console.log(estadoCorreo);
    } else {
      setAlerta({
        msg: "El correo no cumple con las caracteristicas para crear una cuenta.",
        error: true,
      });
      return;
    }*/
    if (contraseña.length < 8) {
      setAlerta({
        msg: "La contraseña es muy corta, añade minimo 8 caracteres",
        error: true,
      });
      return;
    }
    if (isChecked != true) {
      setAlerta({
        msg: "Acepta los Términos y Políticas de Privacidad.",
        error: true,
      });
      return;
    }
    setAlerta({});

    // Creamos el usuario en la API
    try {
      const respuesta = await servidorAxios.post(`/users/registro`, {
        nombre,
        apellidos,
        correo,
        contraseña,
        confirmarContraseña,
      });
      console.log(respuesta);
      setAlerta({
        msg: "Creado Correctamente, revisa tú correo para confirmar la cuenta.",
        error: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const { msg } = alerta;

  return (
    <>
      <div className="relative bg-gradient-to-r from-indigo-100 to-indigo-200">
        <img
          className="absolute inset-0 h-full w-full object-cover blur-sm opacity-[0.15]"
          src="https://images.unsplash.com/photo-1614029951470-ef9eb9952be7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="fondo"
        />
        <div class="relative h-screen">
          <div className="flex min-h-full items-center justify-center sm:px-6 lg:px-8">
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-5xl">
                    {/*Contenido*/}
                    <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*Cabecera*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-xl font-semibold">
                          Términos y Políticas de privacidad.
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*Cuerpo*/}
                      <div className="relative p-6 flex-auto">
                        <div className=" block text-xs font-light text-gray-400">
                          <p className=" pb-3 text-gray-900">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam semper ante vitae dui ultrices, eu
                            ullamcorper orci facilisis. Phasellus pellentesque
                            gravida orci, sed laoreet nunc placerat id. Nulla in
                            pellentesque urna, vel commodo arcu. Donec semper
                            placerat lacus non porttitor. Donec sed nibh urna.
                            Nunc pellentesque aliquet leo eu lacinia. Vestibulum
                            imperdiet quam id iaculis auctor. Nunc vulputate
                            metus egestas, pulvinar nunc et, venenatis metus.
                            Integer aliquam pulvinar est nec pellentesque. Cras
                            nec volutpat magna.
                          </p>
                          <p className=" pb-3 text-gray-900">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam semper ante vitae dui ultrices, eu
                            ullamcorper orci facilisis. Phasellus pellentesque
                            gravida orci, sed laoreet nunc placerat id. Nulla in
                            pellentesque urna, vel commodo arcu. Donec semper
                            placerat lacus non porttitor. Donec sed nibh urna.
                            Nunc pellentesque aliquet leo eu lacinia. Vestibulum
                            imperdiet quam id iaculis auctor. Nunc vulputate
                            metus egestas, pulvinar nunc et, venenatis metus.
                            Integer aliquam pulvinar est nec pellentesque. Cras
                            nec volutpat magna.
                          </p>
                          <p className=" pb-3 text-gray-900">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam semper ante vitae dui ultrices, eu
                            ullamcorper orci facilisis. Phasellus pellentesque
                            gravida orci, sed laoreet nunc placerat id. Nulla in
                            pellentesque urna, vel commodo arcu. Donec semper
                            placerat lacus non porttitor. Donec sed nibh urna.
                            Nunc pellentesque aliquet leo eu lacinia. Vestibulum
                            imperdiet quam id iaculis auctor. Nunc vulputate
                            metus egestas, pulvinar nunc et, venenatis metus.
                            Integer aliquam pulvinar est nec pellentesque. Cras
                            nec volutpat magna.
                          </p>
                          <p className=" pb-3 text-gray-900">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam semper ante vitae dui ultrices, eu
                            ullamcorper orci facilisis. Phasellus pellentesque
                            gravida orci, sed laoreet nunc placerat id. Nulla in
                            pellentesque urna, vel commodo arcu. Donec semper
                            placerat lacus non porttitor. Donec sed nibh urna.
                            Nunc pellentesque aliquet leo eu lacinia. Vestibulum
                            imperdiet quam id iaculis auctor. Nunc vulputate
                            metus egestas, pulvinar nunc et, venenatis metus.
                            Integer aliquam pulvinar est nec pellentesque. Cras
                            nec volutpat magna.
                          </p>
                          <p className=" pb-3 text-gray-900">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam semper ante vitae dui ultrices, eu
                            ullamcorper orci facilisis. Phasellus pellentesque
                            gravida orci, sed laoreet nunc placerat id. Nulla in
                            pellentesque urna, vel commodo arcu. Donec semper
                            placerat lacus non porttitor. Donec sed nibh urna.
                            Nunc pellentesque aliquet leo eu lacinia. Vestibulum
                            imperdiet quam id iaculis auctor. Nunc vulputate
                            metus egestas, pulvinar nunc et, venenatis metus.
                            Integer aliquam pulvinar est nec pellentesque. Cras
                            nec volutpat magna.
                          </p>
                          <p className=" pb-3 text-gray-900">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam semper ante vitae dui ultrices, eu
                            ullamcorper orci facilisis. Phasellus pellentesque
                            gravida orci, sed laoreet nunc placerat id. Nulla in
                            pellentesque urna, vel commodo arcu. Donec semper
                            placerat lacus non porttitor. Donec sed nibh urna.
                            Nunc pellentesque aliquet leo eu lacinia. Vestibulum
                            imperdiet quam id iaculis auctor. Nunc vulputate
                            metus egestas, pulvinar nunc et, venenatis metus.
                            Integer aliquam pulvinar est nec pellentesque. Cras
                            nec volutpat magna.
                          </p>
                          <p className=" pb-3 text-gray-900">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam semper ante vitae dui ultrices, eu
                            ullamcorper orci facilisis. Phasellus pellentesque
                            gravida orci, sed laoreet nunc placerat id. Nulla in
                            pellentesque urna, vel commodo arcu. Donec semper
                            placerat lacus non porttitor. Donec sed nibh urna.
                            Nunc pellentesque aliquet leo eu lacinia. Vestibulum
                            imperdiet quam id iaculis auctor. Nunc vulputate
                            metus egestas, pulvinar nunc et, venenatis metus.
                            Integer aliquam pulvinar est nec pellentesque. Cras
                            nec volutpat magna.
                          </p>
                        </div>
                      </div>
                      {/*Final*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-indigo-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Salir
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
            <div className="w-full max-w-md">
              {/* Este es el comienzo de div blanco */}
              <div className="my-6 sm:mx-auto sm:w-full sm:max-w-md">
                <div className=" bg-white py-6 px-3 shadow sm:rounded-lg sm:px-10">
                  <div className="grid grid-row-3 gap-3">
                    <div>
                      {/* <img
                      className="mx-auto h-12 w-auto"
                      src="https://imgur.com/fWWekZ9.png"
                      alt="Your Company"
                    /> */}
                      <h2 className="mt-2 mb-4 text-center text-3xl font-bold tracking-tight text-gray-900">
                        ¡Crea tú cuenta para generar constancias!
                      </h2>
                      <div className="mb-4 w-full border-t border-gray-300" />
                    </div>

                    {/* Formas de logearse  */}
                    <div>
                      <a
                        href="#"
                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                      >
                        <span className="sr-only">Registrate con Google</span>
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
                        <div className=" pl-6">Registrate con Google</div>
                      </a>
                    </div>

                    <div>
                      <a
                        href="#"
                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                      >
                        <span className="sr-only">Registrate con Facebook</span>
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
                        <div className="pl-3">Registrate con Facebook</div>
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
                          O crea una cuenta
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    {" "}
                    {msg && <Alerta alerta={alerta} />}
                  </div>
                  <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nombre/s
                      </label>
                      <div className="mt-1">
                        <input
                          id="nombre"
                          name="nombre"
                          type="text"
                          autoComplete="nombre"
                          value={nombre}
                          onChange={(e) => setNombre(e.target.value)}
                          className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="apellidos"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Apellido/s
                      </label>
                      <div className="mt-1">
                        <input
                          id="apellidos"
                          name="apellidos"
                          type="text"
                          autoComplete="apellidos"
                          value={apellidos}
                          onChange={(e) => setApellidos(e.target.value)}
                          className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
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
                          value={correo}
                          onChange={(e) => setCorreo(e.target.value)}
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
                          value={contraseña}
                          onChange={(e) => setContraseña(e.target.value)}
                          className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="confirmarContraseña"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Confirmar contraseña
                      </label>
                      <div className="mt-1">
                        <input
                          id="confirmarContraseña"
                          name="confirmarContraseña"
                          type="password"
                          autoComplete="confirmarContraseña"
                          value={confirmarContraseña}
                          onChange={(e) =>
                            setConfirmarContraseña(e.target.value)
                          }
                          className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div>
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleOnChange}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div
                          htmlFor="remember-me"
                          className=" ml-2 block text-xs font-light text-gray-900"
                        >
                          Acepto los{" "}
                          <span
                            onClick={() => setShowModal(true)}
                            className="underline text-gray-900 font-medium"
                          >
                            Términos y Políticas de privacidad
                          </span>
                          .
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Crear cuenta
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
