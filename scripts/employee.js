const EmployeeComponent = (employee, computer, department,location) =>{
  return `
    <section class="employee">
      <h2>Employee Name: ${employee.firstName} ${employee.lastName}</h2>
      <p>Age: ${employee.age}</p>
      <p>Model: ${computer.model}</p>
      <p>Manufacture Year: ${computer.year}</p>
      <p>Department: ${department.name}</p>
      <p>Location:${location.name}
    </section>

  `
}

export default EmployeeComponent