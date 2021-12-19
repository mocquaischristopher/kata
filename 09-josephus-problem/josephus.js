function josephus(n, k) {
    let prisoners = [];
    let death = [];
    for (let i = 1; i <= n; i++) {
      prisoners.push(i);
      // console.log(prisoners);
      // console.log('index:', prisoners[i - 1]);
      // console.log('prisonier index 0:', prisoners[0]);
      // console.log('prisonier index 4:', prisoners[4], '\n');
    }
    while (prisoners.length > 1) {
      for (let p of prisoners) {
        if (p > prisoners.length) {
          p = 0;
        }
  
        p += k - 1;
        // prisoners.splice((i += k - 1), 1);
  
        // console.log(prisoners);
        prisoners.splice(prisoners.indexOf(p), 1);
        // console.log(p);
        // console.log(prisoners.indexOf(p));
        // console.log('*******************************');
      }
    }
    // prisoners.splice(2, 2);
  
    console.log('*******************************');
    console.log(`j(${n}, ${k})`);
    return prisoners;
  }
  josephus(5, 2);
  josephus(5, 3);
  josephus(6, 2);
  josephus(7, 2);
  josephus(8, 2);