import { AuthenticatedRequest } from "@/middlewares";
import hotelsService from "@/services/hotels-service";
import { Response, Request } from "express";
import httpStatus from "http-status";

export async function getHotels(req: AuthenticatedRequest, res: Response) {
  try {
    const hotels = await hotelsService.getHotels();
    return res.status(httpStatus.OK).send(hotels);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
}
export function getHotels2(req: Request, res: Response) {
  return res.sendStatus(201);
}

export async function getRooms(req: AuthenticatedRequest, res: Response) {
  const { hotelId }= req.params;
  try {
    const hotel = await hotelsService.getHotelById(Number(hotelId));
    if(!hotel) {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    const rooms = await hotelsService.getRooms(Number(hotelId));
    return res.status(httpStatus.OK).send(rooms);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
}
