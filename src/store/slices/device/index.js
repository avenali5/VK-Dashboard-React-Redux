import { createSlice } from "@reduxjs/toolkit";
import * as faker from "faker";

const initialState = {
  desktop: 0,
  mobile: 0,
};

//las partes del slice
export const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    setDesktop: (state, action) => {
      state.desktop = action.payload;
    },
    setMobile: (state, action) => {
      state.mobile = action.payload;
    },
  },
});

//se exportan los reducers para manipularlos más abajo
export const { setDesktop, setMobile } = deviceSlice.actions;

//se exporta el reducer del slice
export default deviceSlice.reducer;

//esta funcion debe retornar otra funcion, por eso el doble arrow
export const setDevice = () => (dispatch) => {
  dispatch(setDesktop(faker.datatype.number({ min: 200, max: 400 })));
  dispatch(setMobile(faker.datatype.number({ min: 200, max: 400 })));
};
