import { createSlice } from "@reduxjs/toolkit";

type CartState = { [id: number]: number };

export const initialState: CartState = {
  1: 3,
  2: 2,
};

export const cartSlice = createSlice({
  name: "productsInCart",
  initialState,
  reducers: {},
});
