import {
  DocumentArrowDownIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/20/solid";

const people = [
  {
    folio: 567836789,
    name: "Antonio de Jesus",
    apellido: "Sanchez Suarez",
    curso: "Curso de Regulacion de Petroleo Maritimo",
    fecha: "23-11-2022",
  },
  {
    folio: 567836789,
    name: "Antonio de Jesus",
    apellido: "Sanchez Suarez",
    curso: "Curso de Regulacion de Petroleo Maritimo",
    fecha: "23-11-2022",
  },
  {
    folio: 567836789,
    name: "Antonio de Jesus",
    apellido: "Sanchez Suarez",
    curso: "Curso de Regulacion de Petroleo Maritimo",
    fecha: "23-11-2022",
  },
  {
    folio: 567836789,
    name: "Antonio de Jesus",
    apellido: "Sanchez Suarez",
    curso: "Curso de Regulacion de Petroleo Maritimo",
    fecha: "23-11-2022",
  },
  {
    folio: 567836789,
    name: "Antonio de Jesus",
    apellido: "Sanchez Suarez",
    curso: "Curso de Regulacion de Petroleo Maritimo",
    fecha: "23-11-2022",
  },
];

export default function GridList() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">
                  {person.name} {person.apellido}
                </h3>
                <span className="inline-block flex-shrink-0 rounded-md bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                  {person.fecha}
                </span>
              </div>
              <p className="mt-1 truncate text-sm text-gray-500">
                {person.curso}
              </p>
              <p className="mt-1 truncate text-sm text-gray-500">
                Folio:{" "}
                <span className="inline-block flex-shrink-0 rounded-md bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                  {person.folio}
                </span>
              </p>
            </div>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`mailto:${person.email}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
                  <DocumentArrowDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">Descargar</span>
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${person.telephone}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
                  <AdjustmentsHorizontalIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">Editar</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
