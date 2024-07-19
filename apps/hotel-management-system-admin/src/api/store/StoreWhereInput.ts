import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type StoreWhereInput = {
  id?: StringFilter;
  storeItemId?: IntNullableFilter;
  storeItemName?: StringNullableFilter;
  stock?: IntNullableFilter;
  price?: FloatNullableFilter;
};
