import random

def solution(A):
    
    for element in A:
    
        L = A.copy()
        L.remove(element)

        if element not in L:
            
            return element

A = [9, 3, 9, 3, 9, 7, 9]

lista1 = [random.randint(1, 1000000000) for i in range(100003)]

print(lista1)
print(solution(lista1))