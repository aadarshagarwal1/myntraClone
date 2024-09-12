export default function loader() {
  return (
    <div className="loader">
      <div className="bd-example">
        <div className="d-flex justify-content-center">
          <div
            className="spinner-border"
            role="status"
            style={{ height: "80px", width: "80px" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
