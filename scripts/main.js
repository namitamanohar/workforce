import EmployeeList from "./employeeList.js";
import { getComputers } from "./computerDataProvider.js";
import { getEmployees } from "./employeeDataProvider.js";
import { getDepartments } from "./departmentDataProvider.js";
import { getLocations } from "./locationDataProvider.js";
import { getCustomers } from "./customerProvider.js";
import { getEmployeeCustomers } from "./employeeCustomerProvider.js";

getComputers()
.then(getEmployees)
.then(getDepartments)
.then(getLocations)
.then(getCustomers)
.then(getEmployeeCustomers)
.then(EmployeeList)
