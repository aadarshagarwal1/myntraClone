import "../components/productCard.css";
import { useDispatch, useSelector } from "react-redux";
import { bagItemsAction } from "../store/bagItemsSlice";
export default function productCard(props) {
  const bagItems = useSelector((store) => store.bagItemsSlice);
  const isInTheBag = bagItems.some((obj) => obj === props.id);
  const dispatch = useDispatch();
  function addItem() {
    dispatch(bagItemsAction.addItem(props.id));
  }
  function deleteItem() {
    dispatch(bagItemsAction.deleteItem(props.id));
  }
  return (
    <div className="productCard">
      <div className="card-container">
        <div className="card-imageWrapper">
          <img src={props.image} alt="" />
        </div>
        <div className="card-rating">
          <span>{props.rating.stars}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-star-fill"
            viewBox="0 0 16 16"
            color="green"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
          <span style={{ marginLeft: "0.2rem", marginRight: "0.2rem" }}>|</span>
          <span>{props.rating.count}</span>
        </div>
      </div>

      <div className="card-details">
        <p className="companyName bold m-0">{props.company}</p>
        <p className="itemName m-0">{props.item_name}</p>
        <div className="priceDetails">
          <span className="currentPrice bold">Rs. {props.current_price}</span>
          <span className="originalPrice">Rs. {props.original_price}</span>
          <span className="discountPercentage">
            ({props.discount_percentage}% OFF)
          </span>
        </div>
      </div>
      <div
        className="productAction"
        onClick={!isInTheBag ? addItem : deleteItem}
      >
        {!isInTheBag ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        )}
        <span>{!isInTheBag ? "ADD TO" : "REMOVE FROM"} BAG</span>
      </div>
    </div>
  );
}
