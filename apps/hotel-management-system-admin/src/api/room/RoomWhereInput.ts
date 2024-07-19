import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";
import { RoomServiceListRelationFilter } from "../roomService/RoomServiceListRelationFilter";

export type RoomWhereInput = {
  id?: StringFilter;
  roomNumber?: IntNullableFilter;
  typeField?: StringNullableFilter;
  pricePerNight?: FloatNullableFilter;
  availability?: BooleanNullableFilter;
  reservations?: ReservationListRelationFilter;
  roomServices?: RoomServiceListRelationFilter;
};
