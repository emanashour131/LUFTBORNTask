import { configureStore } from "@reduxjs/toolkit";
import EmployeeReducer from './employee/employeeSlice';

const store = configureStore({
    reducer:{
        employee: EmployeeReducer,
    }
});

export default store