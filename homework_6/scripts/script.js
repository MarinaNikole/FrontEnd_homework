 console.log('=========== 1 ==============')
// Напишите цикл for, который выводит консоль каждое второе число от 0 до 10

for (let i = 0; i <= 10; i += 2) {
    console.log(i)
}


 console.log('============= 2 ==============')
// Напишите цикл for, который выводит в консоль  все числа от 55 до 20

for (let i = 55; i >= 20; i--) {
    console.log(i)
}



 console.log('============== 3 ==============')
// Дан массив numbers. Вывести в консоль все числа из массива

const numbers = [3, 5, 11, 2, 8, 1, 6];
console.log(numbers)




console.log('============== 4 ================')
// Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат

const numbers_squared = [...numbers]
console.log(numbers_squared)
for (let i in numbers_squared) {
    numbers_squared[i] = numbers_squared[i] **2;
}
console.log(numbers_squared)



console.log('=============== 5 ================')
// Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)

const last_Elem =numbers_squared[numbers_squared.length - 1]
console.log(last_Elem)



console.log('=============== 6 ================')
// Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’

const user = {
    first_name: 'Ivan', 
    last_name: 'Ivanov', 
    age: 20, 
    salary: 500
    }
console.log(`Users name is: ${user.first_name} ${user.last_name}, He is ${user.age} yars old.`)    