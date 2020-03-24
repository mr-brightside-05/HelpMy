
//  alert('Работает');

document.write("тестовое сообщение1111111111111111111111111111111")


//Ассациативные масивы с персонами

var person = [];
var a = {
    name: "Rachel",
    surname: "Green",
}
a.fatherName = "leonard";
var b = {
    name: "Shldon",
    surname: "Cooper",
    // age: 28,
}
b.age = 28;
var c = {
    name: "Barney",
    surname: "Stinson",

}
c.sex = "man";
var d = {
    "name": "Gordon",
    "surname": "Shumway",
    "palnet": "Melmak"
}
var e ={}
var person01 = `[
    {
      "name": "Rachel",
      "surname": "Green",
      "fatherName": "leonard"
    },
    {
      "name": "Shldon",
      "surname": "Cooper",
      "age": 28
    },
    {
      "name": "Barney",
      "surname": "Stinson",
      "sex": "man"
    },
    {
      "name": "Gordon",
      "surname": "Shumway",
      "palnet": "Melmak"
    }
  ]`
parsedPerson01 = JSON.parse(person01)
e.name = parsedPerson01[0]['name'];
e.surname = parsedPerson01[0]['surname'];
e.fatherName = parsedPerson01[0]['fatherName'];

//Запушиваем в масив


person.push(a);
person.push(b);
person.push(c);
person.push(d);
person.push(e);


//Запускаем цикл который выводит таблицу с именем и фамилией

var str = "<table border='1'>"
for (let i=0;i<person.length;i++){
    str += `<tr><td>${i}</td><td>${person[i]['name']} </td><td>${person[i]['surname']} </td></tr>`
}
str += "</table>"

//Запускаем цикл который выводит таблицу с именем и фамилией и красим

var str02 = "<table border='1'>"
for (let k=0;k<person.length;k++){
    str02 += `<tr><td style="background-color: crimson;" >${k}</td><td style="background-color: slateblue;">${person[k]['name']} </td><td style="background-color: greenyellow">${person[k]['surname']}</td></tr>`
}
str02 += "</table>"

//Запускаем цикл который выводит таблицу со всеми полями

var str03 = "<table border='1'>"
var out = "<tr>"
var allKey = [];
for (let k=0;k<person.length;k++){
    for (var key in person[k]){
        out += `<td style="background-color: crimson;">${person[k][key]}</td>`;
  
    }

    out += "</tr>";
   
}
str03 += out;
str03 += "</table>"




//Задание HTML th optional Переработайте вывод persons в HTML с 
// оиском всех возможных колонок во всех записях, выводом названий колонок в заголовок HTML-таблицы.
//  Для решения этой задачи вначале узнайте множество полей (ключей) во всех записях (они не совпадают), 
//  выведите HTML-заголовок используя тэги <th>, а потом выводите все записи. Ниже выведите все персоны построчно. 
//  Следите за корректностью колонок. Для этого вам нужно итерировать общий набор колонок, а не каждую персону, 
//  колонки из которой могут отличаться от предыдущей.

var str04 = "<table border='1'>"
var out = "<tr>"
var allKey = [];
for (let k=0;k<person.length;k++){
    for (var key in person[k]){
        out += `<td style="background-color: crimson;">${person[k][key]}</td>`;
        eleKey=Object.keys(person[k]); //соабрал все ключи
        // eleKey = allKey +  allKey[k];
    }
    allKey += eleKey; //соабрал все ключи
    out += "</tr>";
   
}
str04 += out;
str04 += "</table>"

//выводим

console.log(str03);
console.log(out);
console.log(str)
document.write(str)
console.log(str02)
document.write(str02)
console.log(str03)
document.write(str03)
document.write(str04)
console.log(allKey)



























