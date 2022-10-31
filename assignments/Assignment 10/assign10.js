let employees = [
    {
    "firstName": "Sam",
    "department": "Tech",
    "designation": "Manager",
    "salary": 40000,
    "raise eligible": "true",
    "wfh": "true"
    },
    {
    "firstName": "Mary",
    "department": "Finance",
    "designation": "Trainee",
    "salary": 18500,
    "raise eligible": "true",
    "wfh": "false"
    },
    {
    "firstName": "Bill",
    "department": "HR",
    "designation": "Executive",
    "salary": 21200,
    "raise eligible": "false",
    "wfh": "false"
    },
    {
    "firstName": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raise eligible": "false",
    "wfh": "true"
    }
  ]

var totalSalary = 0,
salary = employees.salary, 
    i;
for (i = 0; i < salary.length; i++) { 
    totalSalary += salary[i].amount; 
}

console.log(totalSalary);

 let company = [
    {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees":[
        {
        "firstName": "Sam",
        "department": "Tech",
        "designation": "Manager",
        "salary": 40000,
        "raise eligible": "true"
        },
        {
        "firstName": "Mary",
        "department": "Finance",
        "designation": "Trainee",
        "salary": 18500,
        "raise eligible": "true"
        },
        {
        "firstName": "Bill",
        "department": "HR",
        "designation": "Executive",
        "salary": 21200,
        "raise eligible": "false"
        },
        {
        "firstName": "Anna",
        "department": "Tech",
        "designation": "Executive",
        "salary": 25600,
        "raise eligible": "false"
        }
      ]
    }
 ]
  