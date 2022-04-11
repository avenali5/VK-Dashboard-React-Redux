import { createSlice } from "@reduxjs/toolkit";
import * as faker from "faker";

const initialState = { followers: 0, percentage: 0 };

//las partes del slice
export const followersSlice = createSlice({
  name: "followers",
  initialState,
  reducers: {
    setFollowers: (state, action) => {
      state.followers = action.payload;
    },
    setPercentage: (state, action) => {
      state.percentage = action.payload;
    },
  },
});

//se exportan los reducers para manipularlos más abajo
export const { setFollowers, setPercentage } = followersSlice.actions;

//se exporta el reducer del slice
export default followersSlice.reducer;

//esta funcion debe retornar otra funcion, por eso el doble arrow
export const totalFollowers = () => (dispatch) => {
  dispatch(setFollowers(faker.datatype.number({ min: 70, max: 210 })));
  dispatch(
    setPercentage(faker.datatype.number({ min: -5, max: 4, precision: 0.01 }))
  );
};
