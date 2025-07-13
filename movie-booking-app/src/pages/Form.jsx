import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [data, setData] = useState({ name: "", email: "", mobile: "" });
  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  const navigate = useNavigate();
  const handleBooking = (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.mobile) return;
    data.id = Math.random().toString(36).substr(2, 20);
    localStorage.setItem("data", JSON.stringify(data));
    navigate("/booking-successfull");
  };
  return (
    <form onSubmit={handleBooking}>
      <div>
        <label htmlFor="name" style={{ fontSize: 20, marginRight: 10 }}>
          Name
        </label>
        <input
          placeholder="Name"
          id="name"
          style={{ fontSize: 20 }}
          value={data.name}
          onChange={handleChange}
        />
      </div>
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <label
          htmlFor="email"
          style={{
            fontSize: 20,
            marginRight: 10,
          }}
        >
          Email
        </label>
        <input
          placeholder="Email"
          id="email"
          style={{ fontSize: 20 }}
          value={data.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="mobile" style={{ fontSize: 20, marginRight: 10 }}>
          Mobile{" "}
        </label>
        <input
          placeholder="Mobile"
          id="mobile"
          style={{ fontSize: 20 }}
          value={data.mobile}
          onChange={handleChange}
        />
      </div>
      <button style={{ marginTop: 10 }} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;