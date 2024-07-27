-- specifies column to be included in output, name
SELECT e.name as Employee
-- alias the employee table as 'e' for employees
FROM Employee e
-- inner join table with employee aliased as 'm' for managers (inner join returns rows with a match)
INNER JOIN Employee m
-- specifies that our join is conditioned to be the where e.managerId matchs m.id
ON e.managerId = m.id
-- this specifies a condition that only returns the e names that have a higher salary than its matched m
WHERE e.salary > m.salary;
