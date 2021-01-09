



A = []
K = 1

def solution(A, K):

    if len(A) == 0:
        
        return A
    else:
        count = 1

        while count <= K:
            A.insert(0, A[-1])
            A.pop()
            count += 1
    
        return A

solution(A, K)
