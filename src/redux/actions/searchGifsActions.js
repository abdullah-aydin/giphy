import axios from "axios";
import { SITE_URL, API_KEY, LIMIT } from "../../constants";
import {
  FETCH_SEARCH_GIF_SUCCESS,
  FETCH_TREND_GIF_FAILURE as gifFailure,
} from "../types";

const searchGifs = async (dispatch, value) => {
  await request(dispatch, value);
};

function request(dispatch, value) {
console.log("value",value)
  axios
    .get(searchURL())
    .then((res) => {
      console.log("res", res);
      dispatch({
        type: FETCH_SEARCH_GIF_SUCCESS,
        payload: res,
        value:value
      });
    })
    .catch((err) => {
      dispatch({
        type: gifFailure,
        payload: [],
      });
    });

    // URL
  function searchURL() {
    return `${SITE_URL}/search?q=${value}&offset=0&limit=${LIMIT}&api_key=${API_KEY}`;
  }
}



export default {
  searchGifs,
};
