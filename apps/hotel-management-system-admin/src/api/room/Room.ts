import { Reservation } from "../reservation/Reservation";
import { RoomService } from "../roomService/RoomService";

export type Room = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  roomNumber: number | null;
  typeField: string | null;
  pricePerNight: number | null;
  availability: boolean | null;
  reservations?: Array<Reservation>;
  roomServices?: Array<RoomService>;
};
