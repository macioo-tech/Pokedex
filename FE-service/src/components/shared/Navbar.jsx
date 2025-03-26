import { UserCircleIcon, Bars4Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-white">
      <div className="grid grid-cols-2 gap-10 justify-between md-10">
        <div className="flex flex-row ...">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/pngegg.png" className="h-48" alt="Pokedex logo" />
          </a>
        </div>
        <div className="flex flex-row-reverse bg-black ...">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <UserCircleIcon strokeWidth={2} className="h-10 w-10" />
          </button>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <Bars4Icon strokeWidth={2} className="h-10 w-10" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
