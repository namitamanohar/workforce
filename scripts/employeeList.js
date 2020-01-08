import { useComputers } from "./computerDataProvider.js";
import { useEmployees } from "./employeeDataProvider.js";
import EmployeeComponent from "./employee.js";
import { useDepartments } from "./departmentDataProvider.js";
import { useLocations } from "./locationDataProvider.js";

const contentTarget=document.querySelector(".employee")
const EmployeeList =() =>{
  const computers=useComputers()
  const employees=useEmployees()
  const departments=useDepartments()
  const locations=useLocations()

  const render = () =>{
    contentTarget.innerHTML=employees.map(employee=>{
      const computerType=computers.find(computertype =>computertype.id===employee.computerId)
      const departmentType=departments.find(departmenttype=>departmenttype.id===employee.departmentId)
      const locationType=locations.find(locationtype=>locationtype.id===employee.locationId)

      const html =EmployeeComponent(employee,computerType,departmentType,locationType)
      return html
    }).join("")

  }

render()
}
export default EmployeeList