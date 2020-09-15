import {
  FETCH_TREND_GIF_BEGIN,
  FETCH_TREND_GIF_SUCCESS,
  FETCH_MORE_GIF_BEGIN,
  FETCH_MORE_GIF_SUCCESS,
  FETCH_SEARCH_GIF_SUCCESS,
  FIRST_SCROLL_FETCH,
  FETCH_TREND_GIF_FAILURE,
} from "../types";

const initialState = {
  items: [],
  loading: false,
  loadMore: false,
  error: null,
  pagination: [],
  value: null,
  scroll: true,
};

export default function gifs(state = initialState, action) {
  switch (action.type) {
    case FETCH_TREND_GIF_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_TREND_GIF_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.data.data,
        pagination: action.payload.data.pagination,
        value: null,
      };

    case FETCH_MORE_GIF_BEGIN:
      return {
        ...state,
        loadMore: true,
      };

    case FETCH_MORE_GIF_SUCCESS:
      return {
        ...state,
        loading: false,
        loadMore: false,
        scroll: false,
        items: [...state.items, ...action.payload.data.data],
        pagination: action.payload.data.pagination,
        value: action.value,
      };

    case FETCH_SEARCH_GIF_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.data.data,
        pagination: action.payload.data.pagination,
        value: action.value,
        scroll: true,
      };

    case FIRST_SCROLL_FETCH:
      return {
        ...state,
        scroll: false,
      };

    case FETCH_TREND_GIF_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
        value: null,
      };
    default:
      return state;
  }
}
