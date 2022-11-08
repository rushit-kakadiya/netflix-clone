import React, { memo } from "react";
import { Container } from "react-bootstrap";
import Catalog from "../components/Catalog";
import ErrorPage from "../components/ErrorPage";
import Loading from "../components/Loading";
import { useAxios } from "../hooks/useAxios";
import { genre_list_api } from "../util/constants";

const Home = () => {
  const { loading, error, data } = useAxios(genre_list_api);

  if (loading) return <Loading />;
  if (error) return <ErrorPage errorMessage={error} />;
  if (data?.genres?.length > 0)
    return (
      <Container>
        {data?.genres?.map(({ id, name }) => (
          <Catalog key={id} catalogName={name} catalogId={id} />
        ))}
      </Container>
    );
};

export default memo(Home);
