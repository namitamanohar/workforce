const EmployeeComponent = (employee, computer, department,location, customersArray) =>{
  return `
    <section class="employee">
      <h2>Employee Name: ${employee.firstName} ${employee.lastName}</h2>
      <p>Age: ${employee.age}</p>
      <p>Model: ${computer.model}</p>
      <p>Manufacture Year: ${computer.year}</p>
      <p>Department: ${department.name}</p>
      <p>Location:${location.name}</p>
      <p>Customers: ${customersArray.map(customer=>`<li>${customer.name}</li>`).join("")}</p>
    </section>

  `
}

export default EmployeeComponent