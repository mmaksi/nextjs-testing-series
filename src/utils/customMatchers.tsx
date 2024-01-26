import { Item } from "@/types/Item";

export const toHaveTotalPrice = (
  received: Item[],
  expectedTotalPrice: number
) => {
  const calculateTotalPrice = (items: Item[]) => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  const totalPrice = calculateTotalPrice(received);
  const pass = totalPrice === expectedTotalPrice;

  if (pass) {
    return {
      message: () =>
        `expected the total price to be ${expectedTotalPrice}, but it was ${totalPrice}.`,
      pass: true,
    };
  } else {
    return {
      message: () =>
        `expected the total price to be ${expectedTotalPrice}, but it was ${totalPrice}.`,
      pass: false,
    };
  }
};

expect.extend({ toHaveTotalPrice });
