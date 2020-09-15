import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  trendGifsAction,
  loadMoreAction,
  firstScrollAction,
} from "../../redux/actions";
//components
import Modal from "../Modal";
import Spinner from "../Spinner";
//styles
import "./Content.scss";

function Content() {
  const { gifs, value, scroll, loading, loadMore } = useSelector((state) => ({
    gifs: state.gifsReducer.items,
    value: state.gifsReducer.value,
    scroll: state.gifsReducer.scroll,
    loading: state.gifsReducer.loading,
    loadMore: state.gifsReducer.loadMore,
  }));

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  // data pass to modal component when onClick box-gif
  const [data, setData] = useState("");
  //item length
  const offset = gifs.length;

  //init fetch trending gifs
  useEffect(() => {
    trendGifsAction.trendGifs(dispatch);
  }, [dispatch]);

  //adding new item at the bottom the page
  if (scroll) {
    window.onscroll = function (ev) {
      if (
        window.innerHeight + Math.ceil(window.pageYOffset + 1) >=
        document.body.offsetHeight
      ) {
        loadMoreGifs();
        firstScrollAction.firstScroll(dispatch);
        window.onscroll = null;
      }
    };
  }

 
  //onClick load more button
  function loadMoreGifs() {
    loadMoreAction.moreGifs(dispatch, offset, value);
  }

  function openModal(data) {
    setData(data);
    setShow(true);
  }

  //box-gif default background color
  function chooseColor() {
    const colorPalette = [
      "#ffb25d",
      "#21f3c5",
      "#217bf3",
      "#ecf321",
      "#f32192",
      "#a621f3",
    ];

    let index = Math.floor(Math.random() * 6);
    let color = colorPalette[index];
    return color;
  }

  //animation duration second
  function animation(index) {
    if (index < 20) {
      return 0.2 * index + "s";
    } else {
      return "0s";
    }
  }

  return (
    <React.Fragment>
      {loading && <Spinner />}
      <div id="content">
        {gifs.map((data, index) => (
          <div
            className="box-gif"
            key={index}
            onClick={() => openModal(data)}
            style={{
              backgroundColor: chooseColor(),
              animationDuration: animation(index),
            }}
          >
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
      {loadMore && (
        <div style={{ marginTop: "30px", marginBottom: "30px" }}>
          <Spinner />
        </div>
      )}
      <div className="button-area">
        <button className="button" onClick={() => loadMoreGifs()}>
          Load more...
        </button>
      </div>
      <Modal show={show} setShow={setShow} data={data} />
    </React.Fragment>
  );
}
export default Content;
