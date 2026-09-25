import Link from "next/link";
import { ArrowRight, Scissors, Sparkles, UserRound } from "lucide-react";
import BookingPrompt from "@/components/home/BookingPrompt";

const services = [
  {
    name: "Signature Cut",
    price: "R280",
    description:
      "A precision haircut, consultation, styling and hot towel finish.",
  },
  {
    name: "Skin Fade",
    price: "R320",
    description:
      "A detailed skin fade with precision blending and professional styling.",
  },
  {
    name: "Beard Sculpt",
    price: "R220",
    description:
      "Shape, trim, line-up and conditioning for a clean finished beard.",
  },
];

const values = [
  {
    icon: Scissors,
    title: "Precision",
    text: "Every cut starts with a consultation and finishes with attention to detail.",
  },
  {
    icon: UserRound,
    title: "Experience",
    text: "Traditional barbering techniques combined with modern styling.",
  },
  {
    icon: Sparkles,
    title: "The Experience",
    text: "A premium space designed to make every visit worth remembering.",
  },
];

export default function Home() {
  return (
    <>
    <main>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#111111]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-[#111111]/30" />

          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=2000&q=85')",
            }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-semibold tracking-[0.35em] text-[#B08D57]">
              Cape Town · EST. 2026
            </p>

            <h1 className="font-[family-name:var(--font-heading)] text-6xl leading-[0.95] tracking-tight text-[#F4F0E8] sm:text-7xl lg:text-9xl">
              SHARP CUTS.
              <br />
              TIMELESS STYLE.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-[#F4F0E8]/70 sm:text-lg">
              Premium barbering in the heart of Cape Town.
              Precision cuts, classic grooming and a modern experience.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-3 bg-[#B08D57] px-8 py-4 text-sm font-bold tracking-wide text-[#111111] transition hover:bg-[#C5A66D]"
              >
                BOOK YOUR CUT
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center border border-[#F4F0E8]/30 px-8 py-4 text-sm font-semibold tracking-wide text-[#F4F0E8] transition hover:border-[#B08D57] hover:text-[#B08D57]"
              >
                VIEW SERVICES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#F4F0E8] px-6 py-24 text-[#111111] lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-[#B08D57]">
            MORE THAN A HAIRCUT
          </p>

          <h2 className="mt-5 font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl">
            Your chair. Your style. Your time.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#242424]/70">
            Fade & Co. brings the traditional barber experience into a
            contemporary Cape Town setting. Come in for the cut. Stay for the
            experience.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#111111] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold tracking-[0.3em] text-[#B08D57]">
                THE MENU
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl text-[#F4F0E8]">
                Our Services
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#B08D57]"
            >
              VIEW ALL SERVICES
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-[#111111] p-8 transition hover:bg-[#242424]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl text-[#F4F0E8]">
                    {service.name}
                  </h3>

                  <span className="text-sm font-semibold text-[#B08D57]">
                    {service.price}
                  </span>
                </div>

                <p className="mt-6 text-sm leading-7 text-[#A89F91]">
                  {service.description}
                </p>

                <Link
                  href="/booking"
                  className="mt-8 inline-block text-xs font-bold tracking-widest text-[#F4F0E8]"
                >
                  BOOK THIS SERVICE →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#242424] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.3em] text-[#B08D57]">
              WHY Fade & Co.
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl text-[#F4F0E8]">
              The details matter.
            </h2>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div key={value.title}>
                  <div className="mb-7 flex h-12 w-12 items-center justify-center border border-[#B08D57]/40 text-[#B08D57]">
                    <Icon size={21} />
                  </div>

                  <p className="text-xs font-bold tracking-[0.2em] text-[#B08D57]">
                    0{index + 1}
                  </p>

                  <h3 className="mt-3 font-[family-name:var(--font-heading)] text-2xl text-[#F4F0E8]">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#A89F91]">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="bg-[#B08D57] px-6 py-24 text-center text-[#111111] lg:px-8 lg:py-32">
        <p className="text-sm font-bold tracking-[0.3em]">
          READY FOR A FRESH CUT?
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl font-[family-name:var(--font-heading)] text-5xl leading-tight sm:text-6xl">
          Get in the chair.
        </h2>

        <Link
          href="/booking"
          className="mt-10 inline-flex items-center gap-3 bg-[#111111] px-8 py-4 text-sm font-bold tracking-wide text-[#F4F0E8] transition hover:bg-[#242424]"
        >
          BOOK YOUR APPOINTMENT
          <ArrowRight size={18} />
        </Link>
      </section>
          <BookingPrompt />
    </main>
  </>
  );
}