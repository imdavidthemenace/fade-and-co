import Link from "next/link";
import {
  
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <div className="mb-5 font-serif text-3xl">
              Fade & Co.
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#A89F91]">
              Sharp cuts. Timeless style. A modern Cape Town
              barbershop built around precision, craft and
              genuine hospitality.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-[#B08D57]">
              Explore
            </h3>

            <div className="flex flex-col gap-3 text-sm text-[#C5BFB6]">
              <Link href="/services">Services</Link>
              <Link href="/barbers">Our Barbers</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/booking">Book an Appointment</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-[#B08D57]">
              Visit Us
            </h3>

            <div className="space-y-4 text-sm text-[#C5BFB6]">

              <div className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-[#B08D57]" />
                <span>
                  78 Bree Street
                  <br />
                  Cape Town, 8001
                  <br />
                  South Africa
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={17} className="text-[#B08D57]" />
                <span>+27 21 555 0188</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={17} className="text-[#B08D57]" />
                <span>hello@fadeandco.co.za</span>
              </div>

            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-[#B08D57]">
              Opening Hours
            </h3>

            <div className="space-y-3 text-sm text-[#C5BFB6]">
              <div className="flex justify-between gap-5">
                <span>Mon – Fri</span>
                <span>09:00 – 19:00</span>
              </div>

              <div className="flex justify-between gap-5">
                <span>Saturday</span>
                <span>08:00 – 17:00</span>
              </div>

              <div className="flex justify-between gap-5">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>

            
          </div>

        </div>
      </div>

      <div className="border-t border-[#2B2926]">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-xs text-[#77736C] sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <p>
            © {new Date().getFullYear()} Fade & Co. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link href="/terms">
              Terms & Conditions
            </Link>

            <Link href="/privacy">
              Privacy Policy
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}