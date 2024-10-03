import axios from 'axios';

const REST_API_URL = "http://localhost:8080/api/departments";

export const ListDepartmens = ()=> axios.get(REST_API_URL);