// Pseudocode:
// 1. Create a string for the user message.
// 2. Declare three variables, each containing the result of a calculation.
// 3. Use unique arithmetic operators for each calculation.
// 4. Display the combination codes and the user message in an alert dialog.

// User message
let userMessage =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

// Calculation 1: Addition (+)
let code1 = 10 + 20; // 30

// Calculation 2: Subtraction (-)
let code2 = 40 - 1; // 39

// Calculation 3: Multiplication (*)
let code3 = 3 * 13; // 39

// Display the combination and user message in an alert dialog
let combinationMessage = `${userMessage}\nCombination: ${code1} - ${code2} - ${code3}`;
alert(combinationMessage);
