import { useState } from "react";
import servidorAxios from "../../config/servidorAxios";
import Alerta from "../../components/Alerta";

export default function SignIn() {
  const [nombre, setNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");

  const [alerta, setAlerta] = useState({});

  const complementoCorreo = ["@iktanst.com"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      [
        nombre,
        apellidoPaterno,
        apellidoPaterno,
        correo,
        contraseña,
        confirmarContraseña,
      ].includes("")
    ) {
      setAlerta({ msg: "Hay campos vacios", error: true });
      return;
    }
    if (contraseña !== confirmarContraseña) {
      setAlerta({ msg: "Las contraseñas no son iguales", error: true });
      return;
    }
    if (correo.includes(complementoCorreo)) {
      const estadoCorreo = true;
      console.log(estadoCorreo);
    } else {
      setAlerta({
        msg: "El correo no cumple con las caracteristicas para crear una cuenta.",
        error: true,
      });
      return;
    }
    if (contraseña.length < 8) {
      setAlerta({
        msg: "La contraseña es muy corta, añade minimo 8 caracteres",
        error: true,
      });
      return;
    }

    setAlerta({});

    // Creamos el usuario en la API
    try {
      const respuesta = await servidorAxios.post(`/users/registro`, {
        nombre,
        apellidoPaterno,
        apellidoMaterno,
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
      <div className="h-screen">
        <div className=" flex min-h-full">
          <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <img
                  className="h-12 w-auto"
                  src="https://imgur.com/AyOVSLC.png"
                  alt="Your Company"
                />
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                  ¡Únete hoy mismo!
                </h2>
                <p className="mt-2 text-sm text-gray-600">Es rápido y fácil</p>
              </div>

              <div className="mt-6">
                {msg && <Alerta alerta={alerta} />}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inputs */}
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nombre
                    </label>
                    <div className="mt-1">
                      <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        id="nombre"
                        name="nombre"
                        type="text"
                        autoComplete="nombre"
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="aPaterno"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Apellido Paterno
                    </label>
                    <div className="mt-1">
                      <input
                        value={apellidoPaterno}
                        onChange={(e) => setApellidoPaterno(e.target.value)}
                        id="aPaterno"
                        name="aPaterno"
                        type="text"
                        autoComplete="aPaterno"
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="aMaterno"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Apellido Materno
                    </label>
                    <div className="mt-1">
                      <input
                        value={apellidoMaterno}
                        onChange={(e) => setApellidoMaterno(e.target.value)}
                        id="aMaterno"
                        name="aMaterno"
                        type="text"
                        autoComplete="aMaterno"
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Correo Electronico
                    </label>
                    <div className="mt-1">
                      <input
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="contraseña"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Contraseña
                    </label>
                    <div className="mt-1">
                      <input
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        id="contraseña"
                        name="contraseña"
                        type="password"
                        autoComplete="contraseña"
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="confirmarContraseña"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirmar Contraseña
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={(e) => setConfirmarContraseña(e.target.value)}
                        value={confirmarContraseña}
                        id="confirmarContraseña"
                        name="confirmarContraseña"
                        type="password"
                        autoComplete="confirmarContraseña"
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  {/* Finalizan inputs */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <a
                        href="/"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        ¿Ya tienes una cuenta? Inicia sesión
                      </a>
                    </div>
                  </div>

                  <div>
                    <input
                      type="submit"
                      value="Crear una cuenta"
                      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="relative hidden w-0 flex-1 lg:block">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
