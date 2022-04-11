import { createSlice } from "@reduxjs/toolkit";
import * as faker from "faker";

export const initialState = {
  countries: [
    {
      name: "Argentina",
      value: faker.datatype.number({ min: 24, max: 43 }),
    },
    {
      name: "Spain",
      value: faker.datatype.number({ min: 5, max: 9 }),
    },
    {
      name: "Japan",
      value: faker.datatype.number({ min: 5, max: 15 }),
    },
    {
      name: "Scotland",
      value: faker.datatype.number({ min: 24, max: 43 }),
    },
    {
      name: "Mongolia",
      value: faker.datatype.number({ min: 30, max: 49 }),
    },
    {
      name: "Austria",
      value: faker.datatype.number({ min: 5, max: 20 }),
    },
  ],
  cities: [
    {
      name: "Buenos Aires",
      value: faker.datatype.number({ min: 24, max: 43 }),
    },
    {
      name: "Madrid",
      value: faker.datatype.number({ min: 5, max: 9 }),
    },
    {
      name: "Tokio",
      value: faker.datatype.number({ min: 5, max: 15 }),
    },
    {
      name: "Edinburgh",
      value: faker.datatype.number({ min: 24, max: 43 }),
    },
    {
      name: "Ulan Bator",
      value: faker.datatype.number({ min: 30, max: 49 }),
    },
    {
      name: "Viena",
      value: faker.datatype.number({ min: 5, max: 20 }),
    },
  ],
};

//las partes del slice
export const geoSlice = createSlice({
  name: "geo",
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    setCities: (state, action) => {
      state.cities = action.payload;
    },
  },
});

//se exportan los reducers para manipularlos más abajo
export const { setCountries, setCities } = geoSlice.actions;

//se exporta el reducer del slice
export default geoSlice.reducer;

//esta funcion debe retornar otra funcion, por eso el doble arrow
export const setGeo = () => (dispatch) => {
  dispatch(setCountries(initialState.countries));

  dispatch(setCities(initialState.cities));
};
