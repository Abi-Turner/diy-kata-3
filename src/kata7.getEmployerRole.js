const getEmployerRole = (employeeName, employees) => {
  // const findEmployee = (employeeName, employees) => {
  //   employees.filter(employees.name === employeeName);
  //   return `${name} ${role}`;
  //  };
  const result = employees.filter((employees) => {
    if (employees.name === employeeName) {
      return employees.role;
    }
  });
  return result;
};

// steps. i need to iterate through an array to find the element. this could be filter?
// i need to get the value of the element and add it to a string
// i need to return the string.

module.exports = getEmployerRole;