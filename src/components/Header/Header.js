import React from "react";
import "./Header.scss";
import { searchGifsAction, trendGifsAction } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

function Header() {
  const { state, value } = useSelector((state) => ({
    state: state.gifsReducer.pagination,
    value: state.gifsReducer.value,
  }));
  const dispatch = useDispatch();
  //scroll top when there is new value
  function scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function handleChange(e) {
    let values = e.target.value;
    scrollTop();

    if (values) {
      searchGifsAction.searchGifs(dispatch, values);
    } else {
      trendGifsAction.trendGifs(dispatch);
    }
  }

  //onClick #Trending
  function onClick(dispatch) {
    trendGifsAction.trendGifs(dispatch);
    document.getElementById("search").value = "";
  }

  return (
    <div id="header">
      <div className="grid-container">
        <h1>Giphy</h1>
        <div>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search all the GIFs"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="grid-subcontainer">
        <hr className="grid-hr" />
        <div className="grid-sub">
          {value ? (
            <h4 className="grid-h4">
              Search
              <span className="grid-span" onClick={() => onClick(dispatch)}>
                #Trending
              </span>
            </h4>
          ) : (
            <h4 className="grid-h4"> Trending </h4>
          )}
          <p className="grid-p">
            Showing 1-{state.count + state.offset} of {state.total_count}{" "}
            results
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