// // Задание №0
// document.getElementById('hw300').onclick = function hw300() {
//     var body = {
//         tagName: "body",
//         subTags: [
//             {
//                 tagName: "div",
//                 subTags: [
//                     {
//                         tagName: "span",
//                         text: "Enter a data please:",
//                     },
//                     {
//                         tagName: "br/",
//                     },
//                     {
//                         tagName: "input",
//                         attrs: {
//                             type: "text",
//                             id: "name",
//                         },
//                     },
//                     {
//                         tagName: "input",
//                         attrs: {
//                             type: "text",
//                             id: "surname",
//                         },
//                     },
//                 ]
//             },
//             {
//                 tagName: "div",
//                 subTags: [
//                     {
//                         tagName: "button",
//                         attrs: {
//                             id: "ok",
//                         },
//                         text: "OK",
//                     },
//                     {
//                         tagName: "button",
//                         attrs: {
//                             id: "cancel",
//                         },
//                         text: "Cancel",
//                     },
//                 ]
//             },
//         ]
//     }

//     alert(body.subTags[1].subTags[1].text);
//     alert(body.subTags[0].subTags[3].attrs.id);
// }


// // Задание №1
// document.getElementById('hw301').onclick = function hw301() {
//     var person = {
//         name: prompt("Enter a name"),
//         surname: prompt("Enter a surname"),
//         age: prompt("Enter a age"),
//         drive: confirm('Are you have Driver license?'),
//     }
//     alert(('Name: ') + person.name + (' Surname: ') + person.surname + (' Age: ') + person.age + (' Driver license: ') + person.drive);
// }
// // Задание №2
// document.getElementById('hw302').onclick = function hw302() {
//     var person = {
//         name: prompt("Enter a name"),
//         surname: prompt("Enter a surname"),
//         age: prompt("Enter a age"),
//         drive: confirm('Are you have Driver license?'),
//         smartphone: {
//             owner: prompt('Enter a owner of smartphone'),
//             year: prompt('Enter a year of smartphone'),
//         },
//         laptop: {
//             owner: prompt('Enter a owner of laptop'),
//             year: prompt('Enter a year of laptop'),
//         }
//     }

//     alert(('Name ') + person.name + (' Surname ') + person.surname + (' Age ') + person.age + (' Drive ') + person.drive + ('Owner of smartphone ')
//         + person.smartphone.owner + (' Year of smartphone ') + person.smartphone.year + (' Owner of laptop ') + person.laptop.owner + ('  Year of laptop ') + person.laptop.year);
// }
// // Задание №3
// document.getElementById('hw303').onclick = function hw303() {
//     var dataArr = []; // объявить массив 
//     dataArr[0] = prompt('Значение 1');
//     dataArr[1] = prompt('Значение 2');
//     dataArr[2] = prompt('Значение 3');
//     alert(dataArr);
// }

// // Задание №4

// document.getElementById('hw304').onclick = function hw304() {
//     var ind = 1;
//     while (count !== true) {
//         var count = confirm('lets go');
//         ind = ++ind;
//         alert(ind);
//     };
// }
// // Задание №5  

// document.getElementById('hw305').onclick = function hw305() {
//     var dataArr01 = [];
//     while (dataItem01 !== null) {
//         var dataItem01 = prompt("Data input", '');
//         dataArr01.push(dataItem01);
//     }
//     alert(dataArr01);
// }
// // Задание №6

// document.getElementById('hw306').onclick = function hw306() {
//     var dataArr01 = [];
//     for (var i = 1; i < i + 1; i++) {
//         dataArr01[i] = prompt("Data input");
//         if (null == dataArr01[i]) {
//             alert('Data input end');
//             break;
//         }
//     }
//     alert(dataArr01);
// }

// // Задание №7

// document.getElementById('hw307').onclick = function hw307() {
//     for (var i = 0; i < i + 1; i++) {
//         if (Math.random() > 0.9) {
//             break;
//         }
//     }
//     alert('number of iterations ' + i);
// }
// // Задание №8

// document.getElementById('hw308').onclick = function hw308() {

//     while (dataItem01 == null) {
//         var dataItem01 = prompt("Data input", '');

//     }
//     alert('END');
// }
// // Задание №9
// document.getElementById('hw309').onclick = function hw309() {
//     var summ = 0;
//     var n = prompt("Введите макс значение прогрессии", "");
//     for (var i = 1; i <= (3 * n); i = i + 3) {
//         summ = summ + i;
//     }
//     alert(summ);
// }
// // Задание №10
// document.getElementById('hw310').onclick = function hw310() {
//     var ches = [];
//     for (var i = 0; i < 5; i++) {

