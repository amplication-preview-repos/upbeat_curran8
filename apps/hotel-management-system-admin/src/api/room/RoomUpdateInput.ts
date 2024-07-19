import { ReservationUpdateManyWithoutRoomsInput } from "./ReservationUpdateManyWithoutRoomsInput";
import { RoomServiceUpdateManyWithoutRoomsInput } from "./RoomServiceUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  roomNumber?: number | null;
  typeField?: string | null;
  pricePerNight?: number | null;
  availability?: boolean | null;
  reservations?: ReservationUpdateManyWithoutRoomsInput;
  roomServices?: RoomServiceUpdateManyWithoutRoomsInput;
};
