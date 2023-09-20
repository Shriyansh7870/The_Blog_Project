import React, { useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Store } from "../Context/ContextApi";

const Navigate = () => {
  const [newitem] = useContext(Store);
  const { id } = useParams();
  const itemId = parseInt(id);
  const selectedItem = newitem.find((item) => item.id === itemId);
  const categorynew = selectedItem ? selectedItem.category : "";
  const relatedItems = newitem
    .filter(
      (item) =>
        item.category === categorynew &&
        (item.id % 5 === 1 || item.id % 3 === 2 || item.id % 3 === 0)
    )
    .slice(0, 3);
  console.log(categorynew);

  return (
    <div>
      <div className="ParentTop">
        <div className="leftDetail">
          <div className="Like">
            <h2>
              <i className="fa-solid fa-thumbs-up"></i>
              LIKE...
            </h2>
            <h2>
              <i className="fa-solid fa-share-nodes"></i>SHARE...
            </h2>
          </div>
        </div>
        <div className="detail">
          <h1>{selectedItem.name}</h1>
          <h1>{selectedItem.title}</h1>
          <div className="Profile">
            <div className="Prof">
              <h4>
                <i className="fa-solid fa-user">
                  <span className="small">Shriyansh kumar</span>
                </i>
              </h4>
            </div>
            <div className="icons">
              <h2>
                <i className="fa-brands fa-square-instagram"></i>
              </h2>
              <h2>
                <i className="fa-brands fa-github"></i>
              </h2>
              <h2>
                <i className="fa-brands fa-facebook"></i>
              </h2>
            </div>
          </div>
          <img
            className="NavigateImg"
            src={selectedItem.image}
            alt="not found"
            height="420px"
            width="550px"
          />
          <br />
          <h2>{selectedItem.text}</h2>
          <h2>{selectedItem.content}</h2>
        </div>
        <div className="rightDetails"></div>
      </div>
      <div className="LatestDiv">
        {relatedItems.map((item, index) => (
          <div key={index} className="HomeLatest">
            <NavLink to={`/Navigate/${item.id}`}>
              <img className="latestimage" src={item.image} alt="Not Found" />
              <div className="text">
                <h2>{item.name}</h2>
                <p>{item.text.slice(0, 135)}..</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigate;
