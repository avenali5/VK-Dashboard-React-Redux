import { createSlice } from "@reduxjs/toolkit";
import * as faker from "faker";

const initialState = {
  labels: ["<18", "18-21", "21-24", "24-27", "30-35", "35-40", ">40"],
  women: 0,
  men: 0,
};

//las partes del slice
export const genderAgeSlice = createSlice({
  name: "genderAge",
  initialState,
  reducers: {
    setWomen: (state, action) => {
      state.women = action.payload;
    },
    setMen: (state, action) => {
      state.men = action.payload;
    },
  },
});

//se exportan los reducers para manipularlos más abajo
export const { setWomen, setMen } = genderAgeSlice.actions;

//se exporta el reducer del slice
export default genderAgeSlice.reducer;

//esta funcion debe retornar otra funcion, por eso el doble arrow
export const setGenderAge = () => (dispatch) => {
  dispatch(
    setWomen(
      initialState.labels.map(() =>
        faker.datatype.number({ min: 200, max: 400 })
      )
    )
  );
  dispatch(
    setMen(
      initialState.labels.map(() =>
        faker.datatype.number({ min: 20, max: 600 })
      )
    )
  );
};
