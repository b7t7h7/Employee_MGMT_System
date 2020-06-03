var inquirer = require("inquirer");

//Add Role function
function addRole(connection, returnFunc) {
  let departmentsChoices;

  connection.query("SELECT department.id, department.name FROM department;", (err, res) => {
    if (err) throw err;
    
    departmentsChoices = res.map(department => {
      return{
        name:department.name,
        value: department.id
      }
    })
        
    inquirer
      .prompt([
        {
          type: "input",
          name: "new_role_name",
          message: "What is the name of the role?"
        },
        {
          type: "input",
          name: "new_role_salary",
          message: "What is the salary of the role?"
        }
        ,
        {
          type: "list",
          name: "new_role_dept",
          message: "Which department does the role belong to ?",
          choices: departmentsChoices

        }

      ])
      .then(ans => {
        connection.query("INSERT INTO role SET ?",
          {
            title: ans.new_role_name,
            salary: ans.new_role_salary,
            department_id: ans.new_role_dept

          },
          function (err, res) {
            if (err) throw err;
            // Log succesfully added new dept
            console.log(`Added ${ans.new_role_name} to the database`);
            
            returnFunc();
          });
      })
  })
}
module.exports = addRole;