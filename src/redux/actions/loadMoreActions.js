import axios from "axios";
import { SITE_URL, API_KEY, LIMIT } from "../../constants";
import {
  FETCH_MORE_GIF_SUCCESS,
  FETCH_TREND_GIF_FAILURE,
} from "../types";

function request(dispatch, offset, value) {
  axios
    .get(searchURL())
    .then((res) => {
      dispatch({
        type: FETCH_MORE_GIF_SUCCESS,
        payload: res,
        value:value
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_TREND_GIF_FAILURE,
        payload: [],
      });
    });

  // URL
  function searchURL() {
    return `${SITE_URL}/search?q=${value}&offset=${offset}&limit=${LIMIT}&api_key=${API_KEY}`;
  }
}

const moreGifs = async (dispatch, offset, value = null) => {
  await request(dispatch, offset, value);
};

export default {
  moreGifs,
};
