import {
  fetchProductAData,
  fetchProductBData,
  fetchPromoInformation,
  fetchSellerData,
  fetchShippingFee,
  Order,
} from "./fetcher";

export async function calculateTotalPriceSequential(): Promise<number> {
  const productA = await fetchProductAData();
  const productB = await fetchProductBData();
  const seller = await fetchSellerData();
  const shippingFee = await fetchShippingFee(seller.address);
  const promo = await fetchPromoInformation();

  const totalPrice =
    productA.price + productB.price + shippingFee.amount - promo.discount;
  console.log(`Total Price: ${totalPrice}`);

  return totalPrice;
}

/* Start of the parallelized version */

export async function fetchProductAndSellerInfo(order: Order): Promise<void> {
  const [productA, productB, seller] = await Promise.all([
    fetchProductAData(),
    fetchProductBData(),
    fetchSellerData(),
  ]);

  order.products = [productA, productB];
  order.seller = seller;
}

export async function fetchShippingFeeForOrder(order: Order): Promise<void> {
  await fetchProductAndSellerInfo(order);
  order.shipping = await fetchShippingFee(order.seller!.address);
}

export async function fetchCalculationComponents(order: Order): Promise<void> {
  await Promise.all([
    fetchPromoInformation().then((promo) => (order.promo = promo)),
    fetchShippingFeeForOrder(order),
  ]);
}

export async function calculateTotalPriceParallelized(): Promise<number> {
  const order: Order = { products: [] };
  await fetchCalculationComponents(order);

  const totalPrice =
    order.products[0].price +
    order.products[1].price +
    order.shipping!.amount -
    order.promo!.discount;
  console.log(`Total Price: ${totalPrice}`);

  return totalPrice;
}

/* End of the parallelized version */
