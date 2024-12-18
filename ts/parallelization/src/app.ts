import {
  calculateTotalPriceParallelized,
  calculateTotalPriceSequential,
} from "./calculate-total-price";

(async () => {
  console.log("Start");
  console.time("Sequential");
  await calculateTotalPriceSequential();
  console.timeEnd("Sequential");

  console.log("\n\n==========================================\n\n");

  console.time("Parallelized");
  await calculateTotalPriceParallelized();
  console.timeEnd("Parallelized");
})();
