import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../services";
export const fetchUserById: any = createAsyncThunk(
  "akaBlogSlicerThunk",
  async () => {
    const response = await baseUrl.get("/products").catch((err) => {
      console.log(err);
    });
    console.log(response);
    return response;
  }
);
type InitialState = {
  data: [];
};
const initialState: InitialState = {
  data: [],
};

const BlogSlicer = createSlice({
  name: "akaBlogSlicer",
  initialState,
  reducers: {
    blogDataFetchAct: (state: any, { payload }: object | any) => {
      state.data = payload;
    },
  },
  extraReducers: {
    [fetchUserById.pending]: () => {
      console.log("pending");
    },
    [fetchUserById.fulfilled]: (state: any, { payload }: any) => {
      console.log("fullfilled ");
      return { ...state, data: payload.data };
    },
    [fetchUserById.rejected]: () => {
      console.log("rejected");
    },
  },
});
export const { blogDataFetchAct } = BlogSlicer.actions;
export default BlogSlicer.reducer;
