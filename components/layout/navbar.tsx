"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/barbers", label: "Barbers" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#111111]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center border border-[#B08D57]">
            <span className="font-serif text-lg text-[#B08D57]">
              F
            </span>
          </div>

          <div>
            <div className="font-serif text-xl tracking-wide text-white">
              Fade & Co.
            </div>

            <div className="hidden text-[9px] uppercase tracking-[0.3em] text-[#A89F91] sm:block">
              Barbershop
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#D7D1C8] transition hover:text-[#B08D57]"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/booking"
            className="bg-[#B08D57] px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#967445]"
          >
            Book Now
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#111111] px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-[#D7D1C8]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="mt-2 bg-[#B08D57] px-5 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}