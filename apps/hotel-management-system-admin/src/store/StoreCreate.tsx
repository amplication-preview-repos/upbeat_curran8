import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const StoreCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="storeItemId" source="storeItemId" />
        <TextInput label="storeItemName" source="storeItemName" />
        <NumberInput step={1} label="stock" source="stock" />
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Create>
  );
};
