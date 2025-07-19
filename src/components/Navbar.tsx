"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { ContactPopup } from "@/components/ContactPopup";
import { useContactPopup } from "@/hooks/useContactPopup";

export const Navbar = () => {
  const { isOpen, title, openPopup, closePopup } = useContactPopup();
  const navigation = [
    { name: "About", href: "/" },
    { name: "Speaking", href: "/speaking" },
    { name: "AI Strategy", href: "/ai-strategy" },
    { name: "Architecture", href: "/architecture" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-3">
            <span className="cursive-font text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-transparent bg-gradient-to-r from-[#d97706] to-[#92400e] bg-clip-text hover:scale-105 transition-transform duration-300">
              Shrinivas Kulkarni
            </span>
          </span>
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
            <ThemeChanger />
            <div className="hidden mr-3 lg:flex nav__item">
              <button 
                onClick={() => openPopup("Let's Connect")}
                className="px-6 py-2 text-white bg-gradient-to-r from-[#d97706] to-[#92400e] rounded-md md:ml-5 hover:from-[#f59e0b] hover:to-[#d97706] transition-all duration-300">
                Let's Connect
              </button>
            </div>
        </div>
                
        <Disclosure>
          {({ open }) => (
            <div>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-[#d97706] focus:text-white focus:bg-[#d97706] focus:outline-none dark:text-gray-300 dark:focus:bg-[#d97706]">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <div className="w-full space-y-2">
                    {navigation.map((item, index) => (
                      <Link key={index} href={item.href} className="block w-full px-4 py-3 text-base text-gray-500 rounded-md dark:text-gray-300 hover:text-[#d97706] hover:bg-gray-50 dark:hover:bg-gray-800 focus:text-white focus:bg-[#d97706] dark:focus:bg-[#d97706] focus:outline-none transition-colors duration-300">
                          {item.name}
                      </Link>
                    ))}
                    <button 
                      onClick={() => openPopup("Let's Connect")}
                      className="w-full px-6 py-3 mt-4 text-base font-medium text-center text-white bg-gradient-to-r from-[#d97706] to-[#92400e] rounded-md hover:from-[#f59e0b] hover:to-[#d97706] transition-all duration-300">         
                        Let's Connect
                    </button>
                  </div>
                </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        
        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={menu.href} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-[#d97706] focus:text-white focus:bg-[#d97706] focus:outline-none dark:focus:bg-[#d97706] transition-colors duration-300">
                    {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </nav>
      
      <ContactPopup isOpen={isOpen} onClose={closePopup} title={title} />
    </div>
  );
}

