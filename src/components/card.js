import React from "react";

export default function Card(props) {
  console.log(props.item.img);
  return (
    <div className="container-card-app">
      <div className="cards-container">
        <img src={`../assets/${props.item.img}`} alt="" />
        <section className="card-header-text">
          <img
            className="card-location-icon"
            src={"/assets/icono-location.png"}
            alt="icono-location"
          />
          <h3>{props.item.country}</h3>
          <h4>View on Google Maps</h4>
        </section>
        <div className="description-container">
          <h1>{props.item.place}</h1>
          <small className="small">{props.item.date}</small>
          <p>{props.item.description}</p>
        </div>
      </div>
    </div>
  );
}
