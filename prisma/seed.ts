import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding Fade & Co. database...");

  await prisma.booking.deleteMany();
  await prisma.barber.deleteMany();
  await prisma.service.deleteMany();

  await prisma.barber.createMany({
    data: [
      {
        name: "David Junior",
        role: "Founder & Master Barber",
        bio: "With over 12 years behind the chair, Marcus combines traditional barbering with modern precision.",
        specialties: "Skin fades, Classic cuts, Beard sculpting",
        imageUrl:
          "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=85",
      },
      {
        name: "Liam Jacobs",
        role: "Senior Barber",
        bio: "Liam specialises in contemporary styles, textured cuts and detailed fades.",
        specialties: "Modern cuts, Textured styles, Fades",
        imageUrl:
          "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=85",
      },
      {
        name: "Ethan Daniels",
        role: "Barber",
        bio: "Ethan brings a relaxed approach to precision grooming, with a focus on tapers and beard work.",
        specialties: "Tapers, Kids cuts, Beard grooming",
        imageUrl:
          "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=85",
      },
    ],
  });

  await prisma.service.createMany({
    data: [
      {
        name: "Signature Cut",
        description:
          "A precision haircut, consultation, styling and hot towel finish.",
        price: 280,
        duration: 45,
      },
      {
        name: "Skin Fade",
        description:
          "A detailed skin fade with precision blending and professional styling.",
        price: 320,
        duration: 45,
      },
      {
        name: "Classic Cut",
        description:
          "A traditional scissor or clipper cut finished with professional styling.",
        price: 250,
        duration: 40,
      },
      {
        name: "Kids Cut",
        description:
          "A professional haircut for children under 12.",
        price: 200,
        duration: 30,
      },
      {
        name: "Beard Sculpt",
        description:
          "Shape, trim, line-up and conditioning for a clean finished beard.",
        price: 220,
        duration: 30,
      },
      {
        name: "Beard + Cut",
        description:
          "A complete haircut combined with a professional beard sculpt.",
        price: 450,
        duration: 60,
      },
      {
        name: "The Full Service",
        description:
          "Haircut, beard sculpt, hot towel treatment and styling.",
        price: 520,
        duration: 75,
      },
      {
        name: "The Executive",
        description:
          "The complete grooming experience including haircut, beard treatment, hot towel and facial cleanse.",
        price: 650,
        duration: 90,
      },
    ],
  });

  console.log("Database seeded successfully.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });