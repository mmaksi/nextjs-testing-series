import { Item } from "@/types/Item";

/**
 * TODO 1: Create a custom matcher to test strings to have letters only
 * TODO 2: Test that matcher on a different strings
 * TODO 2: Test that matcher on the input fields in the UserForm.test.js file
 * Hint: you have to use the fireEvent function from @testing-library/react
 */
export const toContainOnlyLetters = (received: string) => {
  const validate = (str: string) => {
    const letterRegex = /^[a-zA-Z\s]+$/;
    return letterRegex.test(str);
  };

  const pass = validate(received);

  switch (pass) {
    case true:
      return {
        message: () => `expected "${received}" to contain only letters.`,
        pass: true,
      };
    case false:
      return {
        message: () =>
          `expected "${received}" not to contain symbols or numbers.`,
        pass: false,
      };
  }
};

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

expect.extend({ toHaveTotalPrice, toContainOnlyLetters });
