//работа с массивами
const arr = [1,2,3,4];
// добавление элементов
arr.push(10,20);//добавляет элементы в конец
console.log(arr);

// удаление элемента
arr.splice(1,2);// удаляем два эл-та, начиная с первого индекса
console.log(arr);
// удаляем один эл-т, начиная с индекса 0 и добавляем эл-ты 100,200 на место последнего удаляемого эл-та
arr.splice(0,1,100,200);
console.log(arr);
// добавляяем эл-ты в массив без удаления
arr.splice(2,0,600,700);
console.log(arr);

// indeOf - возвращает индекс эл-та в массиве
const index = arr.indexOf(100);
const lindex = arr.lastIndexOf(100);
console.log(index);

// создаем новый массив
const cats = [
    {
        color:'red',
        age: 5,
},
{
    color:'white',
    age: 1,
},
{
    color:'blue',
    age: 2,
},
{
    color:'red',
    age: 4,
},
];
// вывести всех красных котов
const fcats = cats.filter((cat) => cat.color == 'red');
console.log(fcats);
// вывести оставшихся котов
cats.filter(
    (cat) => cat.color == 'red'
    ).forEach(console.log);

// вывести массив, содержащий age-s всех красных котов
const ages = cats.filter(
    (cat) => cat.color == 'red'
    ).map((cat) => cat.age);
    console.log(ages);
// вывести средний арифм.возраст всех красных котов
const a = cats.filter((cat) => cat.color == 'red').map((cat) => cat.age).reduce(( p, c, index, arr ) => p + c/arr.length, 0);
console.log(a);

// Set-класс ведет себя так жкак и Hashset в java
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
console.log(set);

// Map - как HashMap в java
const map = new Map();
map.set(1,'value');
map.set([2],'value');
map.set(1,'hello');
console.log(map);
console.log(map.get(1));

//форматирование строк
console.log('Hello' + 10);
// новый способ
const name = 'Vasya';
const age  = 12;
console.log(`My name is ${name}. Im ${age} years old`);

// стандартные значение переменных или констант
const u =undefined;
const n = null; //ссылка которая никуда не указывает
const inf = Infinity;//бесконечность (+/-)
const m = NaN;// не число
console.log('a' - 10);

let b = 100;
//false-если подставим: null, undefined, NaN, 0, "", false
if(b){
    console.log('wtf?');
}
b = 0;
if(b){console.log ('yes'); }
b = '';
if(b){console.log ('yes'); }
b = [];
if(b){console.log ('yes'); }
 console.log(10 == 10);//true
 console.log('10' == 10);//true

// == - сравнивает только значения без сравнения типа
 //==== -сравнивает и значение и тип
 //!==- сравнивает и значение и тип

 console.log('10' === 10);//false
 console.log(10 === 10);//true

 //диалоговые окна
 alert('Hello');//1-поменять стиль нельзя

 const answer = confirm('Do you want to close the window?')//2. yes/no
 console.log(answer);

 const text = prompt('How are you?','fine');// просит ввести информацию, необязательный второй арг
 console.log(text);
 //dвозвращается в виде строки

 //преобразовать строку в число
 const int = parseInt(text);
 const p = parseFloat('3.14');









