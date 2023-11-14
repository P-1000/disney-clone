import React from "react";
import { useState, useEffect } from "react";
import DetailsMain from "../Details/DetailsMain";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const DetailsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id, type } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=21958744bdcd83994642863edf06f583`
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, [id, type]);

  if (loading) return <div className="text-white pt-96">Loading...</div>;

  return (
    <Container>
      <div className="">
        <div className="pt-16">
          <DetailsMain data={data} type={type} />
        </div>
      </div>
    </Container>
  );
};

export default DetailsPage;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;
  display: block;

  &:before {
    background: url("../images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: 0;  // Adjusted z-index value
    bottom: 0;
  }
`;

