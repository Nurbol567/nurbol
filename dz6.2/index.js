// Типы данных :

let variableString = "Geeks";       // 1. String (Строка)
let variableNumber = 2026;          // 2. Number (Число)
let variableBoolean = false;        // 3. Boolean (Булевый тип)
let variableUndefined;              // 4. Undefined (Не определено)
let variableNaN = NaN;              // 5. NaN (Not a Number)


// 2. Вывод типов через typeof в консоль


console.log(typeof variableString);
console.log(typeof variableNumber);
console.log(typeof variableBoolean);
console.log(typeof variableUndefined);
console.log(typeof variableNaN);

// 3. Сравнения с == и ===

let ageNumber = 18;
let ageString = "18";

console.log (ageNumber == ageString);
console.log (ageNumber === ageString);


// Нестрогое сравнение == (сравнивает только значение)
// Строгое сравнение === ( сравнивает и значение и тип данных)