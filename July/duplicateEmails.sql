-- determines what column to includ in result
SELECT Email
-- from the table named "Person"
FROM Person
-- groups the rows together by duplicate emails
GROUP BY email
-- and only return the rows that have more than one duplicate email
HAVING COUNT(*) > 1
