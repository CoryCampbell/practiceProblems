//IS POSSIBLE

/*
consider a pair of integers (a,b). The following operations can be performed on (a,b) in any order, zero or more times
(a,b) -> (a + b, b)
(a,b) -> (a, a + b)

return a string that denotes whether or not (a,b) can be converted to (c,d) by performing the operation zero or more times

ex:
(a,b) = (1,1)
(c,d) = (5,2)

Perform the operation (1,1+1) to get (1,2), perform the operation (1 + 2,2) to get (3,2) and perform the op (3+2,2) to get (5,2). Alternatively, the first operation could be (1+1,1) to get (2,1) and so on.
*/

