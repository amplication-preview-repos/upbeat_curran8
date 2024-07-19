import { ReservationCreateNestedManyWithoutRoomsInput } from "./ReservationCreateNestedManyWithoutRoomsInput";
import { RoomServiceCreateNestedManyWithoutRoomsInput } from "./RoomServiceCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  roomNumber?: number | null;
  typeField?: string | null;
  pricePerNight?: number | null;
  availability?: boolean | null;
  reservations?: ReservationCreateNestedManyWithoutRoomsInput;
  roomServices?: RoomServiceCreateNestedManyWithoutRoomsInput;
};
