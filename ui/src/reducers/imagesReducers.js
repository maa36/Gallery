  
import {
    FETCH_IMAGES
  } from "../types";

  export const imagesReducer = (state = {images : []}, action) => {
    switch (action.type) {
        case FETCH_IMAGES:
      return { images: action.payload };
    default:
      return state;
  }
};