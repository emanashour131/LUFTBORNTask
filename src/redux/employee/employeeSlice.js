import { createSlice } from "@reduxjs/toolkit";
import { addEmployeeThunk, getEmployeeThunk, UpdateEmployeeThunk, getEmployeeByIdThunk } from "./employeeThunks";

const initialState = {
  isLoading: true,
  hasError: null,
  data: [],
}


const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      //GET
      .addCase(getEmployeeThunk.pending, (state) => {
        state.isLoading = true;
        state.hasError = null;
      })
      .addCase(getEmployeeThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = null;
        state.data = action.payload;
      })
      .addCase(getEmployeeThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = action.error.message;
      })

      //POST
      .addCase(addEmployeeThunk.pending, (state) => {
        state.isLoading = true;
        state.hasError = null;
      })
      .addCase(addEmployeeThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = null;
        state.data.push(action.payload);
      })
      .addCase(addEmployeeThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = action.error.message;
      })

      // PUT
      .addCase(UpdateEmployeeThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(UpdateEmployeeThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.data.push(action.payload);
      })
      .addCase(UpdateEmployeeThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      //FetchById
      .addCase(getEmployeeByIdThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEmployeeByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(getEmployeeByIdThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
  }

});

export default employeeSlice.reducer