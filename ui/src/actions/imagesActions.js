import { FETCH_IMAGES } from "../types";

export const fetchImages = () => async (dispatch) => {
  const res = await fetch("http://localhost:5000/api/images");

  const data = await res.json();

  dispatch({
    type: FETCH_IMAGES,
    payload: data,
  });
};
