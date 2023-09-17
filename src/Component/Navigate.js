import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Store } from "../Context/ContextApi";

const Navigate = () => {
  const [newitem] = useContext(Store);
  const { id } = useParams();
  const itemId = parseInt(id, 10);
  const selectedItem = newitem.find((item) => item.id === itemId);
  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  return (
    <div key={selectedItem.id}>
      <p>{selectedItem.name}</p>
      <img
        className="latestimage"
        src={selectedItem.image}
        alt="Not Found"
        height="100px"
        width="200px"
      />
      <div className="text">
        <h2>{selectedItem.name}</h2>
        <p>{selectedItem.text}</p>
      </div>
    </div>
  );
};

export default Navigate;
