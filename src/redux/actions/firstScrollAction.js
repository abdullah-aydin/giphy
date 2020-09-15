import { FIRST_SCROLL_FETCH } from "../types";

const firstScroll = async (dispatch) => {
  dispatch({
    type: FIRST_SCROLL_FETCH,
  });
};

export default {
  firstScroll,
};
