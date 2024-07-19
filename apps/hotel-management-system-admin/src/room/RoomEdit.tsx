import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ReservationTitle } from "../reservation/ReservationTitle";
import { RoomServiceTitle } from "../roomService/RoomServiceTitle";

export const RoomEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="roomNumber" source="roomNumber" />
        <TextInput label="type" source="typeField" />
        <NumberInput label="pricePerNight" source="pricePerNight" />
        <BooleanInput label="availability" source="availability" />
        <ReferenceArrayInput
          source="reservations"
          reference="Reservation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReservationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="roomServices"
          reference="RoomService"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RoomServiceTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
