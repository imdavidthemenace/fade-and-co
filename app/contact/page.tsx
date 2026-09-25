import Link from "next/link";
import {
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-[#F4F0E8]">

      <section className="bg-[#111111] px-6 pb-24 pt-40 text-white lg:px-8">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
            Contact
          </p>

          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
            Come sit in
            <br />
            our chair.
          </h1>

        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">

          <div className="bg-white p-8 md:p-10">

            <h2 className="font-serif text-3xl text-[#111111]">
              Find us
            </h2>

            <div className="mt-8 space-y-7">

              <div className="flex gap-4">
                <MapPin className="text-[#B08D57]" />

                <div>
                  <p className="font-medium">
                    78 Bree Street
                  </p>

                  <p className="mt-1 text-sm text-[#777]">
                    Cape Town, 8001
                    <br />
                    South Africa
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-[#B08D57]" />

                <div>
                  <p className="font-medium">
                    +27 21 555 0188
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-[#B08D57]" />

                <div>
                  <p className="font-medium">
                    hello@fadeandco.co.za
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-[#B08D57]" />

                <div className="space-y-1 text-sm text-[#777]">
                  <p>Monday – Friday: 09:00 – 19:00</p>
                  <p>Saturday: 08:00 – 17:00</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

            </div>

          </div>

          <div className="bg-[#111111] p-8 text-white md:p-10">

            <p className="text-sm uppercase tracking-[0.25em] text-[#B08D57]">
              Appointments
            </p>

            <h2 className="mt-4 font-serif text-4xl">
              Ready for a fresh cut?
            </h2>

            <p className="mt-5 leading-8 text-[#A89F91]">
              The easiest way to secure your preferred barber
              and time is through our online booking system.
            </p>

            <Link
              href="/booking"
              className="mt-8 inline-flex bg-[#B08D57] px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white"
            >
              Book Now
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}