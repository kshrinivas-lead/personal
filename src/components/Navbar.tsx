"use client";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import ThemeChanger from "./DarkSwitch";
import { GROUNDED_PUBLISHED } from "@/config";

const navigation = [
  ...(GROUNDED_PUBLISHED ? [{ name: "Grounded", href: "/grounded" }] : []),
  { name: "Point of View", href: "/point-of-view" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  return (
    <header className="relative border-b border-rule dark:border-rule-dk">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5 sm:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-ink dark:text-ink-dk"
        >
          Shrinivas Kulkarni
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="u-sans rounded px-3 py-2 text-sm text-ink-muted transition-colors hover:text-ink dark:text-ink-muted-dk dark:hover:text-ink-dk"
            >
              {item.name}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeChanger />
          </div>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeChanger />
          {/* `as="div"` is required: without it Disclosure renders its children
              into a Fragment and passes data-headlessui-state to it, which React
              rejects — a Fragment takes only key and children. */}
          <Disclosure as="div" className="flex items-center">
            {({ open }) => (
              <>
                <Disclosure.Button
                  aria-label="Toggle menu"
                  className="rounded p-2 text-ink-muted dark:text-ink-muted-dk"
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {open ? (
                      <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                    ) : (
                      <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="absolute left-0 right-0 top-full z-40 border-b border-rule bg-paper px-5 pb-5 dark:border-rule-dk dark:bg-paper-dk">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.href}
                      as={Link}
                      href={item.href}
                      className="u-sans block border-b border-rule py-3 text-base text-ink-body last:border-0 dark:border-rule-dk dark:text-ink-body-dk"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </nav>
    </header>
  );
};
