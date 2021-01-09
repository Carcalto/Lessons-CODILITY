
def solution(A):
    aux = 0

    for element in A:
        aux = aux ^ element

    return aux


A = [9, 3, 9, 3, 9, 7, 9]

print(solution(A))










