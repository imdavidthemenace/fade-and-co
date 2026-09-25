import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Scissors,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import GoldButton from "@/components/ui/GoldButton";

const services = [
  {
    name: "Signature Cut",
    price: "R280",
    duration: "45 min",
  },
  {
    name: "Skin Fade",
    price: "R320",
    duration: "45 min",
  },
  {
    name: "Beard Sculpt",
    price: "R220",
    duration: "30 min",
  },
  {
    name: "The Full Service",
    price: "R520",
    duration: "75 min",
  },
];

export default function Home() {
  return (
    <main>

      {/* HERO */}

      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#111111]">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">

          <div className="max-w-3xl">

            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
              Cape Town • Since 2026
            </p>

            <h1 className="font-serif text-5xl leading-[1.05] text-white sm:text-6xl lg:text-8xl">
              Sharp cuts.
              <br />
              <span className="text-[#D8C5A4]">
                Timeless style.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#D5D0C8]">
              A modern Cape Town barbershop where precision
              grooming meets relaxed hospitality.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <GoldButton href="/booking">
                Book Your Cut
              </GoldButton>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-3 border border-white/40 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:border-white"
              >
                Explore Services
                <ArrowRight size={17} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="bg-[#F4F0E8] px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
                The Fade & Co. Experience
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#111111] md:text-5xl">
                More than a haircut.
                <br />
                It's your time.
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-[#66615A]">
                We believe a great barbershop should feel like
                somewhere you want to return to. Every appointment
                is built around attention to detail, honest
                conversation and exceptional craft.
              </p>

              <div className="mt-8">
                <GoldButton href="/about">
                  Discover Our Story
                </GoldButton>
              </div>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-white p-7">
                <Scissors className="mb-5 text-[#B08D57]" />
                <h3 className="font-serif text-2xl">
                  Precision
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#777]">
                  Every cut finished with intention and detail.
                </p>
              </div>

              <div className="mt-8 bg-[#111111] p-7 text-white">
                <Sparkles className="mb-5 text-[#B08D57]" />
                <h3 className="font-serif text-2xl">
                  Craft
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#A89F91]">
                  Classic techniques with a modern approach.
                </p>
              </div>

              <div className="bg-[#111111] p-7 text-white">
                <Clock className="mb-5 text-[#B08D57]" />
                <h3 className="font-serif text-2xl">
                  Your Time
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#A89F91]">
                  Appointments designed around you.
                </p>
              </div>

              <div className="mt-8 bg-white p-7">
                <ShieldCheck className="mb-5 text-[#B08D57]" />
                <h3 className="font-serif text-2xl">
                  Quality
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#777]">
                  Premium grooming without unnecessary fuss.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SERVICES */}

      <section className="bg-white px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
                Our Services
              </p>

              <h2 className="mt-4 font-serif text-4xl text-[#111111] md:text-5xl">
                The essentials,
                <br />
                done exceptionally.
              </h2>
            </div>

            <Link
              href="/services"
              className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#111111]"
            >
              View all services
              <ArrowRight size={17} />
            </Link>

          </div>

          <div className="grid gap-4 md:grid-cols-2">

            {services.map((service) => (
              <div
                key={service.name}
                className="group border border-[#E5E0D8] p-7 transition hover:border-[#B08D57]"
              >

                <div className="flex items-start justify-between gap-5">

                  <div>
                    <h3 className="font-serif text-2xl text-[#111111]">
                      {service.name}
                    </h3>

                    <p className="mt-3 flex items-center gap-2 text-sm text-[#888]">
                      <Clock size={15} />
                      {service.duration}
                    </p>
                  </div>

                  <span className="text-lg font-semibold text-[#B08D57]">
                    {service.price}
                  </span>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="bg-[#B08D57] px-6 py-20 lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
              Ready when you are
            </p>

            <h2 className="mt-3 font-serif text-4xl text-white md:text-5xl">
              Your next cut starts here.
            </h2>
          </div>

          <Link
            href="/booking"
            className="inline-flex items-center gap-3 bg-[#111111] px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#252525]"
          >
            Book an Appointment
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </main>
  );
}