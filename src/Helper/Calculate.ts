import { setOriginalNode } from "typescript";
import { Evaluation } from "./types";

export function formatEvaluation(
  evaluation: string,
  formatKey: string
): void | string {
  let evaluationTrimed = evaluation.replaceAll(" ", "");
  let regExpMatch = evaluationTrimed.match(/\d+(\.\d{1,})?$/);
  console.log("regExpMatch", regExpMatch);

  if (regExpMatch) {
    let lastNum = regExpMatch![0];
    console.log("formatting found lastNum ", lastNum);
    let lastNumIndex = regExpMatch?.index;
    console.log("formatting found lastNum index ", lastNumIndex);
    let lastNumFormatted =
      formatKey === "%" ? Number(lastNum) * 0.01 : Number(lastNum) * 0.1;
    console.log("lastNumberFormatted", lastNumFormatted);
    console.log("slice result", evaluation.slice(0, lastNumIndex));
    return evaluation
      .slice(0, lastNumIndex)
      .concat(lastNumFormatted.toString());
  } else {
    console.log("evaluation  is now", evaluationTrimed);
    let lastSym = evaluationTrimed.split("").pop();
    console.log("lastSym", lastSym);
    if (lastSym !== ".") {
      let newEvaluation = evaluationTrimed.replace(lastSym!, "");
      console.log("newEvaluation ", newEvaluation);
      return formatEvaluation(newEvaluation, formatKey);
    }
  }
}

export function calculate(
  mathKeyArray: string[],
  numberArray: number[]
): void | number {
  let priorityKeyIndex = mathKeyArray.find((ele) => ele === "*")
    ? mathKeyArray.findIndex((ele) => ele === "*")
    : mathKeyArray.findIndex((ele) => ele === "/");

  let mathKeyIndex = priorityKeyIndex < 0 ? 0 : priorityKeyIndex;
  let mathKey = mathKeyArray[mathKeyIndex];
  console.log(
    `priorityKeyIndex: ${priorityKeyIndex}, mathKeyIndex: ${mathKeyIndex}, mathKey: ${mathKey} `
  );
  let firstNum = numberArray[mathKeyIndex];
  let secondNum = numberArray[mathKeyIndex + 1];
  console.log(`firstNum: ${firstNum}, secondNum: ${secondNum}`);
  let result = calculateTwoNumber(mathKey, firstNum, secondNum);

  numberArray.splice(mathKeyIndex, 2, result);
  mathKeyArray.splice(mathKeyIndex, 1);

  if (mathKeyArray.length > 0) {
    return calculate(mathKeyArray, numberArray);
  } else {
    // console.log("final result", result);
    return result;
  }
}

function calculateTwoNumber(
  mathKey: string,
  firstNum: number,
  secondNum: number
) {
  switch (mathKey) {
    case "*":
      return firstNum * secondNum;
    case "/":
      return firstNum / secondNum;
    case "+":
      return firstNum + secondNum;
    default:
      return firstNum - secondNum;
  }
}
