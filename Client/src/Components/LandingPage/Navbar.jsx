import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-[80px]">
          <div className="flex items-center">
            <img
              src={logo}
              alt="wattify-logo"
              height={25}
              width={25}
              className="mr-1"
            />
            <span className="text-white text-2xl font-bold font-urbanist">
              Wattify
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-9">
              <a
                href="#"
                className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium font-urbanist"
              >
                Documentation
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium font-urbanist"
              >
                Status
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium font-urbanist"
              >
                About
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-300 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute right-0 w-full bg-gray-800 bg-opacity-90">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="text-white hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium font-urbanist"
            >
              Documentation
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium font-urbanist"
            >
              Status
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium font-urbanist"
            >
              About
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
