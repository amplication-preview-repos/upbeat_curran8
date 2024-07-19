import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const StoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="storeItemId" source="storeItemId" />
        <TextInput label="storeItemName" source="storeItemName" />
        <NumberInput step={1} label="stock" source="stock" />
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Edit>
  );
};
