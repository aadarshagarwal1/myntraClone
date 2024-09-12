import returnSign from "../assets/return.svg";
import { bagItemsAction } from "../store/bagItemsSlice";
import { useDispatch } from "react-redux";
import "../components/bagProductCard.css";
export default function bagProductCard(props) {
  const dispatch = useDispatch();
  function deleteItem() {
    dispatch(bagItemsAction.deleteItem(props.id));
  }
  return (
    <div className="bagProductCard">
      <div className="bag-card-container">
        <div className="bag-card-imageWrapper">
          <img src={props.image} alt="" />
        </div>
      </div>

      <div className="bag-card-details">
        <p className="companyName bold m-0">{props.company}</p>
        <p className="itemName m-0">{props.item_name}</p>
        <div className="priceDetails">
          <span className="currentPrice bold">Rs. {props.current_price}</span>
          <span className="originalPrice">Rs. {props.original_price}</span>
          <span className="discountPercentage">
            ({props.discount_percentage}% OFF)
          </span>
        </div>
        <div className="returnDetails">
          <img src={returnSign} alt="" className="returnSign" />
          <span className="returnDuration" style={{ fontSize: "0.9rem" }}>
            {props.return_period} days
          </span>
          <span style={{ fontSize: "0.9rem" }}>return available</span>
        </div>
        <div className="deliveryDetails">
          <span style={{ fontSize: "0.9rem" }}>Delivery by</span>
          <span className="deliveryDate">{props.delivery_date}</span>
        </div>
      </div>
      <div className="bag-removeItem" onClick={deleteItem}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-x-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
        </svg>
      </div>
    </div>
  );
}
