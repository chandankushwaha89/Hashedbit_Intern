import React from "react";
import movieData from "../constant/movie";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 15,
      }}
    >
      {movieData.map((movie, index) => (
        <Link key={index} height={500} to={`/movie/${movie.id}`}>
          <img src={movie.image} width={280} height={400} alt={movie.name} />
          <div style={{ fontWeight: "500", fontSize: 20 }}>{movie.name}</div>
        </Link>
      ))}
    </div>
  );
};
export default Home;