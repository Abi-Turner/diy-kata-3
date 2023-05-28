function getEmployerRole(name, employees) {
  const foundEmployee = employees.find((employee) => employee.name === name);
  return foundEmployee ? foundEmployee.role : undefined;
}

module.exports = getEmployerRole;
