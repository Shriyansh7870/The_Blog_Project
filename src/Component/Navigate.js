import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Store } from "../Context/ContextApi";

const Navigate = () => {
  const [newitem] = useContext(Store);
  const { id } = useParams();

  console.log(id);

  return (
    <>
      {newitem
        .filter((item) => item.id == id)
        .map((item, index) => {
          return (
            <div key={index}>
              <p>{item.name}</p>
              <img
                className="latestimage"
                src={item.image}
                alt="Not Found"
                height="100px"
                width="200px"
              />
              <div className="text">
                <h2>{item.name}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Navigate;
