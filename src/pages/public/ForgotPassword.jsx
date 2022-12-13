import { Link } from "react-router-dom";
import { useState } from "react";

import { LockClosedIcon } from "@heroicons/react/20/solid";

import Footer from "../../components/Footer";
import Alerta from "../../components/Alerta";
import servidorAxios from "../../config/servidorAxios";

export default function ForgotPassword() {
  const [correo, setCorreo] = useState("");
  const [alerta, setAlerta] = useState("");

  const complementoCorreo = ["@iktanst.com"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([correo].includes("")) {
      setAlerta({ msg: "Hay campos vacios", error: true });
      return;
    }
    if (correo.includes(complementoCorreo)) {
      const estadoCorreo = true;
      console.log(estadoCorreo);
    } else {
      setAlerta({
        msg: "El correo no cumple con las caracteristicas para continuar con la acción.",
        error: true,
      });
      return;
    }
    try {
      const respuesta = await servidorAxios.post(`/users/olvidePassword`, {
        correo,
      });
      if (respuesta.data.status === "successful") {
        setAlerta({
          msg: "Las instrucciones se han enviado a tu correo",
          error: false,
        });
        setCorreo("");
      }
    } catch (err) {
      if (err.response.data.status === "fail")
        setAlerta({
          msg: err.response.data.message,
          error: true,
        });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <div class="h-screen">
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://imgur.com/fWWekZ9.png"
                alt="Your Company"
              />
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Recupera tú contraseña y obten acceso.
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-700"
                >
                  Las instrucciones se enviaran a tu correo electronico.
                </a>
              </p>
            </div>

            <div className="pt-8">{msg && <Alerta alerta={alerta} />}</div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Ingresa tú correo electronico
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm"
                    placeholder="Ingresa tú correo electronico"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-blue-700 group-hover:text-blue-800"
                      aria-hidden="true"
                    />
                  </span>
                  Recuperar contraseña
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center"></div>
                <div className="text-sm">
                  <a
                    href="registro"
                    className="font-medium text-gray-600 hover:text-gray-700"
                  >
                    Crear una cuenta
                  </a>
                </div>
              </div>
            </form>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
