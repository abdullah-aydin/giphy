import axios from "axios";
import { SITE_URL, API_KEY, LIMIT } from "../../constants";
import {
  FETCH_TREND_GIF_BEGIN,
  FETCH_TREND_GIF_SUCCESS,
  FETCH_TREND_GIF_FAILURE,
} from "../types";

const trendGifs = async (dispatch) => {
  dispatch({ type: FETCH_TREND_GIF_BEGIN });
  await request(dispatch, FETCH_TREND_GIF_SUCCESS);
};

function request(dispatch) {
  axios
    .get(trendURL())
    .then((res) => {
      dispatch({
        type: FETCH_TREND_GIF_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_TREND_GIF_FAILURE,
        payload: [],
      });
    });

  // URL
  function trendURL() {
    return `${SITE_URL}/trending?q=null&offset=0&limit=${LIMIT}&api_key=${API_KEY}`;
  }
}

export default {
  trendGifs,
};

// function getURL(endpoint, offset = 0, value = null) {
//   return `${SITE_URL}/${endpoint}?q=${value}&offset=${offset}&limit=${LIMIT}&api_key=${API_KEY}`;
// }

// function request(dispatch, type, offset = 0, value = null) {
//   let url;

//   console.log("value", value);

//   if (type === trendSuccess) {
//     url = getURL("trending");
//   } else if (type === moreTrend) {
//     url = getURL("trending", offset);
//   } else if (type === searchGif) {
//     url = getURL("search", offset, value);
//     getURL(value, 0);
//   }

//   console.log(url, value);

//   axios
//     .get(url)
//     .then((res) => {
//       dispatch({
//         type: type,
//         payload: res,
//       });
//     })
//     .catch((err) => {
//       dispatch({
//         type: gifFailure,
//         payload: [],
//       });
//     });
// }

// const loadMoreGifs = async (dispatch, offset) => {
//   await request(dispatch, moreTrend, offset);
// };

// export default {
//   trendGifs,
//   loadMoreGifs,
//   searchGifs,
// };
