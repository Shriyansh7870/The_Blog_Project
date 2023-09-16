import React, { useContext } from "react";
import { Store } from "../Context/ContextApi";
const Fitness = () => {
  const [Data] = useContext(Store);
  console.log(Data);
  return (
    <>
      <h1 className="Latest">Technology Article </h1>
      <div className="Adver">
        <div className="Articlelist">
          {Data.filter((item) => item.category === "Fitness").map(
            (item, index) => {
              return (
                <div key={index}>
                  <div className="Article">
                    <img
                      className="latestimage"
                      src={item.image}
                      alt="Not Found"
                      height="100px"
                      width="200px"
                    />
                    <div className="text">
                      <h2>{item.title}</h2>
                      <p>{item.content}</p>
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
              {Data.filter((item) => item.id >= 43 && item.id <= 43).map(
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
                          <p>{item.content}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            {Data.filter((item) => item.id >= 42 && item.id <= 50).map(
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
                        <p>{item.content}</p>
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

export default Fitness;
