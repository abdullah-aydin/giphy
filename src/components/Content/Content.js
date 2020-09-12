import React, { useState, useEffect } from "react";
import axios from "axios";
//styles
import "./Content.styles.scss";

function Content() {
  const [trendingGifs, setTrendingGifs] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.giphy.com/v1/gifs/trending?api_key=jr82dM0r3AjeUtsqVnCW5Rgojv8pO4DZ&limit=20&rating=g"
      )
      .then((res) => {
        console.log(res.data.data);
        setTrendingGifs(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="content">
      {trendingGifs.map((data) => (
        <div className="box-gif" key={data.id}>
          <img
            src={data.images.preview_gif.url}
            alt={data.title}
            className="gif"
          />
          <div className="gif-info">
            <div className="info">
              <p className="data-title">{data.title}</p>
              {data.username !== "" && (
                <a href={data.user.profile_url} className="data-user">
                  <img src={data.user.avatar_url} alt="" className="avatar" />
                  <p className="username">{data.username}</p>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Content;
