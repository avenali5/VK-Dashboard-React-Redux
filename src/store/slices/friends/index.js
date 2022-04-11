import { createSlice } from "@reduxjs/toolkit";
import * as faker from "faker";

const initialState = { friends: 0, percentage: 0 };

//las partes del slice
export const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    setFriends: (state, action) => {
      state.friends = action.payload;
    },
    setOldNumber: (state, action) => {
      state.oldNumber = action.payload;
    },
    setPercentage: (state, action) => {
      state.percentage = action.payload;
    },
  },
});

//se exportan los reducers para manipularlos más abajo
export const { setFriends, setOldNumber, setPercentage } = friendsSlice.actions;

//se exporta el reducer del slice
export default friendsSlice.reducer;

//esta funcion debe retornar otra funcion, por eso el doble arrow
export const totalFriends = () => (dispatch) => {
  dispatch(setFriends(faker.datatype.number({ min: 113, max: 304 })));
  dispatch(
    setPercentage(faker.datatype.number({ min: -5, max: 4, precision: 0.01 }))
  );
};
