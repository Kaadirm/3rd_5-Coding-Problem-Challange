/*
------   1   -------
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

SOLUTION

const rps = (p1, p2) => {
  const result1 = "Player 1 won!";
  const result2 = "Player 2 won!";
  const result3 = "Draw!";
  switch(p1+p2){
      case "rockscissors":
      case "scissorspaper":
      case "paperrock":
        return result1;
        break;
      case "rockpaper":
      case "scissorsrock":
      case "paperscissors":
        return result2;
        break;
      case "rockrock":
      case "scissorsscissors":
      case "paperpaper":
        return result3;
        break;
  }
};


------   2   -------


It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


SOLUTION

function removeChar(str){
  return str.substr(1,(str.length-2));
};


------   3   -------

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

SOLUTION

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i]>0){
      sum += arr[i];
    }
  }
  return sum
}

------   4   -------

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

SOLUTION 

function basicOp(operation, value1, value2){
  let result
  switch(operation){
    case "+":
      result = value1 + value2;
      break;
    case "-":
      result = value1 - value2;
      break;
    case "/":
      result = value1 / value2;
      break;
    case "*":
      result = value1 * value2;
      break;
  }
  return result
}

------   5   -------

Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

SOLUTION

function repeatStr (n, s) {  
/*  let string = s
  for(let i=1; i<n; i++){
    string += s
  }
  return string */
  
we can use simply this =>  return s.repeat(n)
  
}

*/