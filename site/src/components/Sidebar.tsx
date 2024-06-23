import { Link, useLocation } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import clsx from "clsx";

const other_routes = [
  {
    name: "Departamentos",
    route: "/departamentos",
  },
  {
    name: "Ciudades",
    route: "/ciudades",
  },
  {
    name: "Barrios",
    route: "/barrios",
  },
];

const another_section = [
  {
    name: "Demo",
    route: "/demo",
  },
];

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div className="w-72 bg-[#101010] h-[100dvh] relative">
      <header className="px-5 h-16 flex items-center border-b border-b-neutral-800">
        <h1 className="text-white text-xl font-bold">Delpi</h1>
      </header>

      <div className="flex flex-col space-y-3 mt-5 px-5">
        <Link
          to="/"
          className={clsx(
            "",
            pathname === "/"
              ? "font-semibold text-orange-400"
              : "text-neutral-300"
          )}
        >
          Inicio
        </Link>

        <div className="w-full h-[1px] bg-neutral-700"></div>

        <div className="flex flex-col space-y-3">
          {other_routes.map((route) => (
            <Link
              key={route.name}
              to={route.route}
              className={clsx(
                "",
                pathname === route.route
                  ? "font-semibold text-orange-400"
                  : "text-neutral-300"
              )}
            >
              {route.name}
            </Link>
          ))}
        </div>

        <div className="w-full h-[1px] bg-neutral-700"></div>

        <div className="flex flex-col space-y-3">
          {another_section.map((route) => (
            <Link
              key={route.name}
              to={route.route}
              className={clsx(
                "",
                pathname === route.route
                  ? "font-semibold text-orange-400"
                  : "text-neutral-300"
              )}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="p-5 absolute bottom-0 left-0">
        <a
          href="https://github.com/fervillalbag/delpi"
          target="_blank"
          className=""
        >
          <FaGithub className="text-3xl text-white" />
        </a>
      </div>
    </div>
  );
}
