const date = new Date();
const añoActual = date.getFullYear();

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="border-t border-warm-gray-700 pt-8">
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-base text-gray-400">
              &copy; {añoActual} IKTAN TECHNOLOGIES | Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
