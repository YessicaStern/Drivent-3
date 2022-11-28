import { prisma } from "@/config";

async function getEnrollmentByUserIdRepository(userId: number) {
  return prisma.enrollment.findUnique({ where: { userId } });
}
async function getTicketsByEnrollmentIdRepository(enrollmentId: number) {
  return prisma.ticket.findMany({
    where: { enrollmentId },
    include: { TicketType: true }
  });
}

async function getHotelsRepository() {
  return prisma.hotel.findMany();
}

async function getHotelByIdRepository(id: number) {
  return prisma.hotel.findUnique({ where: { id } });
}

async function getRoomsRepository(id: number) {
  return prisma.hotel.findMany({
    where: { id },
    include: { Rooms: true }
  });
}

const hotelsRepository = {
  getEnrollmentByUserIdRepository,
  getTicketsByEnrollmentIdRepository,
  getHotelsRepository,
  getHotelByIdRepository,
  getRoomsRepository
};

export default hotelsRepository;
