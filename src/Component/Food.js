import React, { useContext } from "react";
import { Store } from "../Context/ContextApi";
import { NavLink } from "react-router-dom";
const Food = () => {
  const [Data] = useContext(Store);

  console.log(Data);

  return (
    <>
      <h1 className="Latest">Technology Articles</h1>

      <div className="Adver">
        <div className="Articlelist">
          {Data.filter((item) => item.id >= 57 && item.id <= 67).map(
            (item, index) => (
              <div key={index}>
                <NavLink to={`/Navigate/${item.id}`}>
                  <div className="Article">
                    <img
                      className="FitnessimageAll"
                      src={item.image}
                      alt="Not Found"
                    />
                    <div className="text">
                      <div className="Articletext">
                        <h2>{item.name}</h2>
                        <p>{item.text.slice(0, 180)}...</p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            )
          )}
        </div>
        <div className="Advlatest">
          <div>
            <h1 className="Latest">Top Posts</h1>
            <div>
              {Data.filter((item) => item.id >= 57 && item.id <= 57).map(
                (item, index) => (
                  <div key={index}>
                    <NavLink to={`/Navigate/${item.id}`}>
                      <div className="Article Allone1">
                        <img
                          className="singleImageForAll"
                          src={item.image}
                          alt="Not Found"
                        />
                        <div className="Articletext Allone">
                          <h2>{item.name}</h2>
                          <p>{item.text.slice(0, 60)}</p>
                          <p>{index + 1}</p>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                )
              )}
            </div>
            {Data.filter((item) => item.id >= 58 && item.id <= 61).map(
              (item, index) => (
                <div key={index}>
                  <NavLink to={`/Navigate/${item.id}`}>
                    <div className="Article">
                      <img
                        src={item.image}
                        alt="Not Found"
                        height="100px"
                        width="200px"
                      />
                      <div className="Articletext">
                        <h2>{item.name}</h2>
                        <p>{item.text.slice(0, 80)}</p>
                        <p>{index + 2}</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              )
            )}
            <div className="Advertisement">
              <h1>{"Please for Advertisement"}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Food;
