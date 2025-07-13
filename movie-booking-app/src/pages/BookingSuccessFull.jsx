import React, { useEffect, useState } from "react";

const BookingSuccessFull = () => {
  const [data, setData] = useState({ id: "", name: "", email: "", mobile: "" });
  const fetchData = () => setData(JSON.parse(localStorage.getItem("data")));
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div style={{ fontWeight: "500", fontSize: 20 }}>
        Booking ID : #{data?.id}
      </div>
      <div style={{ fontWeight: "500", fontSize: 20 }}>Name : {data?.name}</div>
      <div style={{ fontWeight: "500", fontSize: 20 }}>
        Email : {data?.email}
      </div>
      <div style={{ fontWeight: "500", fontSize: 20 }}>
        Mobile : {data?.mobile}
      </div>
    </div>
  );
};

export default BookingSuccessFull;