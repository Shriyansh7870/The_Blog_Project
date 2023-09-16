import React, { useContext } from "react";
import { Store } from "../Context/ContextApi";
import { NavLink } from "react-router-dom";
const Technology = () => {
  const [Data] = useContext(Store);
  console.log(Data);
  return (
    <>
      <h1 className="Latest">Technology Article </h1>
      <div className="Adver">
        <div className="Articlelist">
          {Data.filter((item) => item.category === "Technology").map(
            (item, index) => {
              return (
                <div key={index}>
                  <NavLink to={`/Navigate/${item.id}`}>
                    <div className="Article">
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
                  </NavLink>
                </div>
              );
            }
          )}
        </div>
        <div className="Advlatest">
          <div>
            <h1 className="Latest">Top Post</h1>
            <div>
              {Data.filter((item) => item.id >= 29 && item.id <= 29).map(
                (item, index) => {
                  return (
                    <div key={index}>
                      <div className="Article">
                        <img
                          className="singleimg"
                          src={item.image}
                          alt="Not Found"
                        />
                        <div className="Articletext1">
                          <p>{item.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            {Data.filter((item) => item.id >= 30 && item.id <= 35).map(
              (item, index) => {
                return (
                  <div key={index}>
                    <div className="Article">
                      <img
                        className="underimg"
                        src={item.image}
                        alt="Not Found"
                      />
                      <div className="Articletext">
                        <p>{item.text}</p>
                      </div>

                      <div>
                        <h1>{index + 1}</h1>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
            <div className="Advertisement">
              <h1>{"Please  for Advertisement"}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
