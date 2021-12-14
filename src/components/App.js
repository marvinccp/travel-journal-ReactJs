import React from "react";
import Navbar from "./navbar";
import Card from "./card";
import infoCards from "./infoCards";

export default function App() {
  const travelCards = infoCards.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div>
      <Navbar />
      <div className="container-card-app">{travelCards}</div>
    </div>
  );
}
