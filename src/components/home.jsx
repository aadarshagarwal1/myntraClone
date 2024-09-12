import ProductCard from "./productCard";
import { useSelector } from "react-redux";
export default function home() {
  const itemList = useSelector((store) => store.itemsSlice);
  const renderElement = itemList.map((item) => {
    return (
      <ProductCard
        key={item.id}
        id={item.id}
        company={item.company}
        item_name={item.item_name}
        original_price={item.original_price}
        current_price={item.current_price}
        discount_percentage={item.discount_percentage}
        rating={item.rating}
        image={item.image}
      />
    );
  });
  return <div className="home">{renderElement}</div>;
}
