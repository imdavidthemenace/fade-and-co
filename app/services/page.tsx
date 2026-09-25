import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const services = [
  {
    name: "Signature Cut",
    description:
      "A tailored cut finished with styling and attention to the details that make the difference.",
    price: "R280",
    duration: "45 min",
  },
  {
    name: "Skin Fade",
    description:
      "A precise skin fade with seamless transitions and a clean, refined finish.",
    price: "R320",
    duration: "45 min",
  },
  {
    name: "Classic Cut",
    description:
      "Timeless scissor and clipper work for a clean, versatile everyday style.",
    price: "R250",
    duration: "40 min",
  },
  {
    name: "Kids Cut",
    description:
      "A relaxed, patient haircut experience designed for younger clients.",
    price: "R200",
    duration: "30 min",
  },
  {
    name: "Beard Sculpt",
    description:
      "Shape, define and refine your beard with professional trimming and detailing.",
    price: "R220",
    duration: "30 min",
  },
  {
    name: "Beard + Cut",
    description:
      "Our signature haircut paired with a complete beard shape and finish.",
    price: "R450",
    duration: "60 min",
  },
  {
    name: "The Full Service",
    description:
      "Haircut, beard sculpt, hot towel treatment and premium finishing.",
    price: "R520",
    duration: "75 min",
  },
  {
    name: "The Executive",
    description:
      "The complete grooming experience for clients who want the full treatment.",
    price: "R650",
    duration: "90 min",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#F4F0E8]">

      <section className="bg-[#111111] px-6 pb-24 pt-40 text-white lg:px-8">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
            Services & Pricing
          </p>

          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
            Grooming with
            <br />
            intention.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#A89F91]">
            From a sharp everyday cut to the complete Fade & Co.
            experience, every service is designed around precision
            and comfort.
          </p>

        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-5xl">

          <div className="grid gap-4 md:grid-cols-2">

            {services.map((service, index) => (
              <div
                key={service.name}
                className="bg-white p-7"
              >

                <div className="flex items-start justify-between gap-5">

                  <span className="text-sm text-[#B08D57]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-xl font-semibold text-[#B08D57]">
                    {service.price}
                  </span>

                </div>

                <h2 className="mt-8 font-serif text-2xl text-[#111111]">
                  {service.name}
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#777]">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm text-[#888]">
                  <Clock size={15} />
                  {service.duration}
                </div>

              </div>
            ))}

          </div>

          <div className="mt-12 text-center">

            <Link
              href="/booking"
              className="inline-flex items-center gap-3 bg-[#111111] px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white"
            >
              Book Your Appointment
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}