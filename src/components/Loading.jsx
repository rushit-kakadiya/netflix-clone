import { Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <div className="page_center">
      <div>
        {Array.from({ length: 5 }, (_, i) => (
          <Spinner
            key={i}
            animation="grow"
            variant="info"
            style={{ marginRight: "2px" }}
          />
        ))}
      </div>
    </div>
  );
}
