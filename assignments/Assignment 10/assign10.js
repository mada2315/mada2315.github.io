/* Number One */
let employees = {
  "employeeInfo": [
    {
    "firstName": "Sam",
    "department": "Tech",
    "designation": "Manager",
    "salary": 40000,
    "raise eligible": true
    },
    {
    "firstName": "Mary",
    "department": "Finance",
    "designation": "Trainee",
    "salary": 18500,
    "raise eligible": true
    },
    {
    "firstName": "Bill",
    "department": "HR",
    "designation": "Executive",
    "salary": 21200,
    "raise eligible": false
    },
  ]
}

console.log(employees);

/* Number Two */
 let company = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employeeInfo":[
        {
        "firstName": "Sam",
        "department": "Tech",
        "designation": "Manager",
        "salary": 40000,
        "raise eligible": true
        },
        {
        "firstName": "Mary",
        "department": "Finance",
        "designation": "Trainee",
        "salary": 18500,
        "raise eligible": true
        },
        {
        "firstName": "Bill",
        "department": "HR",
        "designation": "Executive",
        "salary": 21200,
        "raise eligible": false
        }
      ]
    }
 console.log(company);

 /* Number Three */
 let employeespt2 = {
  "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employeeInfo":[
        {
        "firstName": "Sam",
        "department": "Tech",
        "designation": "Manager",
        "salary": 40000,
        "raise eligible": true
        },
        {
        "firstName": "Mary",
        "department": "Finance",
        "designation": "Trainee",
        "salary": 18500,
        "raise eligible": true
        },
        {
        "firstName": "Bill",
        "department": "HR",
        "designation": "Executive",
        "salary": 21200,
        "raise eligible": false
        }
      ]
    }
console.log(employeespt2);

function addEmployee(obj, name, department, designation, salary, raise){
  let employee = {
    "firstName": name,
    "department": department,
    "designation": designation,
    "salary": salary,
    "raiseEligible": raise
  };
  obj['employeeInfo'].push(employee);
}
 addEmployee(employeespt2, "Anna", "Tech", "Executive", 25600, false);
 
 /* Number Four */
 let totalSalary = 0;
 for (let i = 0; i < employeespt2.employeeInfo.length; i++){
  totalSalary += employeespt2.employeeInfo[i]['salary'];
 }

 console.log(totalSalary);

 /* Number Five */
 for(let i = 0; i < employeespt2.employeeInfo.length; i++){
  if(employeespt2.employeeInfo[i]['raiseEligible'] === true){
    employeespt2.employeeInfo[i]['salary'] += employeespt2.employeeInfo[i]['salary'] * 0.1;
    employeespt2.employeeInfo[i]['raiseEligible'] = false;
  }
 }

 console.log(employeespt2.employeeInfo);

 /* Number Six */
 let wfh = ['Anna','Sam'];
 for (let i = 0; i < employeespt2.employeeInfo.length; i++){
  let check = false;
  let name = employeespt2.employeeInfo[i].firstName;
  console.log(check);
  for (let j = 0; j < wfh.length; j++){
    if(wfh[j] === name){
      check = true;
    }
  }
  if(check === true){
    employeespt2['employeeInfo'][i].workFromHome = true;
  }
  else {
    employeespt2['employeeInfo'][i].workFromHome = false;
  }
 }
 console.log(employeespt2);