const stats = [
  {
    id: 1,
    name: "IKTAN Strategies",
    image: "https://imgur.com/TjEzjtm.png",
  },
  {
    id: 2,
    name: "IKTAN Technologies",
    image: "https://imgur.com/1Mr1RwT.png",
  },
  {
    id: 3,
    name: "IKTAN Protect",
    image: "https://imgur.com/eGhczhF.png",
  },
  {
    id: 3,
    name: "IKTAN Training",
    image: "https://imgur.com/TjEzjtm.png",
  },
  {
    id: 3,
    name: "IKTAN Ambiental",
    image: "https://imgur.com/TjEzjtm.png",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Servicios() {
  return (
    <div className="md:py-10 mx-auto max-w-7xl text-center">
      <p className=" mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
        Otras Soluciones
      </p>

      <dl className=" mt-5 grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white pb-6  mx-3 md:mx-0 sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="grid place-items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
                <img src={item.image} alt="" className="h-14 mb-5" />
              </div>
              <p className="truncate text-sm font-medium text-gray-500">
                {item.name}
              </p>
            </dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
