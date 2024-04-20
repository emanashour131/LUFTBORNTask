import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getEmployeeThunk,
} from '../redux/employee/employeeThunks'

const columns = [
  {
    title: "SNo",
    name: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    name: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  }
];

const EmployeeList = () => {
  
  const employeeStat = useSelector((state) => state.employee.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeeThunk());
  }, [dispatch, employeeStat.data]);

  const data1 = [];
  for (let i = 0; i < employeeStat.length; i++) {
    data1.push({
      key: i + 1,
      name: employeeStat[i]?.name,
    });
  }
  return (
    <div>
      <h3 className="mb-4 title">Employees</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default EmployeeList;
