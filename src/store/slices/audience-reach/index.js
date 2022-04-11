import { createSlice } from "@reduxjs/toolkit";
import * as faker from "faker";

const initialState = {
  total: 0,
  followers: 0,
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
};

//las partes del slice
export const audienceSlice = createSlice({
  name: "audience",
  initialState,
  reducers: {
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setFollowers: (state, action) => {
      state.followers = action.payload;
    },
  },
});

//se exportan los reducers para manipularlos más abajo
export const { setTotal, setFollowers } = audienceSlice.actions;

//se exporta el reducer del slice
export default audienceSlice.reducer;

//esta funcion debe retornar otra funcion, por eso el doble arrow
export const setAudience = () => (dispatch) => {
  dispatch(
    setTotal(
      initialState.labels.map(() =>
        faker.datatype.number({ min: 200, max: 400 })
      )
    )
  );
  dispatch(
    setFollowers(
      initialState.labels.map(() =>
        faker.datatype.number({ min: 40, max: 180 })
      )
    )
  );
};
