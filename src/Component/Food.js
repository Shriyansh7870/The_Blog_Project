import React, { useContext } from "react";
import { Store } from "../Context/ContextApi";
import { useNavigate } from "react-router-dom";

const Food = () => {
  const [Data] = useContext(Store);
  const navigate = useNavigate();
  console.log(Data);

  return (
    <>
      <h1 className="Latest">Technology Articles</h1>

      <div className="Adver">
        <div className="Articlelist">
          {Data.filter((item) => item.category === "Food").map(
            (item, index) => (
              <div key={index} onClick={() => navigate("/Food")}>
                <div className="Article">
                  <img
                    className="Article"
                    src={item.image}
                    alt="Not Found"
                    height="100px"
                    width="200px"
                  />
                  <div className="text">
                    <div className="Articletext">
                      <h2>{item.name}</h2>
                      <p>{item.text.slice(0, 60)}...</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div className="Advlatest">
          <div>
            <h1 className="Latest">Top Posts</h1>
            <div>
              {Data.filter((item) => item.id >= 57 && item.id <= 57).map(
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
            {Data.filter((item) => item.id >= 58 && item.id <= 61).map(
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
              <h1>{"Please for Advertisement"}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Food;
