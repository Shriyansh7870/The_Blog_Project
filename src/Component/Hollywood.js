import React, { useContext } from "react";
import { Store } from "../Context/ContextApi";
const Hollywood = () => {
  const [Data] = useContext(Store);
  console.log(Data);
  return (
    <>
      <h1 className="Latest">Technology Article </h1>
      <div className="Adver">
        <div className="Articlelist">
          {Data.filter((item) => item.category === "Hollywood").map(
            (item, index) => {
              return (
                <div key={index}>
                  <div className="Article">
                    <img
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
                </div>
              );
            }
          )}
        </div>
        <div className="Advlatest">
          <div>
            <h1 className="Latest">Top Post</h1>
            <div>
              {Data.filter((item) => item.id >= 16 && item.id <= 16).map(
                (item, index) => {
                  return (
                    <div key={index}>
                      <div className="Article">
                        <img
                          src={item.image}
                          alt="Not Found"
                          height="100px"
                          width="200px"
                        />
                        <div className="Articletext">
                          <p>{item.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            {Data.filter((item) => item.id >= 17 && item.id <= 21).map(
              (item, index) => {
                return (
                  <div key={index}>
                    <div className="Article">
                      <img
                        src={item.image}
                        alt="Not Found"
                        height="100px"
                        width="200px"
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

export default Hollywood;
