-- select only the customer name to return in result
SELECT name AS Customers FROM Customers
-- where there is not any customerId's in the order table
WHERE id NOT IN (
    SELECT customerId FROM Orders
);
