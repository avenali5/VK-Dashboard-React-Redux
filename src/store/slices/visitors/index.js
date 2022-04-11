import { createSlice } from "@reduxjs/toolkit";
import * as faker from "faker";

const initialState = { visitors: 0, percentage: 0 };

//las partes del slice
export const visitorsSlice = createSlice({
  name: "visitors",
  initialState,
  reducers: {
    setVisitors: (state, action) => {
      state.visitors = action.payload;
    },
    setPercentage: (state, action) => {
      state.percentage = action.payload;
    },
  },
});

//se exportan los reducers para manipularlos más abajo
export const { setVisitors, setPercentage } = visitorsSlice.actions;

//se exporta el reducer del slice
export default visitorsSlice.reducer;

//esta funcion debe retornar otra funcion, por eso el doble arrow
export const totalVisitors = () => (dispatch) => {
  dispatch(setVisitors(faker.datatype.number({ min: 224, max: 368 })));
  dispatch(
    setPercentage(faker.datatype.number({ min: -2, max: 4, precision: 0.01 }))
  );
};