//         ches.push('#');
//     }
//     console.log(ches.join(' '))
//     alert(ches.join(' '));
// }
// // Задание №11

// document.getElementById('hw311').onclick = function hw311() {
//     var ches = [];
//     for (var i = 0; i < 10; i++) {

//         ches.push('0123456789\n');
//     }
//     console.log(ches.join(' '))
//     alert(ches.join(' '));
// }
// // Задание №12
// document.getElementById('hw312').onclick = function hw312() {

//     var hight = prompt("Введите макс значение высоты", "");
//     var wight = prompt("Введите макс значение ширины", "");
//     var out = [];
//     if (hight % 2 !== 0) {
//         hight = hight - 1;
//         for (let i = 0; i < wight; i++) {

//             for (let k = 0; k < 1; k++) {
//                 out += '.'
//             }
//             out += '#'
//         }
//         out += '\n';
//     }

//     for (let j = 0; j < hight / 2; j++) {
//         for (let i = 0; i < wight; i++) {

//             for (let k = 0; k < 1; k++) {
//                 out += '#'
//             }
//             out += '.'
//         }

//         if (i = wight) {
//             out += '\n';
//             for (let i = 0; i < wight; i++) {
//                 for (let k = 0; k < 1; k++) {
//                     out += '.'
//                 }
//                 out += '#'
//             }
//             out += '\n';
//         }
//     }

//     alert(out)
// }
// // Задание №13
// document.getElementById('hw313').onclick = function hw313() {
//     var datablok = [];
//     var caunt = prompt('')
//     for (var i = 0; i < caunt; i++) {
//         // datablok += i * i *i;

//         var item = i * i * i;
//         datablok.push((' ') + (item));
//     }
//     alert(datablok);
// }
// // Задание №14
// document.getElementById('hw314').onclick = function hw314() {
//     // Создать многомерный массив
//     var table = new Array(10);		// В таблице 10 строк
//     var x = prompt('введите число от 1 до 9');
//     var y = prompt('введите число от 1 до 9');
//     for (var i = 0; i < table.length; i++)
//         table[i] = new Array(10);		// В каждой строке 10 столбцов

//     // Инициализировать массив и вывести на консоль
//     for (var row = 0, str = ''; row < table.length; row++) {
//         for (var col = 0; col < table[row].length; col++) {
//             table[row][col] = (row) * (col);

//             str += table[row][col] + '  ';
//         }
//         console.log(str + '\n');
//         str = '';
//     }
//     alert(table[x][y])
// }

// // Задание №15

// var table = new Array(10);		// В таблице 10 строк

// for (var i = 0; i < table.length; i++)
//     table[i] = new Array(10);		// В каждой строке 10 столбцов

// // Инициализировать массив и вывести на консоль
// for (var row = 0, str = ''; row < table.length; row++) {
//     for (var col = 0; col < table[row].length; col++) {
//         table[row][col] = (row) * (col);

//         str += table[row][col] + '  ';
//     }
//     console.log(str + '\n');
//     str = '';
// }

// document.getElementById('hw315').onclick = function hw315() {
//     var table01 = document.querySelector('#table01');


//     fillTable(table01, table);

//     function fillTable(table01, table) {
//         for (var i = 0; i < table.length; i++) {
//             var tr = document.createElement('tr');
//             for (var j = 0; j < table[i].length; j++) {
//                 var td = document.createElement('td');
//                 td.innerHTML = table[i][j];
//                 tr.appendChild(td);

//             }
//             table01.appendChild(tr);
//         }

//     }
// }

// // Задание №16

// document.getElementById('hw316').onclick = function hw315() {
//     var stings = [];
//     for (var i = 1; i <= 6; i++) {
//         var pyramid = "";
//         for (var j = 1; j <= (2 * 6 - 1); j++) {
//             (j >= 6 + 1 - i && j <= 6 - 1 + i) ? pyramid += "#" : pyramid += ". ";

//         }
//         stings.push(pyramid);
//     }

//     alert(stings.join('\n'))
// }


