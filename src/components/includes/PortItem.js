import React from "react";

function PortItem({ link, title, image, catagory }) {
  return (
    <article className="port__item">
      <figure>
        <a href={link}>
          <img src={image} alt={title} />
        </a>
      </figure>
      <div className="text">
        <h3>{title}</h3>
        <p>{catagory}</p>
      </div>
    </article>
  );
}

export default PortItem;
