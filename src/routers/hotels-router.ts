import { Router } from "express";
import { authenticateToken, havePaidTicketWithHosting } from "@/middlewares";
import { getHotels, getRooms } from "@/controllers";

const hotelsRouter = Router();

hotelsRouter
  .all("/*", authenticateToken)
  .get("/", havePaidTicketWithHosting, getHotels)
  .get("/:hotelId", havePaidTicketWithHosting, getRooms);

export { hotelsRouter };
