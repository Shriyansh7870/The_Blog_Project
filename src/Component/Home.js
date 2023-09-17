import React, { useContext } from "react";
import { Store } from "../Context/ContextApi";

const Home = () => {
  const [Data] = useContext(Store);
  return (
    <div className="Container">
      <div className="img">
        <div className="bigimg">
          <img
            src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/07/Jawan-Shah-Rukh-Khan.jpg?ssl=1&quality=80&w=f"
            alt="not found"
          />
        </div>
        <div className="smallimg">
          <img
            src="https://th-i.thgim.com/public/incoming/9nydeq/article67283889.ece/alternates/FREE_1200/20230907010L.jpg"
            alt="not found"
            height="200px"
            width="450px"
          />
          <img
            src="https://pbs.twimg.com/media/FgDsro7UUAAvTID?format=jpg&name=900x900"
            alt="not found"
            height="200px"
            width="550px"
          />
        </div>
      </div>

      <h1 className="Latest">The Latest</h1>
      <div className="LatestDiv">
        {Data.filter((item) => item.id >= 72 && item.id <= 74).map(
          (item, index) => {
            const words = item.text?.split(" ") || [];
            const displayText =
              words.length < 5
                ? `${words.slice(0, 5).join(" ")}...`
                : item.name || "";
            const word = item.name?.split(" ") || [];
            const displayText1 =
              words.length < 20
                ? `${word.slice(0, 20).join(" ")}...`
                : item.name || "";
            return (
              <div key={index}>
                <img className="latestimage" src={item.image} alt="Not Found" />
                <div className="text">
                  <p className="movieName">{item.name?.slice(0, 29) || ""}</p>
                  <p>{displayText1}</p>
                  <p>{item.text?.slice(0, 40) || ""}...</p>
                  <p>{displayText}</p>
                </div>
              </div>
            );
          }
        )}
      </div>
      <h1 className="Latest">The Latest Article</h1>
      <div className="Adver">
        <div className="Articlelist">
          {Data.filter((item) => item.id >= 72 && item.id <= 77).map(
            (item, index) => {
              const wordnext2 = item.name?.split(" ") || [];
              const displayText3 =
                wordnext2.length < 20
                  ? `${wordnext2.slice(0, 20).join(" ")}...`
                  : item.name || "";
              return (
                <div key={index}>
                  <div className="Article">
                    <img
                      className="Latestimage"
                      src={item.image}
                      alt="Not Found"
                    />
                    <div className="Articletext">
                      <h1>{displayText3}</h1>
                      <p className="text">{item.text?.slice(0, 120) || ""}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
          <div>
            <h1>Load_More</h1>
          </div>
          <img
            className="divinner"
            src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/07/Jawan-Shah-Rukh-Khan.jpg?ssl=1&quality=80&w=f"
            alt="not found"
          />
        </div>
        <div className="Advlatest">
          <div className="Advertisement">
            <h1>{"Please for Advertisement"}</h1>
          </div>

          <div>
            <h1 className="Latest">Top Post</h1>
            {Data.filter((item) => item.id >= 72 && item.id <= 76).map(
              (item, index) => {
                const wordnext = item.text?.split(" ") || [];
                const displayText2 =
                  wordnext.length < 5
                    ? `${wordnext.slice(0, 5).join(" ")}...`
                    : item.name || "";
                return (
                  <div key={index}>
                    <div className="Article">
                      <img
                        className="Latestimage2"
                        src={item.image}
                        alt="Not Found"
                      />
                      <div className="text2">
                        <h3>{item.name}</h3>
                        <p>{displayText2}</p>
                        <p>{item.text?.slice(0, 40) || ""}</p>
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

      <h1 className="Latest">Latest Stories</h1>
      <div className="LatestDiv">
        {Data.filter((item) => item.id % 10 === 0 && item.id <= 30).map(
          (item, index) => {
            const words = item.text?.split(" ") || [];
            const displayText =
              words.length < 5
                ? `${words.slice(0, 5).join(" ")}...`
                : item.name || "";
            const word = item.name?.split(" ") || [];
            const displayText1 =
              words.length < 20
                ? `${word.slice(0, 20).join(" ")}...`
                : item.name || "";
            return (
              <div key={index}>
                <img
                  className="latestimage4"
                  src={item.image}
                  alt="Not Found"
                  height="100px"
                  width="200px"
                />
                <div className="text">
                  <p className="movieName">{item.name?.slice(0, 29) || ""}</p>
                  <p>{displayText1}</p>
                  <p>{item.text?.slice(0, 40) || ""}...</p>
                  <p>{displayText}</p>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Home;
