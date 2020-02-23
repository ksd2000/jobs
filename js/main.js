"use strict";

let arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];
let arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'];

function convert(str, z) {
    let arrNew = [];            //массив значений после конвертации
    let a=arr_ru.length;      //длина массива
    let b=arr_RU.length;
    for (let val of str) {
        let key = 0;
        key = arr_ru.indexOf(val);
        if (key < 0) {                  //проверка состояния регистра и наличие символов
            key = arr_RU.indexOf(val);
            if (key < 0) {
                arrNew.push (val);
            } else {                        //для верхнего регистра
                if (z < 0) {                //проверка направления смещения
                    if (key < -z) {
                        arrNew.push (arr_RU[key+z+b]);
                    } else {
                        arrNew.push (arr_RU[key+z]);
                    }
                } else {
                    if (key < b-z) {
                    arrNew.push (arr_RU[key+z]);
                    } else {
                        arrNew.push (arr_RU[key+z-b]);
                    }
                }
            }
        } else {                            //для нижнего регистра
            if (z < 0) {                    //проверка направления смещения
                if (key < -z) {
                    arrNew.push (arr_ru[key+z+b]);
                } else {
                    arrNew.push (arr_ru[key+z]);
                }
            } else {
                if (key < b-z) {
                arrNew.push (arr_ru[key+z]);
                } else {
                    arrNew.push (arr_ru[key+z-b]);
                }
            }
        }
    }
    console.log(arrNew);
    console.log(str);
    return arrNew.join(' ');
}
console.log( convert("Привет мир!", 3) );