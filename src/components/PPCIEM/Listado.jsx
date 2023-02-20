import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const actions = [
  {
    title: "1) Preparación",
    href: "#",
    icon: ClockIcon,
    iconForeground: "text-[#8CB873]",
    iconBackground: "bg-green-50",
  },
  {
    title: "2) Diagnóstico",
    href: "#",
    icon: CheckBadgeIcon,
    iconForeground: "text-[#8CB873]",
    iconBackground: "bg-green-50",
  },
  {
    title: "3) Valoración",
    href: "#",
    icon: UsersIcon,
    iconForeground: "text-[#8CB873]",
    iconBackground: "bg-green-50",
  },
  {
    title: "4) Cuantificación",
    href: "#",
    icon: BanknotesIcon,
    iconForeground: "text-[#8CB873]",
    iconBackground: "bg-green-50",
  },
  {
    title: "5) Metas y programación",
    href: "#",
    icon: ReceiptRefundIcon,
    iconForeground: "text-[#8CB873]",
    iconBackground: "bg-green-50",
  },
  {
    title: "6) Monitoreo",
    href: "#",
    icon: ClockIcon,
    iconForeground: "text-[#8CB873]",
    iconBackground: "bg-green-50",
  },
  {
    title: "7) Mejora continua",
    href: "#",
    icon: ClockIcon,
    iconForeground: "text-[#8CB873]",
    iconBackground: "bg-green-50",
  },
  {
    title: "8) Reporte anual",
    href: "#",
    icon: ClockIcon,
    iconForeground: "text-[#8CB873]",
    iconBackground: "bg-green-50",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Listado() {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg sm:grid sm:grid-cols-4 sm:gap-px sm:divide-y-0">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0
              ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
              : "",
            actionIdx === 1 ? "sm:rounded-tr-lg" : "",
            actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
            actionIdx === actions.length - 1
              ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
              : "",
            "relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
          )}
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                "rounded-lg inline-flex p-3 ring-4 ring-white"
              )}
            >
              <action.icon className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-medium">
              <a href={action.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </a>
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Doloribus dolores nostrum quia qui natus officia quod et dolorem.
              Sit repellendus qui ut at blanditiis et quo et molestiae.
            </p>
          </div>
          <span
            className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
}
