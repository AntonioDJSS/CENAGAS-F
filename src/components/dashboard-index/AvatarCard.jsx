const user = {
  name: "Miguel Aldair Garcia",
  role: "aldair.garcia@iktanst.com",
  imageUrl: "https://imgur.com/Y1DublE.png",
};
const stats = [
  { label: "Constancias generadas", value: 12 },
  { label: "Constancias generadas el ultimo mes", value: 4 },
  { label: "Meses activo", value: 4 },
];

export default function AvatarCard() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <h2 className="sr-only" id="profile-overview-title">
        Profile Overview
      </h2>
      <div className="bg-white p-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:space-x-5">
            <div className="flex-shrink-0">
              <img
                className="mx-auto h-20 w-20 rounded-full"
                src={user.imageUrl}
                alt=""
              />
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="text-sm font-medium text-gray-600">
                Bienvenido de vuelta,
              </p>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                {user.name}
              </p>
              <p className="text-sm font-medium text-gray-600">{user.role}</p>
            </div>
          </div>
          <div className="mt-5 flex justify-center sm:mt-0">
            <a
              href="/dashboard/configuracion"
              className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              Configuración
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="px-6 py-5 text-center text-sm font-medium">
            <span className="text-gray-900">{stat.value}</span>{" "}
            <span className="text-gray-600">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
