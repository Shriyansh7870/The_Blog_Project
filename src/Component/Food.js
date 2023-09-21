import React, { useContext } from "react";
import { Store } from "../Context/ContextApi";
import { NavLink } from "react-router-dom";
const Food = () => {
  const [Data] = useContext(Store);

  console.log(Data);

  return (
    <>
      <h1 className="Latest">Food Articles</h1>
      <div className="Food">
        <div className="Adver">
          <div className="Articlelist">
            {Data.filter((item) => item.id >= 57 && item.id <= 64).map(
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
                          <p>{item.text.slice(0, 70)}...</p>
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
                {Data.filter((item) => item.id >= 60 && item.id <= 60).map(
                  (item, index) => (
                    <div key={index}>
                      <NavLink to={`/Navigate/${item.id}`}>
                        <div className="Article ">
                          <img
                            className="singleImageForAll"
                            src={item.image}
                            alt="Not Found"
                          />
                          <div className="Articletext Allone">
                            <h2>{item.name}</h2>
                            <p>{item.text.slice(0, 40)}</p>
                            <div className="number">
                              <p>{index + 1}</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  )
                )}
              </div>
              {Data.filter((item) => item.id <= 70 && item.id >= 65).map(
                (item, index) => (
                  <div key={index} className="toppostdiv">
                    <NavLink to={`/Navigate/${item.id}`}>
                      <div className="Article">
                        <img
                          className="bollyimg"
                          src={item.image}
                          alt="Not Found"
                          height="100px"
                          width="200px"
                        />
                        <div className="Articletext Allone1">
                          <h2>{item.name}</h2>
                          <p>{item.text.slice(0, 80)}</p>
                        </div>
                        <div className="number">
                          <h1>{index + 2}</h1>
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
      </div>
    </>
  );
};

export default Food;
