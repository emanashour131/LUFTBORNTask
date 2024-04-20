import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { addEmployeeThunk, getEmployeeByIdThunk, UpdateEmployeeThunk } from "../redux/employee/employeeThunks";
import { useEffect, useState } from "react";
// import { employeeSchema } from "../lib";
import { Bounce, toast } from "react-toastify";
import { useLocation, useNavigate, useParams } from "react-router-dom";


const useEmployee = () => {
    const [message, setMessage] = useState(null);
    const [initialData, setInitialData] = useState({})

    const newEmployee = useSelector((state) => state.employee);

    const { data } = newEmployee;

    const location = useLocation();
    const getEmployeeId = location.pathname.split("/")[2];

    const {id} = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        if (getEmployeeId){
            dispatch(getEmployeeByIdThunk(id));
        }
    }, [id]);


    const onSubmit = (values, actions) => {
        try {
            if (getEmployeeId) {
                const data = { id: getEmployeeId, employee: values };
                dispatch(UpdateEmployeeThunk(data));
                if (isSubmitting) {
                    resetForm();
                }
            } else {
                dispatch(addEmployeeThunk(values));
                if (isSubmitting) {
                    resetForm();
                }
            }
        } catch (error) {
            setMessage("Can not add the Employee !")
        }
    }

    const initialValues = {
        id: data.id,
        Name: data.name || "",
    }

    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
        validateForm,
        setFieldValue,
        resetForm
    } = useFormik({ initialValues, onSubmit })

    useEffect(() => {
        setInitialData(data)
        if (data) {
            setFieldValue("Name", initialValues.Name)
            setFieldValue("id", initialValues.id)
        }
    }, [data])

    return {
        onSubmit,
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        validateForm,
        message,
        initialData,
        setFieldValue
    }
}

export default useEmployee;