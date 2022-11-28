import hotelsService from "@/services/hotels-service";
import { NextFunction, Response, Request } from "express";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "./authentication-middleware";

export async function havePaidTicketWithHosting(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { userId }=req;
  try {
    const enrollment = await hotelsService.getEnrollmentByUserId(userId);
    if(!enrollment) {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    const tickets = await hotelsService.getTicketsByEnrollmentId(enrollment.id);
    if(!tickets[0]) {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    const ticketsPaid = tickets.filter((e) => {
      if(e.status==="PAID" && e.TicketType.includesHotel) {
        return e;
      }
    });
    if(!ticketsPaid[0]) {
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }
    next();
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
}
