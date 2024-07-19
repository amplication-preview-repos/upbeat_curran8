import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const BarPosCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="itemId" source="itemId" />
        <TextInput label="itemName" source="itemName" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput label="totalAmount" source="totalAmount" />
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Create>
  );
};