import { configureStore } from "@reduxjs/toolkit";
//slices
import friends from "./slices/friends";
import visitors from "./slices/visitors";
import followers from "./slices/followers";
import audience from "./slices/audience-reach";
import device from "./slices/device";
import genderAge from "./slices/gender-age";
import geo from "./slices/geo";

export default configureStore({
  reducer: {
    friends,
    visitors,
    followers,
    audience,
    device,
    genderAge,
    geo,
  },
});
