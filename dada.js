
****Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.
*******method first********
var str='iloveyou,Piajochek';
let first=str.split('');
a=first[0].toUpperCase()+first.join('').slice(1);
console.log(a);

*******method two********
var str='iloveyou,Piajochek';
sub=str.slice(0,1).toUpperCase();
result=sub+str.slice(1);
console.log(result);
*******method two********

********Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл
var str='123456';
a=str.split('').reverse().join('');
console.log(a)

*****Проверьте, что строка начинается на http://.
var s='http://dagaga';
s1=s.substr(0,7);
if(s1==='http://'){
    console.log(s1)

    console.log('da')
}
else{
    console.log('net')
}
****Проверьте, что строка заканчивается на .html.
var s='nkgnkagagg.html';
s1=s.substr(-5);
if(s1==='.html'){
    console.log(s1)//проверка

    console.log('da')
}
else{
    console.log('net')
}









