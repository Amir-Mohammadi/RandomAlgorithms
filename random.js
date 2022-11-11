const prompt = require("prompt-sync")();
var asciichart = require("asciichart");

function MainPage() {
  console.log(
    "\n##################### RANDOM NUMBER ALGORITHMS ######################\n"
  );
  console.log("1. middleSquare Method ");
  console.log("2. multiplication Method");
  console.log("3. Coexistence method");
  console.log("4. Exit");

  console.log("\n");

  var choice = prompt("Enter Your Choice : ");
  console.log("\n");

  switch (choice) {
    case "1":
      middleSquareMethod();
      break;
    case "2":
      multiplicationMethod();
      break;
    case "3":
      coexistenceMethod();
      break;
    case "4":
      break;
    default:
      break;
  }
}

function middleSquareMethod() {
  console.log(
    "************* Square Method Randomize Number !!! **************\n"
  );
  let seed = prompt("Enter Number :");
  var chart = [];

  if (seed.length < 4 || seed.length > 4 || seed == null) {
    console.log("Error : Enter 4 digit number please!\n");
    middleSquareMethod();
  } else {
    var pieceOfNumber = prompt("How Many Numbers Do You Want : ");
    for (let i = 0; i < pieceOfNumber; i++) {
      var result = (seed * seed)
        .toString()
        .padStart(4, "0")
        .slice(2)
        .slice(0, -2);
      seed = parseInt(result);
      if (isNaN(seed) || seed == null) {
        console.log("++++++numbers length are too short+++++");
        break;
      }
      var finalResult = parseFloat(seed / 10000);
      chart[i] = finalResult;
      console.log(finalResult);
    }
    console.log("=================== CHART ======================\n");
    console.log(asciichart.plot(chart, { height: 20 }));
    console.log("=================== CHART ======================\n");
  }
  MainPage();
}

function multiplicationMethod() {
  console.log(
    "************* multiplication Method Randomize Number !!! **************\n"
  );
  let seed = prompt("Enter Number :");
  const constantNumber = prompt("Enter Constant Number : ");
  var chart = [];

  if (seed.length < 4 || seed.length > 4 || seed == null) {
    console.log("Error : Enter 4 digit number please!\n");
    multiplicationMethod();
  } else {
    var pieceOfNumber = prompt("How Many Numbers Do You Want : ");
    for (let i = 0; i < pieceOfNumber; i++) {
      var result = (seed * constantNumber)
        .toString()
        .padStart(4, "0")
        .slice(2)
        .slice(0, -2);
      seed = parseInt(result);
      if (isNaN(seed) || seed == null) {
        console.log("++++++numbers length are too short+++++");
        break;
      }
      var finalResult = parseFloat(seed / 10000);
      chart[i] = finalResult;
      console.log(finalResult);
    }
    console.log("=================== CHART ======================\n");
    console.log(asciichart.plot(chart, { height: 20 }));
    console.log("=================== CHART ======================\n");
  }
  MainPage();
}

function coexistenceMethod() {
  console.log(
    "************* multiplication Method Randomize Number !!! **************\n"
  );

  var chart = [];

  var x = [];
  var m = 25;
  var M = 5;
  var chart = [];

  for (let i = 0; i < 10; i++) {
    x[i] = prompt(`Enter Number ${i} : `);
  }

  chart[0] = parseInt(x[0]) / 10000;
  chart[1] = parseInt(x[1]) / 10000;
  chart[2] = parseInt(x[2]) / 10000;
  chart[3] = parseInt(x[3]) / 10000;
  chart[4] = parseInt(x[4]) / 10000;
  chart[5] = parseInt(x[5]) / 10000;
  chart[6] = parseInt(x[6]) / 10000;
  chart[7] = parseInt(x[7]) / 10000;
  chart[8] = parseInt(x[8]) / 10000;
  chart[9] = parseInt(x[9]) / 10000;

  for (let i = 10; i < 60; i++) {
    x[i] = (x[i - M] + x[i - 1]) % m ;
    result = parseFloat(x[i] / 1000);
    chart[i] = result.toString();
  }

  console.log(chart);
  console.log("=================== CHART ======================\n");
  console.log(asciichart.plot(chart, { height: 30 }));
  console.log("=================== CHART ======================\n");

  MainPage();
}

MainPage();
