import { toHaveTotalPrice } from "../src/utils/customMatchers";

test("checks if the shopping cart has the correct total price", () => {
  const items = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];

  expect(toHaveTotalPrice(items,60))
  expect(toHaveTotalPrice(items, 50)).not.toBeTruthy();
});
