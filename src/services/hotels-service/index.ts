import hotelsRepository from "@/repositories/hotels-repository";
import { notFoundError } from "@/errors";

async function getEnrollmentByUserId(userId: number) {
  const response = await hotelsRepository.getEnrollmentByUserIdRepository(userId);
  if (!response) {
    throw notFoundError();
  }
  return response;
}

async function getTicketsByEnrollmentId(enrollmentId: number) {
  const response = await hotelsRepository.getTicketsByEnrollmentIdRepository(enrollmentId);
  if (!response) {
    throw notFoundError();
  }
  return response;
}
async function getHotels() {
  const response =  await hotelsRepository.getHotelsRepository();
  if (!response) {
    throw notFoundError();
  }
  return response;
}

async function getHotelById(hotelId: number) {
  return await hotelsRepository.getHotelByIdRepository(hotelId);
}

async function getRooms(hotelId: number) {
  const response = await hotelsRepository.getRoomsRepository(hotelId);
  if (!response) {
    throw notFoundError();
  }
  return response;
}

const hotelsService = {
  getEnrollmentByUserId,
  getTicketsByEnrollmentId,
  getHotels,
  getHotelById,
  getRooms
};

export default hotelsService;
