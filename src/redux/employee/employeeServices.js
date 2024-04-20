import {_api} from "../../lib";

export const handleGetEmployee = async () => {
    try {
        const response = await _api.get('Employees');
        return response.data;
    } catch (error) {
        throw new Error("There's an error while Fetching Employees", error);
    }
};
export const handleGetEmployeeById = async (id) => {
    try {
        const response = await _api.get(`Employees/${id}`);
        return response.data;
    } catch (error) {
        throw new Error("There's an error while Fetching Employee", error);
    }
};

export const handleAddEmployee = async (data) => {
    try {
        const response = await _api.post('Employees', data);
        return response.data;
    } catch (error) {
        throw new Error("There's an error while Adding Employee", error);
    }
};

export const handleUpdateEmployee = async (data) => {
    try {
        const response = await _api.put(`Employees/${data.id}`, data.employee);
        return response.data;
    } catch (error) {
        throw new Error("There's an error while Editing Employee", error);
    }
};

export const handleDeleteEmployee = async (id) => {
    try {
        const response = await _api.delete(`Employees/${id}`);
        return response.data;
    } catch (error) {
        throw new Error("There's an error while Deleting Employee", error);
    }
};