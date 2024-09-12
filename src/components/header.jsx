import logo from "../assets/myntra_logo.webp";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function header() {
  const bagItems = useSelector((store) => store.bagItemsSlice);
  const displayBagItemsCountToken = bagItems.length > 0 ? true : false;
  return (
    <div className="header">
      <header className="p-3 mb-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">
            <div className="flex-centered me-lg-auto">
              <Link
                to="/myntraClone/home"
                className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
              >
                <img
                  className="bi me-2"
                  width="40"
                  height="32"
                  role="img"
                  aria-label="Bootstrap"
                  src={logo}
                />
              </Link>

              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <a
                    href="#"
                    className="nav-link px-2 link-body-emphasis "
                    style={{ fontSize: "0.8rem", fontWeight: "bolder" }}
                  >
                    MEN
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="nav-link px-2 link-body-emphasis "
                    style={{ fontSize: "0.8rem", fontWeight: "bolder" }}
                  >
                    WOMEN
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="nav-link px-2 link-body-emphasis "
                    style={{ fontSize: "0.8rem", fontWeight: "bolder" }}
                  >
                    KIDS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="nav-link px-2 link-body-emphasis "
                    style={{ fontSize: "0.8rem", fontWeight: "bolder" }}
                  >
                    HOME & LIVING
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="nav-link px-2 link-body-emphasis "
                    style={{ fontSize: "0.8rem", fontWeight: "bolder" }}
                  >
                    BEAUTY
                  </a>
                </li>
                <li style={{ position: "relative" }}>
                  <a
                    href="#"
                    className="nav-link px-2 link-body-emphasis "
                    style={{ fontSize: "0.8rem", fontWeight: "bolder" }}
                  >
                    STUDIO
                  </a>
                  <p
                    style={{
                      position: "absolute",
                      top: "0.1rem",
                      right: "-1rem",
                      fontSize: "0.6rem",
                      color: "red",
                    }}
                  >
                    NEW
                  </p>
                </li>
              </ul>
            </div>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <div style={{ position: "relative" }}>
                <input
                  type="search"
                  className="form-control"
                  placeholder="       Search..."
                  aria-label="Search"
                  id="search"
                />
                <label
                  htmlFor="search"
                  href="#"
                  className="text-decoration-none"
                  style={{
                    position: "absolute",
                    top: "0.35rem",
                    left: "1rem",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
                  </svg>
                </label>
              </div>
            </form>

            <div className="dropdown text-end">
              <div className="flex-centered g-1rem">
                <div className="header-options-container">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person"
                      viewBox="0 0 16 16"
                      id="profile"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    </svg>
                  </a>
                  <label className="header-option-labels" htmlFor="profile">
                    Profile
                  </label>
                </div>
                <div className="header-options-container">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-heart"
                      viewBox="0 0 16 16"
                      id="wishlist"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                    </svg>
                  </a>
                  <label className="header-option-labels" htmlFor="profile">
                    Wishlist
                  </label>
                </div>
                <div className="header-options-container">
                  <Link to="/myntraClone/bag" id="bag">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="black"
                        className="bi bi-bag"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                      </svg>
                      {displayBagItemsCountToken && (
                        <div className="bagContentCountToken">
                          <span>{bagItems.length}</span>
                        </div>
                      )}
                    </div>
                  </Link>
                  <label className="header-option-labels" htmlFor="bag">
                    Bag
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
