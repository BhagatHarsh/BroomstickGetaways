import Navbar from "./BasicExample.js";
import FrontImage from "./FrontImage.js";
import CardContainer from "./CardContainer.js";
import React, { useState, useEffect } from "react";
import Footer from "./Footer.js";
import ReviewShowCard from "./ReviewShowCard.js";
import "./Home.css";
const DOMAIN = process.env.REACT_APP_DOMAIN;
console.log("DOMAIN: " + DOMAIN);

async function getUser() {
  const token = localStorage.getItem("token");
  const response = await fetch(DOMAIN + "profile", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 200) {
    const data = await response.json();
    console.log(data);
    return data;
  } else {
    return null;
  }
}

async function getReviews() {
  const response = await fetch( DOMAIN + "reviews", {
    method: "GET",
  });

  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    return null;
  }
}

function Home() {
  const [data, setData] = useState(null);
  const [review, setReview] = useState(null);
  useEffect(() => {
    getUser().then((userData) => setData(userData));
  }, []);

  useEffect(() => {
    getReviews().then((review) => setReview(review));
  }, []);

  console.log("rev" + review);

  if (review === null) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Navbar data={data} />
      <FrontImage />
      <div>
      <CardContainer />
      </div>
      <div style={{backgroundColor: 'white', padding: '10px'}}>
      <h2 style={{ color: '#008000', fontSize: '24px', backgroundColor: 'white', textAlign: 'center', padding: '10px', borderRadius: '5px', fontWeight: 'bold' }}>RECENT REVIEWS</h2>
<div style={{ overflowY: 'auto', maxHeight: '500px', backgroundColor: 'white' }}>
  {review.map((rev) => (
    <ReviewShowCard review={rev} />
  ))}
</div>

</div>





      <Footer />
    </>
  );
}

export default Home;
