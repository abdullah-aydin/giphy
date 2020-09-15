import axios from "axios";
import { SITE_URL, API_KEY, LIMIT } from "../../constants";
import {
  FETCH_MORE_GIF_BEGIN,
  FETCH_MORE_GIF_SUCCESS,
  FETCH_TREND_GIF_FAILURE,
} from "../types";

let endPoint;

const moreGifs = async (dispatch, offset, value = null) => {
  dispatch({ type: FETCH_MORE_GIF_BEGIN });
  
  if (value != null) {
    endPoint = "search";
  } else {
    endPoint = "trending";
  }
  await request(dispatch, offset, value, endPoint);
};

function request(dispatch, offset, value, endPoint) {
  axios
    .get(loadMoreURL())
    .then((res) => {
      dispatch({
        type: FETCH_MORE_GIF_SUCCESS,
        payload: res,
        value: value,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_TREND_GIF_FAILURE,
        payload: [],
      });
    });

  // URL
  function loadMoreURL() {
    return `${SITE_URL}/${endPoint}?q=${value}&offset=${offset}&limit=${LIMIT}&api_key=${API_KEY}`;
  }
}

export default {
  moreGifs,
};
