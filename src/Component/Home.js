import React, { useContext } from "react";
import { Store } from "../Context/ContextApi";
const Home = () => {
  const [Data] = useContext(Store);
  console.log(Data);
  return (
    <>
      <div className="Container">
        <div className="img">
          <div className="bigimg">
            <img
              src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/07/Jawan-Shah-Rukh-Khan.jpg?ssl=1&quality=80&w=f"
              alt="not found"
            ></img>
          </div>
          <div className="smallimg">
            <img
              src="https://th-i.thgim.com/public/incoming/9nydeq/article67283889.ece/alternates/FREE_1200/20230907010L.jpg"
              alt="not found"
              height="200px"
              width="300px"
            ></img>
            <img
              src="https://pbs.twimg.com/media/FgDsro7UUAAvTID?format=jpg&name=900x900"
              alt="not found"
              height="200px"
              width="300px"
            ></img>
          </div>
        </div>

        <h1 className="Latest">The Latest</h1>
        <div className="LatestDiv">
          {Data.filter((item) => item.id >= 72 && item.id <= 74).map(
            (item, index) => {
              return (
                <div key={index}>
                  <img
                    className="latestimage"
                    src={item.image}
                    alt="Not Found"
                  />
                  <div className="text">
                    <p>{item.name}</p>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>
        <h1 className="Latest">The Latest Article </h1>
        <div className="Adver">
          <div className="Articlelist">
            {Data.filter((item) => item.id >= 72 && item.id <= 80).map(
              (item, index) => {
                return (
                  <div key={index}>
                    <div className="Article">
                      <img
                        className="Latestimage"
                        src={item.image}
                        alt="Not Found"
                      />
                      <div className="Articletext">
                        <h1>{item.name}</h1>
                        <p className="text">{item.text}</p>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <div className="Advlatest">
            <div className="Advertisement">
              <h1>{"Please  for Advertisement"}</h1>
            </div>

            <div>
              <h1 className="Latest">Top Post</h1>
              {Data.filter((item) => item.id >= 72 && item.id <= 76).map(
                (item, index) => {
                  return (
                    <div key={index}>
                      <div className="Article">
                        <img
                          className="Latestimage"
                          src={item.image}
                          alt="Not Found"
                        />
                        <div className="text2">
                          <p>{item.name}</p>
                        </div>

                        <div className="number">
                          <h1>{index + 1}</h1>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div className="Slidder">
          {Data.filter((item) => item.id >= 72 && item.id <= 78).map(
            (item, index) => {
              return (
                <div key={index}>
                  <div className="Article">
                    <img
                      className="Latestimage"
                      src={item.image}
                      alt="Not Found"
                    />
                  </div>
                  <button></button>
                </div>
              );
            }
          )}
        </div>
        <h1 className="Latest"> Latest Stories</h1>
        <div className="LatestDiv">
          {Data.filter((item) => item.id >= 72 && item.id <= 74).map(
            (item, index) => {
              return (
                <div key={index}>
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
            }
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
