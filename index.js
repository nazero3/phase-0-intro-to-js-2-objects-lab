// Write your solution in this file!
let employee = { name: "nezir", streetAddress: "ankara" };
function updateEmployeeWithKeyAndValue(employee, key, value) {
  let newEmp = { ...employee };
  newEmp[key] = value;
  return newEmp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    let newEmp = {...employee};
    delete newEmp[key];
    return newEmp;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}
