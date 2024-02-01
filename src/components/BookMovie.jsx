import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MOVIE_DETAIL_URL } from "../API";
import noPoster from "../assets/no-poster.jpg";


const BookMovieTicket = () => {
  const [movieData, setMovieData] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    bookingDate: ""
  });

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${MOVIE_DETAIL_URL}/${id}`)
      .then((res) => {
        setMovieData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Details:", formData);
  };

  return (
    <div className="body1">
      <div className="login-box">
        <h2>{movieData.name}</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="date"
              name="bookingDate"
              value={formData.bookingDate}
              onChange={handleChange}
              required
            />
          </div>
          <a href="#" onClick={handleSubmit}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>
  );
};

export default BookMovieTicket;
