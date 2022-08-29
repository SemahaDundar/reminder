import "./container.css";
import React from "react";

const Container = ({ items }) => {
  return (
    <>
      {items.map((kisi) => {
        const { id, name, age, image } = kisi;
        return (
          <article key={id} className="kisi">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} yil</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Container;
