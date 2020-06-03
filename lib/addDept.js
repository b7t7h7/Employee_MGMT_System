var inquirer = require("inquirer");


function addDept(connection, returnFunc) {
  inquirer
    .prompt({
      type: "input",
      name: "new_dept",
      message: "What is the name of the new department?"
    })
    .then(ans => {
      connection.query("INSERT INTO department SET ?", { name: ans.new_dept }, function (err, res) {
        if (err) throw err;
      
        console.log(`Added ${ans.new_dept} to the database`);
        returnFunc();
      });
    })
}
module.exports=addDept;
