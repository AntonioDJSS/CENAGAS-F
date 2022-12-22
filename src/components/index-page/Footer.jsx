const date = new Date();
const añoActual = date.getFullYear();

const navigation = {
  main: [
    { name: "Free Trail", href: "#" },
    { name: "Enterprise", href: "#" },
    { name: "Associate", href: "#" },
    { name: "Professional", href: "#" },
    { name: "Media enquires", href: "#" },
    { name: "Ayuda y asistencia", href: "#" },
  ],
};

export default function FooterLanding() {
  return (
    <footer className="bg-[#f1f1f1]">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>

        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {añoActual} Alfred | Generador de constancias DC-3 y
          empresariales.
        </p>
      </div>
    </footer>
  );
}
