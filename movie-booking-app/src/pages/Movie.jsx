import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import movieData from "../constant/movie";
const Movie = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const navigate = useNavigate();
  if (!id) return;
  useEffect(() => {
    if (id) setData(movieData[id - 1]);
  }, [id]);
  console.log(data);
  return (
    <div>
      <div style={{ fontWeight: "500", fontSize: 20 }}>{data?.name}</div>
      <img alt={data?.name} src={data?.image} width={200} height={300} />
      <div style={{ fontWeight: "500", fontSize: 20 }}>{data?.description}</div>
      <button onClick={() => navigate("/ticket-booking-form")}>
        Book ticket
      </button>
    </div>
  );
};

export default Movie;