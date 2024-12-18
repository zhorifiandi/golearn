type Product = {
  name: string;
  price: number;
};

type Seller = {
  name: string;
  address: string;
};

type ShippingFee = {
  amount: number;
};

type Promo = {
  discount: number;
};

export type Order = {
  products: Product[];
  seller?: Seller;
  shipping?: ShippingFee;
  promo?: Promo;
  totalPrice?: number;
};

const processingTime = 1000;

function executeMockProcess(time: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export async function fetchProductAData(): Promise<Product> {
  await executeMockProcess(processingTime);
  console.log("Product A data fetched");
  return { name: "Product A", price: 50 };
}

export async function fetchProductBData(): Promise<Product> {
  await executeMockProcess(processingTime);
  console.log("Product B data fetched");
  return { name: "Product B", price: 100 };
}

export async function fetchSellerData(): Promise<Seller> {
  await executeMockProcess(processingTime);
  console.log("Seller data fetched");
  return { name: "Seller A", address: "Address A" };
}

export async function fetchShippingFee(sellerAddress: string): Promise<ShippingFee> {
  await executeMockProcess(processingTime);
  console.log("Shipping fee fetched");
  return { amount: 10 };
}

export async function fetchPromoInformation(): Promise<Promo> {
  await executeMockProcess(processingTime);
  console.log("Promo information fetched");
  return { discount: 5 };
}

