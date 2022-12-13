import { Alert } from "@material-tailwind/react";

export default function Alerta({ alerta }) {
  return (
    <Alert
      className={`${
        alerta.error ? "from-red-500 to-red-500" : "from-blue-400 to-blue-400"
      } bg-gradient-to-br mb-4`}
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      }
    >
      <div className="pl-7">{alerta.msg}</div>
    </Alert>
  );
}
