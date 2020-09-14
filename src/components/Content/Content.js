import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux/actions";
//styles
import "./Content.styles.scss";

function Content() {
  const { gifs, value } = useSelector((state) => ({
    gifs: state.gifsReducer.items,
    value: state.gifsReducer.value,
  }));

  const offset = gifs.length;
  const dispatch = useDispatch();

  useEffect(() => {
    allActions.trendGifsActions.trendGifs(dispatch);
  }, []);



  return (
    <React.Fragment>
      <div id="content">
        {gifs.map((data, index) => (
          <div className="box-gif" key={index}>
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
      <div className="button-area">
        <button
          className="button"
          onClick={() =>
            allActions.loadMoreActions.moreGifs(dispatch, offset, value)
          }
        >
          Load more...
        </button>
      </div>
    </React.Fragment>
  );
}
export default Content;
