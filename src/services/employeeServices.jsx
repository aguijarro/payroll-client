import http from "./httpService";
import { api_url } from "../config.json";

const api_endpoint = api_url + "/employees";

function employee_url(id) {
  return `${api_endpoint}/${id}`;
}

export function get_employees() {
  // return http.get(api_endpoint);
  return http.get('http://localhost:5004/employees')
}

export function get_employee(employee_id) {
  return http.get(employee_url(employee_id));
}