def isPossible(a,b,c,d):
  # init a stack with the first a,b
  # while we have a stack, well take the next iter
    # check if that iter matches the target (c,d) if so return yes
  # make sure that this iter doesnt pass our taget
  # if it doesnt we can add the next iteration to the stack
  # if our loop ends and find our target, we can return "no"

  stack = [(a,b)]

  while stack:
    na, nb = stack.pop()

    if (na, nb) == (c,d):
      return 'Yes'

    if na > c or nb > d:
      continue
    stack.append((na+nb, nb))
    stack.append((na, na+nb))

  return 'No'
 #time complexity O(n), space complexity O(n)
