import React from "react";
import Header from "../Component/header.jsx";

function Home() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/736x/41/19/5c/41195c2f3ab1f8b6c6d8df337c5d4764.jpg)",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Header />
    </div>
  );
}

export default Home;
