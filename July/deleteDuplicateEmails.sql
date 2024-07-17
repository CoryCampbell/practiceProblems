-- delete statement, cross join p1 and p2 (for each row in p1, insert p2; resulting in all possible combos)
DELETE p1 FROM Person p1,
    Person p2
WHERE
-- delete the p1 row if the email is the same as p2 AND the id is higher than the id in p2, resulting in only one unique email per table
    p1.Email = p2.Email AND p1.Id > p2.Id
