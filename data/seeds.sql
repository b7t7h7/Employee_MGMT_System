
USE employeeMgmtSys_DB;


INSERT INTO department (name)
VALUES ("sales"),("Engineering"),("Finance"),("Legal");


INSERT INTO role (title,salary,department_id)
VALUES 
("Sales Lead", 40000,1),
("Sales person", 35000,1),
("Lead Engineering", 90000,2),
("Accountant", 70000, 3),
("lawyer", 50000, 4);


INSERT INTO employee (first_name,last_name,role_id)
VALUES 
("Scarlett", "Huntley",1),
("Anna", "Burkett",3),
("Katherine", "Elizabeth",2),
("Rebbecca", "Summerlin",5);


SELECT id, department.name as department FROM department;

 
SELECT role.id, role.title as job_title ,department.name as department, salary 
FROM department
INNER JOIN role ON role.department_id=department.id;


SELECT employee.id, employee.first_name,employee.last_name,role.title as job_title,department.name as department, role.salary
FROM department
INNER JOIN role ON role.department_id=department.id
INNER JOIN employee ON employee.role_id=role.id;


UPDATE role
SET title= "Sales Associate"
WHERE title ="sales person";
