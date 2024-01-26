import { Item } from "@/types/Item";
import { ShoppingCartProps } from "@/types/props/cart";

const calculateTotalPrice = (items: Item[]): number => {
  return items.reduce((total, item) => total + item.price, 0);
};

const ShoppingCart: React.FC<ShoppingCartProps> = ({ items }) => {
  const totalPrice = calculateTotalPrice(items);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ margin: "1rem" }}>
            {item.name}: ${item.price}
          </li>
        ))}
      </ul>
      <hr />
      <p data-testid="output" style={{ margin: "1rem" }}>
        Total Price: ${totalPrice}
      </p>
    </div>
  );
};

export default ShoppingCart;
