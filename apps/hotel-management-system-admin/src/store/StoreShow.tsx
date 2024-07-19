import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const StoreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="storeItemId" source="storeItemId" />
        <TextField label="storeItemName" source="storeItemName" />
        <TextField label="stock" source="stock" />
        <TextField label="price" source="price" />
      </SimpleShowLayout>
    </Show>
  );
};
