import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleGetEmployee, handleAddEmployee, handleDeleteEmployee, handleUpdateEmployee,handleGetEmployeeById } from "./employeeServices";

export const getEmployeeThunk = createAsyncThunk('Employee/getEmployee', async () => {
    try {
        return await handleGetEmployee();
    } catch (error) {
        throw Error("there's an error inside getEmployeeThunk: ", error)
    }
});

export const getEmployeeByIdThunk = createAsyncThunk('Employee/getEmployeeById', async (id) => {
  try {
    console.log("get");
      return await handleGetEmployeeById(id);
  } catch (error) {
      throw Error("there's an error inside getEmployeeThunk: ", error)
  }
});

export const addEmployeeThunk = createAsyncThunk('Employee/addEmployee', async (data) => {
    try {
        await handleAddEmployee(data);
    } catch (error) {
        throw Error("there's an error inside addEmployeeThunk: ", error)
    }
});

export const UpdateEmployeeThunk = createAsyncThunk('Employee/updateEmployee', async (data) => {
  try {
      await handleUpdateEmployee(data);
  } catch (error) {
      throw Error("there's an error inside updateEmployeeThunk: ", error)
  }
});

export const deleteEmployee = createAsyncThunk(
    "Employee/deleteEmployee",
    async (id) => {
      try {
        return await handleDeleteEmployee(id);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );