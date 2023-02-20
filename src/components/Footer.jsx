const navigation = {
  main: [
    { name: "Cookies", href: "#" },
    { name: "Politicas de privacidad", href: "#" },
    { name: "Condiciones de uso", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative z-50 -mt-5">
      <div className="mx-auto max-w-7xl overflow-hidden">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}
