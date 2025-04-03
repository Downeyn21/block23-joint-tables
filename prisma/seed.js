const prisma = require("../prisma");
const seed = async () => {
  // TODO: Create Users, Places and Vacations
const createUsers = async () => {
    const users = [
        { name: "Logan" },
        { name: "Chase" },
        { name: "Lincoln" },
        { name: "Boots" },
    ];
    await prisma.user.createMany({ data: users });
  };

const createPlaces = async () => {
    const places = [
        { name: "Philadelphia" },
        { name: "Las Vegas" },
        { name: "Paris" },
    ];
    await prisma.place.createMany({ data: places });
  };

    const createVacations = async () => {
    const vacations = [
        { userId: 1, placeId: 1, travelDate: new Date("2024-07-01") },
        { userId: 2, placeId: 2, travelDate: new Date("2024-07-02") },
        { userId: 3, placeId: 3, travelDate: new Date("2024-07-03") },
    ];
    await prisma.vacation.createMany({ data: vacations });
  };

await createUsers();
await createPlaces();
await createVacations();
};

seed()
    .then(async () => await prisma.$disconnect())
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });