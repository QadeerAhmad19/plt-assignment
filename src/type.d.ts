interface IProduct {
  id: number;
  name: string;
  img: string;
  price: any,
  colour: string,
  quantity?: any | null
}

type CartState = {
  items: IProduct[],
  cloneItems: IProduct[],
  addedItems: any[],
  total: any
};

type Action = {
  type: string,
  product: IProduct
  id: Number,
  products: Array,
  selectedColor: string
};

type DispatchType = (args: Action) => Action;
