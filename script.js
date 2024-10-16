// Задание 1: Найти сумму всех элементов массива
// Напишите функцию sumArray, которая принимает массив чисел и возвращает сумму всех
// элементов. Реализуйте это с помощью цикла for.
// Напишите функцию здесь
function sumArray(arr) {
// Реализация через цикл for
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let numbers = [1, 2, 3, 4, 5];
let total = sumArray(numbers);
console.log(total);

// Задание 2: Найти максимальный элемент массива
// Напишите функцию findMax, которая принимает массив чисел и возвращает максимальный
// элемент. Используйте цикл for.
let numbers2 = [3, 1, 4, 1, 51, 9]; // Пример массива
// Напишите функцию здесь
function findMax(arr2) {
// Реализация через цикл for
    let max = arr2[0];
    for (let i = 1; i < arr2.length; i++) {
        if (arr2[i] > max) {
            max = arr2[i];
        }
    }
    return max;
} 
let maximum = findMax(numbers2);
console.log(maximum);


// Задание 3: Фильтрация массива по условию
// Создайте функцию filterArray , которая принимает массив чисел и возвращает новый
// массив, содержащий только четные числа. Реализуйте это с использованием цикла for.
let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Пример массива
// Напишите функцию здесь
function filterArray(arr3) {
// Реализация через цикл for
    let filterArrEven = [];
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] % 2 == 0) {
            filterArrEven[i] = arr3[i];
        }
    }
    return filterArrEven;
} 
let filterArrayEven = filterArray(numbers3);
console.log(filterArrayEven); // Пример вывода: [2, 4, 6, 8]


// Задание 4: Реализация метода массива "map" через цикл
// Напишите функцию mapArray, которая принимает массив и функцию-преобразователь. Эта
// функция должна возвращать новый массив, где каждый элемент является результатом
// применения функции-преобразователя к каждому элементу исходного массива. Реализуйте
// это с использованием цикла.
let numbers4 = [1, 2, 3, 4, 5]; // Пример массива
// Пример функции-преобразователя:
function multiplyByTwo(num4) {
    return num4 * 2;
}
// Напишите функцию здесь
function mapArray(arr4, callback) {
// Реализация через цикл for
    let result4 = [];
    for (let i = 0; i < arr4.length; i++) {
        result4.push(callback(arr4[i]));
    }
    return result4;
} 
let transformedArray = mapArray(numbers4, multiplyByTwo);
console.log(transformedArray);

// Задание 5: Реализация метода массива "forEach" через цикл
// Создайте функцию forEachArray, которая принимает массив и функцию, и применяет эту
// функцию к каждому элементу массива. Реализуйте это с использованием цикла for.
let numbers5 = [1, 2, 3, 4, 5]; // Пример массива
// Пример функции для вывода:
function printElement(element) {
    console.log(element);
} 
// Напишите функцию здесь
function forEachArray(arr5, callback5) {
// Реализация через цикл for
    for (let i = 0; i < arr5.length; i++) {
        // Применяем функцию к текущему элементу
        callback5(arr5[i]);
    }
}
forEachArray(numbers5, printElement); // Пример вывода: 1 2 3 4 5 (по одному числу на строку)

// Задание 6: Развернуть массив
// Напишите функцию reverseArray, которая принимает массив и возвращает его развернутую
// версию. Реализуйте это без использования встроенного метода reverse, используя цикл for.
let numbers6 = [1, 2, 3, 4, 5]; // Пример массива
// Напишите функцию здесь
function reverseArray(arr6) {
    let reversed = [];
// Реализация через цикл for
    for (let i = arr6.length - 1; i >= 0; i--) {
        reversed.push(arr6[i]); // Добавляем текущий элемент в новый массив
    }
    return reversed;
}
console.log(reverseArray(numbers6)); // Пример вывода: [5, 4, 3, 2, 1]