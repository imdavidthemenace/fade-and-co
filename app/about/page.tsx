import GoldButton from "@/components/ui/GoldButton";

export default function AboutPage() {
  return (
    <main className="bg-[#F4F0E8]">

      <section className="bg-[#111111] px-6 pb-24 pt-40 text-white lg:px-8">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
            About Fade & Co.
          </p>

          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
            Built on craft.
            <br />
            Defined by detail.
          </h1>

        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">

          <div
            className="min-h-[500px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://www.barberstake.com/wp-content/uploads/2025/02/Low-Fade-Haircut-For-Black-Men-1.jpg')",
            }}
          />

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
              Our Story
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#111111] md:text-5xl">
              A modern barbershop
              <br />
              with old-school values.
            </h2>

            <div className="mt-7 space-y-5 text-[#66615A] leading-8">

              <p>
                Fade & Co. was created around a simple idea:
                exceptional grooming should never feel rushed.
              </p>

              <p>
                We combine traditional barbering techniques with
                contemporary styles to create cuts that work for
                real people and real life.
              </p>

              <p>
                Whether you're preparing for a big meeting,
                heading out for the weekend or simply due for a
                clean-up, our chair is your time.
              </p>

            </div>

            <div className="mt-8">
              <GoldButton href="/booking">
                Book Your Chair
              </GoldButton>
            </div>

          </div>

        </div>
      </section>

      <section className="bg-[#111111] px-6 py-24 text-white lg:px-8">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
            Our Philosophy
          </p>

          <blockquote className="mt-7 font-serif text-3xl leading-relaxed md:text-5xl">
            "Look good. Feel good. Take your time."
          </blockquote>

          <p className="mt-7 text-[#A89F91]">
            Precision in the chair. Confidence when you leave.
          </p>

        </div>

      </section>

    </main>
  );
}