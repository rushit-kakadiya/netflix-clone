import React, { Fragment } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useAxios } from "../hooks/useAxios";
import { discover_movie, img_url } from "../util/constants";
import ErrorPage from "./ErrorPage";
import Loading from "./Loading";

export default function Catellog(props) {
  const { loading, error, data, fetchData } = useAxios(
    discover_movie + props?.catalogId
  );

  if (loading) return <Loading />;
  if (error) return <ErrorPage errorMessage={error} />;
  if (data?.results?.length > 0) {
    return (
      <Fragment>
        <h3 className="my-3">{props?.catalogName}</h3>
        <Row
          className="catalog_row"
          onScroll={(e) => {
            let totalWidth = parseInt(e.target.scrollWidth);
            let shiftingWidth =
              parseInt(e.target.scrollLeft) +
              parseInt(e.target.clientWidth) +
              data?.page;
            totalWidth <= shiftingWidth &&
              fetchData(
                discover_movie + props?.catalogId + "&page=" + (data?.page + 1),
                data
              );
          }}
        >
          <Col xxxl={2} xxl={2} xl={2} lg={2} md={3} sm={5}>
            {data?.results?.map((el, i) => (
              <Image
                key={i + "catalog"}
                style={{ marginRight: "20%", marginBottom: "10%" }}
                src={`${img_url}${el?.poster_path || ""}`}
                alt={el?.title || "Card image"}
                thumbnail={true}
              />
            ))}
          </Col>
        </Row>
      </Fragment>
    );
  }

  return <div className="page_center">No Data Found</div>;
}
