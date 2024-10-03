import React, {useEffect} from 'react'
import {ListEmployees} from "../Services/EmployeeService.js";
import {ListDepartmens} from "../Services/DepartmentService.js";

function ListarEmpleadosComponent() {
    //En esta parte se codifica lo referente a interactuar con la base de datos

    const [employees, setEmployees] = React.useState([])

    useEffect(() => {
        ListEmployees().then((res) => {
            console.log(res)
            setEmployees(res.data);
        }).catch((err)=>console.log(err));
    }, []);

    const [departments, setDepartments] = React.useState([])

    useEffect(() => {
        ListDepartmens().then((res) => {
            console.log(res)
            setDepartments(res.data);
        }).catch((err)=>console.log(err));
    }, []);

    const getDepartmentName = (departmentId) => {
        const department = departments.find(dept => dept.id === departmentId);
        console.log("Departamento encontrado:", department);
        return department ? department.departmentName : "N/A"; //
    };
    return (
        <div className="container">
            <h2 className="text-center"> Lista de Empleados</h2>
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Department name</th>
                    <th>Department Id</th>
                </tr>
                </thead>
                <tbody>
                {employees.map((empleado) =>
                    <tr key={empleado.id}>
                        <td>{empleado.id}</td>
                        <td>{empleado.firstName}</td>
                        <td>{empleado.lastName}</td>
                        <td>{empleado.email}</td>
                        <td>{getDepartmentName(empleado.departmentId)}</td>
                        <td>{empleado.departmentId}</td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    )
}

export default ListarEmpleadosComponent
