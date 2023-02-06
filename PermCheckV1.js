function solution(A) {
    const n = A.length;
    const expectedSum = (n + 1) * (n + 2) / 2;
    const actualSum = A.reduce((sum, value) => sum + value, 0);
    const max = Math.max.apply(null, A);


    console.log(expectedSum, actualSum, max);
    
    if (expectedSum !== actualSum + max + 1) {
        return 0;
    } else {
        return 1;
    }

  }

  console.log(solution([4,1,3,2]));