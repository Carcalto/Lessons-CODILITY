def solution(N):
    binary = bin(N)[2:]
    max_gap = 0
    current_gap = 0

    for char in binary:
        if char == '0':
            current_gap += 1
        else:
            if max_gap < current_gap:
                max_gap = current_gap
            current_gap = 0
               


    return max_gap
     
solution(1041)


