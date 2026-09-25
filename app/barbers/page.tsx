import GoldButton from "@/components/ui/GoldButton";

const barbers = [
  {
    name: "Marcus Williams",
    role: "Founder & Master Barber",
    image:
      "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=900&q=85",
    bio: "With a passion for traditional barbering and modern styling, Marcus built Fade & Co. around precision, hospitality and craft.",
  },
  {
    name: "Liam Jacobs",
    role: "Senior Barber",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85",
    bio: "Liam specialises in fades, modern cuts and clean beard work, bringing a calm and meticulous approach to every appointment.",
  },
  {
    name: "Ethan Daniels",
    role: "Barber",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuM2NncNrxAvrMawLuGkLsgw73uz-nuhMrTeCX_d33fQ&s=10",
    bio: "Ethan combines classic barbering fundamentals with contemporary styles and a relaxed chair-side experience.",
  },
];

export default function BarbersPage() {
  return (
    <main className="bg-[#F4F0E8]">

      <section className="bg-[#111111] px-6 pb-24 pt-40 text-white lg:px-8">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
            Meet the Team
          </p>

          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
            The people behind
            <br />
            the chair.
          </h1>

        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 md:grid-cols-3">

            {barbers.map((barber) => (
              <article key={barber.name}>

                <div
                  className="aspect-[4/5] bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${barber.image}')`,
                  }}
                />

                <div className="pt-6">

                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
                    {barber.role}
                  </p>

                  <h2 className="mt-2 font-serif text-2xl text-[#111111]">
                    {barber.name}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#777]">
                    {barber.bio}
                  </p>

                </div>

              </article>
            ))}

          </div>

          <div className="mt-16 text-center">
            <GoldButton href="/booking">
              Choose Your Barber
            </GoldButton>
          </div>

        </div>
      </section>

    </main>
  );
}