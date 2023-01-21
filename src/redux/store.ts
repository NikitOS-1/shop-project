import { configureStore, createReducer } from "@reduxjs/toolkit";
import likeReducer from "./likeReducer";

export const store = configureStore({
  reducer: {
    likeProducts: likeReducer,
    productsInCart: createReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
