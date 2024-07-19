export type Store = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  storeItemId: number | null;
  storeItemName: string | null;
  stock: number | null;
  price: number | null;
};
