// print triangle of # signs
var str = '';
while (str.length <= 7){
  str += '#';
  console.log(str);
}

// fizz buzz, 3m print fizz, 5m pring buzz, both print fizzbuzz, else print num
var num = 0;
while (num < 100){
  num += 1;
  if (num % 3 === 0){   
    if (num % 5 === 0){   
      console.log('fizzbuzz');
    }
    console.log('fizz');
  }
  else if (num % 5 === 0){   
    console.log('buzz');
  } 
  else {   
    console.log(num);
  }
}
