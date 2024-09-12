import "../components/bag.css";
import BagProductCard from "./bagProductCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
export default function bag() {
  const bagItemsList = useSelector((store) => store.bagItemsSlice);
  const [bagItems, setBagItems] = useState([]);
  useEffect(() => {
    async function fetchBagItems() {
      const response = await fetch("http://localhost:8080/items");
      const obj = await response.json();
      setBagItems(obj.items.filter((item) => bagItemsList.includes(item.id)));
    }
    fetchBagItems();
  }, [bagItemsList]);
  const renderElement = bagItems.map((item) => {
    return (
      <BagProductCard
        key={item.id}
        id={item.id}
        company={item.company}
        item_name={item.item_name}
        original_price={item.original_price}
        current_price={item.current_price}
        discount_percentage={item.discount_percentage}
        return_period={item.return_period}
        delivery_date={item.delivery_date}
        image={item.image}
      />
    );
  });
  return (
    <div className="bag">
      {bagItems.length > 0 && (
        <div className="bagProductCardHolder">{renderElement}</div>
      )}
      <div className="bagValue">
        <div>
          <div className="bagValueHeading">
            <span>PRICE DETAILS</span>
            <span>({bagItems.length} items)</span>
          </div>
          <div className="bagValueParticularsHolder">
            <div className="bagValueParticular">
              <span className="bagValueParticularLabel">Total MRP</span>
              <span className="bagValueParticularAmount">
                ₹{bagItems.reduce((sum, obj) => sum + obj.original_price, 0)}
              </span>
            </div>
            <div className="bagValueParticular">
              <span className="bagValueParticularLabel">Discount on MRP</span>
              <span
                className="bagValueParticularAmount"
                style={{ color: "#0dc40d" }}
              >
                -₹
                {bagItems.reduce(
                  (sum, obj) => sum + (obj.original_price - obj.current_price),
                  0
                )}
              </span>
            </div>
            <div className="bagValueParticular">
              <span className="bagValueParticularLabel">Convenience Fee</span>
              <span className="bagValueParticularAmount">₹99</span>
            </div>
          </div>
        </div>
        <div className="bagTotal">
          <span className="totalLable">Total Amount</span>
          <span className="totalValue">
            ₹{bagItems.reduce((sum, obj) => sum + obj.current_price, 0) + 99}
          </span>
        </div>
        <div className="placeOrderButton">
          <span>PLACE ORDER</span>
        </div>
      </div>
    </div>
  );
}
