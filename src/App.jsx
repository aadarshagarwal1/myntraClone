import Header from "./components/header";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { itemsSliceActions } from "./store/itemsSlice";
import "../src/App.css";
import { fetchStatusActions } from "./store/fetchStatusSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/loader";
export default function app() {
  const dispatch = useDispatch();
  const fetchStatus = useSelector((store) => store.fetchStatusSlice);
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    else {
      fetch("https://myntra-clone-backend-rho.vercel.app/")
        .then((res) => res.json())
        .then((obj) => {
          console.log(obj);
          dispatch(itemsSliceActions.addInitialItem(obj));
          dispatch(fetchStatusActions.checkFetchDone());
        });
    }
    return () => {};
  }, []);
  return (
    <div className="app">
      <Header />
      {!fetchStatus.fetchDone ? <Loader /> : <Outlet />}
      <Footer />
    </div>
  );
}
