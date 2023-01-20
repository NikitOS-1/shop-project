import { createSlice } from "@reduxjs/toolkit";

type LikeProductState = {
  [id: number]: boolean;
};

const initialState: LikeProductState = {
  1: true,
  2: true,
};

export const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {},
});

export default likeSlice.reducer;
