import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { MOVIE_DETAIL_URL } from "../API";
import noPoster from "../assets/no-poster.jpg";


const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${MOVIE_DETAIL_URL}/${id}`)
      .then((res) => {
        setMovieDetail(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="boddy">
    <div className="container">
      <div className="card">
      {movieDetail.image ? (
            <img src={movieDetail.image.original} alt="" className="img2"/>
          ) : (
            <img src={noPoster} alt="" className="img2"/>
          )}
      <div className="intro">
      <h1>{movieDetail.name}</h1>
      <p> <span>Summary:</span> {movieDetail.summary}</p>
      <p><span>Language:</span> {movieDetail.language}</p>
      <p> {movieDetail.premiered ? (
              <>
                <span>Premiered:</span> {movieDetail.premiered}
              </>
            ) : (
              <>
                <span>Premiered:</span> Not Available
              </>
            )}</p>
      <p>{movieDetail.rating && movieDetail.rating.average > 0 ? (
              <>
                <span>Rating:</span> {movieDetail.rating.average}
              </>
            ) : (
              <>
                <span>Rating:</span> 0.0
              </>
            )}</p>
      <p> <Link className="btn1" to={"/book/" + movieDetail.id}>Book movie ticket</Link></p>
      </div>
      </div>
    </div>
    </div>
   
  );
};

export default MovieDetail;