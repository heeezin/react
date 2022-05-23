import React from "react";
import PortItem from "./PortItem";

function PortCont({ ports }) {
  return (
    <section className="port__cont">
      <div className="container">
        <div className="port__inner">
          {ports.map((port) => (
            <PortItem
              key={port.id}
              link={port.link}
              title={port.title}
              image={port.image}
              catagory={port.catagory}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortCont;
