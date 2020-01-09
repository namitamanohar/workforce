import { useComputers } from "./computerDataProvider.js";
import { useEmployees } from "./employeeDataProvider.js";
import EmployeeComponent from "./employee.js";
import { useDepartments } from "./departmentDataProvider.js";
import { useLocations } from "./locationDataProvider.js";
import { useCustomers } from "./customerProvider.js";
import { useEmployeeCustomers } from "./employeeCustomerProvider.js";

const contentTarget=document.querySelector(".employee")
const EmployeeList =() =>{
  const computers=useComputers()
  const employees=useEmployees()
  const departments=useDepartments()
  const locations=useLocations()
  const customers=useCustomers()
  const EmployeeCustomers= useEmployeeCustomers()


  const render = () =>{
    contentTarget.innerHTML=employees.map(employee=>{
      // Find the computer assigned to the employee
      const computerType=computers.find(computertype =>computertype.id===employee.computerId)
      // Find the deparment that the employee works in 
      const departmentType=departments.find(departmenttype=>departmenttype.id===employee.departmentId)
      // Find the location that the employee works at
      const locationType=locations.find(locationtype=>locationtype.id===employee.locationId)

      // Find all customer relationships for the current employee
      let relatedCustomers=EmployeeCustomers.filter(ec =>ec.employeeId===employee.id)
      // Find each relationship, find the corresponding array
      relatedCustomers=relatedCustomers.map(rc=>{
        return customers.find(customer =>customer.id===rc.customerId)
      })
      console.log(relatedCustomers)
      const html =EmployeeComponent(employee,computerType,departmentType,locationType, relatedCustomers)
      return html
    }).join("")

  }

render()
}
export default EmployeeList