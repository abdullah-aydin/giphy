import {
  FETCH_TREND_GIF_BEGIN,
  FETCH_TREND_GIF_SUCCESS,
  FETCH_TREND_GIF_FAILURE,
  FETCH_MORE_GIF_SUCCESS,
  FETCH_SEARCH_GIF_SUCCESS,
} from "../types";

const initialState = {
  items: [],
  loading: false,
  error: null,
  pagination:[],
  value: null
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
        value:null
      };

    case FETCH_TREND_GIF_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
        value: null,
      };

    case FETCH_MORE_GIF_SUCCESS:
      return {
        ...state,
        loading: false,
        items: [...state.items, ...action.payload.data.data],
        pagination: action.payload.data.pagination,
        value:action.value
      };

    case FETCH_SEARCH_GIF_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.data.data,
        pagination: action.payload.data.pagination,
        value:action.value
      };

    default:
      return state;
  }
}