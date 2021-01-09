A = [ 2, 3, 1, 5]

def solution (A):
    A = sorted(A)

    if A[0] != 1:
        saida = 1
    else:
        if A[-1] != len(A) + 1:
            saida = len(A) + 1
        else:
            for element in A:
                if (element + 1) not in A and (element + 1) < A[-1]:
                    saida =  element + 1

    return saida


print(A)
solution(A)

