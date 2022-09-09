console.log("Hello World!");
console.log(10+10);
console.log ('merhaba dünya');
var myName = "Tars";
console.log(myName);
console.log(10+7+20+23);
// tek satır comment için iki // kullanırız.

/* çok satırlı comment için comment 
 kullanırız */ 

/* document.write("Hello World!") bu komut yazıyı web sayfasına yazdırıyor console'a yazdırmıyor*/

/* window.alert("Welcome to the JavaScript Excercise Page"); pop up komutu */

var myMessage ;
var myMessage2 = "My Message Hello World!";
console.log(myMessage2);

/* DATA TYPES IN JAVASCRIPT ARE : string, number, Boolean, Object, Undefined, Null */


var myFirstNumber = 2;
var mySecondNumber = 33.33;
var myStringNumber = "10000";
console.log(myFirstNumber, mySecondNumber, myStringNumber);

var escapeCharacter = "Escape Character kullanımı\"";
console.log(escapeCharacter);
console.log(myMessage2);

var myBoolean = true;
var mySecondBoolean = false;
console.log(myBoolean, 'and', mySecondBoolean);

//                        TRUE döndüren Boolean ifadeler
var x = Boolean('Hi Everybody');
var y = Boolean("false");
var z = Boolean(5);
var t = Boolean(3.14 +5);
var s = Boolean(-5);
console.log('x =', x);
console.log('y = ' + y);
console.log('z = ' + z);
console.log('t =', t);
console.log("s =", s);

//                        FALSE döndüren Boolean ifadeler
var xx = Boolean('');    // empty string
var yy = Boolean(0);
var zz = Boolean(-0);
var tt = Boolean(null);
var ss;                   //undefined
console.log('xx =', xx);
console.log('yy = ' + yy);
console.log('zz = ' + zz);
console.log('tt =', tt);
console.log("ss =" + ss);
console.log("ss =" + Boolean(ss));

//                        typeof komutu 

console.log("1 = " + typeof 100);
console.log("2 = " + typeof (3,14));
console.log("3 = " + typeof 'Clarusway');
console.log("4 = " + typeof '');
console.log("5 = " + typeof true);
console.log("6 = " , typeof (3 > 2, 2 > 3));
console.log("7 = " , typeof (8+3, 8*3, 3-8));
console.log(typeof ss); // yukarıda önceden tanımladığım bir değer

//                             VARİABLES 

var myName;

myName = "Tars"
console.log(myName);

var x = 5;
var y = 7;
y = x;
console.log(y);

var usedName = "Ali";
var secondUsedName = 'Mehmet'
usedName = secondUsedName;
console.log(usedName);

//                     let vs var vs const Komutları
// let : açıklamasını yaz
// const : immutable bir değişken adı için const kullanılır.

var a = 10;
{
    let b = 3;
}
console.log("a = "+ a);
// console.log("b = "+ b);   // generates an error

const xyzaei = 5;
// xyzaei = 4;  bu satırı aktif edersem hata verecek

// const x;  bu satırı aktif edersem SyntaxError veriyor 
// x = 7;    çünkü const'a kendi satırında atama yapılır sonraki satırda atama yapılamaz.

//                        Another Variable Exercises

var x = 0.2 + 0.1;
console.log(x);

var y = (0.2*10 + 0.1*10) / 10;
console.log(y);

var z = 111e3;  // e harfi bir sayının üstel gösteriminde kullanılıyormuş
console.log(z);

console.log(Number.MAX_SAFE_INTEGER);

var text = "He said; \"I will be there at 7.00\"";
console.log(text);

Boolean (3 < 2);  // return false

var myCar = new Object();         // OBJECT  
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
console.log(myCar);

var myCar2 = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};
console.log(myCar2);

myCar['make'] = 'Ford';  // iki gösterimde aynı özellikte
myCar.model = "Mustang";

var product = 2.0 * 3.0;
var product1 = 2.0 * 3.5;
var product2 = 2.0 * 3.0 + 1.0;
console.log(product, product1, product2);

var i = 10;
i++;
console.log(i);
var i = 10;
i--;
console.log(i);

var a = 8;
var b = 4;
var c = (a*b), d = (a+b);
console.log(c,d)

var a = 20;         // b eşittir a'nın modülüs bilmem kaçı komutu
var b = a %= 3;
console.log('modulus b=', b);

var x = 55;         // y eşittir x'in modülüs bilmem kaçı komutu
var y = x %= 5;
console.log(y);

var x = 23;
x %= 4;
console.log(x);

console.log(2===2)
console.log(2==2)

//                           COMPARISON OPERATORS
console.log('COMPARISON OPERATORS')
console.log("Operator == is use for Equality, 3==2 is:", 3 == 2)
console.log("Operator != is use for Inequality, 3!=2 is:", 3 != 2)
console.log("Operator == is use for Identity/Strict Equality(equal and of same type), 3===2 is:", 3 === 2)
console.log("Operator == is use for Non-identity/Strict inequality, 3!==2 is:", 3 !== 2)
console.log("Operator > is use for Greater than, 3>2 is:", 3 > 2)
console.log("Operator >= is use for Greater than or Equal, 3>=2 is:", 3 >= 2)
console.log("Operator < is use for Less than, 3<2 is:", 3 < 2)
console.log("Operator <= is use for Less than or Equal, 3<=2 is:", 3 == 2)

//                  NOTE THAT

var a = "10";
console.log(a==10); //BUT
var a = "10"; 
console.log(a===10); // It will give false, because type of a="10" and type of 10 are not same.


//                     LOGICAL OPERATORS MANTIKSAL OPERATÖRLER

/*  name    operator    description
    and         &&      Returns true, if both operands are true
    or          ||      Returns true, if one of the operands are true
    not         !       Returns true, if the operands is false,
                        and false if the operand is true
*/

var a = 10;
var b = 5;
console.log(a >= b && b<=20);
console.log(a >= b && b<=4);
console.log(a==b || b<=20);
console.log(a==b || b<4);
console.log(!(a>=b));
console.log(!(a<=b));

//               NULLISH COALESCİNG OPERATOR/ Boş Birleştirme Operatörü

const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0

const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA); // "default for A"
console.log(valB); // "" (as the empty string is not null or undefined)
console.log(valC); // 42

//const input = prompt();
//console.log(input)

//                  CONDITIONALS / IF / ELSE IF / ELSE STATEMENTS

var x = 3;                  // if örneği
if (x==3) {
    console.log(x===3);
    console.log("Tars");
}

var x = 3;
if (x > 8) {
    console.log("3 greater than 8");          // else örneği
} else {
    console.log("3 less than 8");
}

// another example for conditionals

var myName = "Tars";
var age = 22;
var universtyDegree = true;

var job;
if(age >=25 && universtyDegree === true){
    job = "Tars get the job";
    console.log(job);
} else if (age < 25 || age > 20 && universtyDegree=== true) {
    job = "Maybe you can apply junior position in our company"
    console.log(job)
} else {
    console.log("Excuse me! You can't aplly for this job")
}

// another example for conditionals

var x = 3;
if (x < 8) {
    console.log("3 greater than 8");
} else if ( x <= 8){
    console.log("3 Less than or Equal");
} else {
    console.log("both information above is not true")
}

// var grade = prompt() sürekli popup çıkmaması için kapattım
var grade = 82
if (grade >= 85) {
    console.log("You passed the test with AA");
} else if ( grade >= 75) {
    console.log("You passed the test with BA");
} else if (grade >= 60 ) {
    console.log("You passed the test with BB");
} else if (grade >= 50) {
    console.log("You passed the test with CC");
} else {
    console.log("You failed your grade less than 50");
}

//                          SWITCH CASE / switch
// karmaşık else if'ler yerine switch tercih edilebilir

/* switch(koşul) {
    case "koşul denetleyici":
        kod blogu;
        break;
        case "2. koşul denetleyicisi";
        kod blogu;
        break;
        ....
        default: "else bloğu gibi"
        kod bloğu;
        break;
} */

var a = "Tars";
switch(a) {
    case "Tarssss":
        console.log("Sonuç a'ya eşit mi" + a);
        break;
    case "Tars":
        console.log("Sonuç = " + a);
        break;
    default:
        console.log("Sonuç Bulunamadı.");
        break;
}

// başka bir switch case örneği;

var tarih = new Date();
var gün = tarih.getDay();

switch(gün) {
    case 1:
        console.log("Pazartesi");
        break;
    case 2:
        console.log("Salı");
        break;
    case 3:
        console.log("Çarşamba");
        break;
    case 4:
        console.log("Perşembe");
        break;
    case 5:
        console.log("Cuma");
        break;
    case 6:
        console.log("Cumartesi");
        break;
    case 7:
        console.log("Pazar");
        break;
    
}
var tarih = new Date().getDay();
tarih++;
console.log(tarih)
// Another switch case example
var level = 'two';
var title;
switch (level) {
       case 'one':
           title = "Level 1";
           break;
       case 'two':
           title = "Level 2";
           break;
       case 'three':
           title = "Level 3";
           break;
       default:
           title = "Out of range.";
           break;
}
console.log(title)

// Another switch case example

var myName = 'Edward';
switch (myName) {
  case 'John':
    console.log(myName + ' is a instructor.');
    break;
  case 'Walter':
  case 'James':
    console.log(myName + ' is a mentor.');
    break;
  default:
    console.log('Sorry, i dont know ' + myName+ '.');
}

var myName = "Tarss";
switch(myName) {
    case "Tarrs":
        myName = "Ahmet"
        console.log(myName + "This is your Name");
        break;
    case "Taras":
        myName = "Fatih"
        console.log(myName + " This is your Name");
        break;
    default:
        console.log(myName + " I couldn't find yoru Name");
}


//                      LOOPS
/* while /  for  /  for ..in / for .. of / do .. while /  break / continue */

// Example
for (var i = 0; i <= 5; i++) {
    console.log(i);
}

// Example
var i = 0;
var sum = 0;
while (i < 6) {
    var sum = sum + i;
    i ++;
    console.log("The total is : " + sum);
}
console.log("The total is : " + sum);

// Example

var i = 2;
var çıkarma = 4;
while (i > 0 && i < 5) {
    var çıkarma = çıkarma - i; i--;
    console.log("Sonuç = " + çıkarma);
}
console.log("Sonuç = " + çıkarma);

// example

var i = 6;
var sum=0;
do {
  var sum = sum + i;
  i++;
} 
while (i<6);

console.log ("The total is " + sum);

// example

var sum=0;
 for (var i = 0; i < 10; i++) {
  sum += i;
  console.log("The total is: " + sum);
}
console.log ("The total is " + sum);

//example

var i = 0;
while (i < 10) {
  if (i === 5) {
    break;
  }
  console.log(i);
  i += 1;
}
console.log(i);

console.log("space space space")
// example

for (var i = 4; i < 8; i++) {
    if (i ===5) {
      continue;
    }
    console.log(i);
}

// example

for (var i = 0; i <= 10; i++){
    if (i % 2 === 0) {
        console.log("Bu çift : " + i)
    } else {
        console.log("Na bu da tek : " + i)
    }
}

var i = 0;
var sum=0;
while (i < 3) {
var sum = sum + i; i++;
}
console.log ("The total is: " + sum);
//example
var sum = 0;
for (var i = 4; i < 7; i++) {
sum += i;
if (i ===5 || sum > 10) {
continue;
}
console.log(i);
}


//                      FUNCTIONS

/* function name(parameters){        // function nasıl oluşturulur
    statements
  }
 */
//düz function tanımlama

function square(number) {
    return number*number;
}
var myNumber = square(5);
console.log(myNumber);

//function expression

var square = function(number){return number*number}

console.log(square(4))

// function constructor

var new_square = new Function("number", "return number * number");
console.log(new_square(3));

// Arrow function 

var myMulti = (x,y) => {
    return x * y
} 
console.log(myMulti(4,5));

// other Arrow function syntax

var multi = (x,y) => x * y; // tek satırsa {}'e gerek yok ama içerisinde
console.log(multi(8,4));    //birden çok işlem/fonsiyon olacaksa 
                            // { x * y }; şeklinde kullanabilirsin.

var multi = (x,y) => {x * y};
console.log(multi(3,4))

//function içerisinde function iç içe function

function islem (a, b){ 
    function islem2(x) {
        return x * x 
    }
        return islem2(a) + islem2(b)
}
console.log(islem(3, 4));






//      RAZOR'ün gönderdiği otomatik tablo oluşturan kod bloğu

/* var i,j;
var satir;
var sutun;
satir=prompt("Tablonun satır sayısını giriniz:");
sutun=prompt("Tablonun sütun sayısını giriniz:");
document.write("<table border='1'>");
for(i=1; i<=satir; i++)
 {
      document.write("<tr>");
      for(j=1; j<=sutun; j++)
       {
            document.write("<td>A</td>");
       }
       document.write("</tr>");
 }
document.write("</table>"); */


/* 

var notlar = new Array();
var i = 0;
var toplam = 0;

    for (i = 0; i < 4; i++) {
        notlar[i] = prompt(i+1 + "Bir sayı giriniz");
        toplam = toplam + parseInt(notlar[i]);
        var avg = toplam / i
 
if (notlar === "q" && notlar === "Q") {
    console.log("Not Ortalamanız: " + avg);
    
} else if (not < 0 ){
    console.log("Girilen not 0'dan küçük, 0-100 arasında olmalıdır!");
    
} else if (not > 100) {
    console.log("Girilen not 100'den büyük 0-100 arasında olmalıdır!");

} else {
    console.log("Yok olmadı bir türlü ortalamayı hesaplatamadınız :)");
}
}*/
 
//                     JS STRING METHODS

// length          karakter sayısını döndürür

var myName = "Tars";
var herName = "";

console.log(myName.length);
console.log(herName.length)


// concat           iki veya daha fazla stringi birleştirir
//                  plus + operatörü yerine kullanılabilir
//                  stringde boşluk yoksa boşluksuz birleştirir.


var string1 = "Hello";
var string2 = "Tars";
var string3 = string1.concat(string2);
console.log(string3);


// charAt       bir stringdeki istediğimiz index elemanını döndürür

var string = "Clarusway"
console.log(string.charAt(0));
console.log(string.charAt(6));
console.log(string.charAt(string.length-1));  // son karakteri döndürme
console.log(string.length-1);

// includes         bir strinde bir karakterin olup olmadığını döndürür
//                  karakter varsa TRUE, yoksa FALSE
//                  büyük küçük harflere duyarlı

var string = "Hello Tars, welcome to our group";
var str = string.includes("wel");
var str2 = string.includes("Star");
console.log(str);
console.log(str2);

// indexOf  and lastIndexOf    karakterin veya kelimenin dizede "ilk
//                           geçtiği" yerin konumunu indexsini döndürür.
//                           o karakteri bulamazsa -1 döndürür.

var string = "Hello Tars, welcome to our gruop";
var str = string.indexOf('wel');
console.log(str);
console.log(string.indexOf("Y"));
console.log(string.indexOf(" "));
console.log(string.indexOf("o", 5));

// lastIndexOf               karakterin "son geçtiği yerin" kaçıncı
//                           index olduğunu döndürür

var string = "Hello Tars, welcome, how are you Tars";
console.log(string.lastIndexOf('T'));
console.log(string.indexOf("T"));

// replace          string içerisindeki bir karakteri veya kelimeyi
//                  değiştirir. ilk eşleştiği değeri değiştirir.
//                  case sensitive'dir değiştirmek için / /i kullanılır.

var string = "Hello Tars, welcome, how are you Tars";
console.log(string.replace("welcome", "your WELCOME"));
console.log(string.replace(/tars/i, 'CASE'));

//search         bu da string içerisindeki konumunu döndürüyor.
//               eşleşme varsa konumu eşleşme yoksa -1 döndürüyor
//               indexOf gibi şu konumdan başla gibi değer alamaz

var string = "Hello Tars, welcome, how are you Tars";
console.log(string.search("how"));
console.log(string.search("Case"));


// slice         bir bölümü karakteri çıkarır ve onu yeri bir string
//                olarak döndürür

var string = "Hello Tars, welcome, how are you Tars";
console.log(string.slice(12, 17));
console.log(string.slice(12, -10));
console.log(string.slice(12));
console.log(string.slice(-5,-1))
console.log(string.slice(-1))

// split        stringlerde farklı arraylerde farklı bu komut
//              örneklerle anlayamazsan google'la
//              tamam çözdüm :) girilen elemanı kaldırıyor, ayrıca
//              kaldırılan elemanın olduğu heryeri ayrı yeni bir string
//              yapıyor. string'i yeni bir Array içerisine atıyor.

var string = "Hello Tars, welcome, how are you Tars";
console.log(string.split('e'));
console.log(string.split(" "));
//another example
var string ="A B C D E F G H";
console.log(string.split(" "));   //naha burda olayı daha iyi çözdük

// substr           bu da slice methoduna benziyor sanki bakalım;

var string = "Hello Tars, How are you Bro";
console.log(string.substr(2));  // üstü çizik geliyor zaten kaldırılmış
console.log(string.substr(6,21));  
console.log(string.substr(12,3)); // 12. karakterden sonra 3 karakter yaz


// substring       substr ile aynı gibi

var string = "Hello Tars, How are you Bro";
console.log(string.substring(3,10));  // ee ne farkı var substr'den ?
console.log(string.substring(3));
console.log(string.substring(5, 1));  // burada bi fark oluştu

// toLowerCase        bütün harfleri küçük yapar işte

var string = "Hello TARS, HOW ARE yoU BrO";
console.log(string.toLowerCase());

// toUpperCase        bütün harfleri büyük yapar bu da

var string = "hellooo tars, how are you bro";
console.log(string.toUpperCase());

// trim                stringin iki tarafındaki boşlukları da kaldırır
//                     trimStart veya trimEnd olarak da kullanılabilir

var string = "    Hello Tars, How are You     ";
console.log(string.trim());
console.log(string.trimEnd());
console.log(string.trimStart());


//                  ÇEŞİTLİ METHODLAR

// \n  ile konsolda alt satıra geçme

var message = "This is my\n first Message";
console.log(message);

// `` böyle bi karakter var AltGr ve ;, tuşuyla açılıyor Template için

var message = `This is my 
first message`
console.log(message);

var message = 'This is my\n' + '\'first\' message';
console.log(message);

var message =`This is my   
'first' message`;           // bu yönten yukarıdakinin basit yazım hali
console.log(message);

//   ${}                bu işaretin kullanımı

var theirName = "Katya"

var message =`Hi ${theirName}

Thank you for joining my mailing list.

Regards..,
Tars `
console.log(message);

//document.write ile deneyelim
var hisName = 'Alex';
var message =`Hi ${hisName}

Thank you for joining my party.

See you soon..
Tars`
//document.write(message); // konsolda çalışıyor fakat sayfada cıks



//                      ARRAYS

var names= ["Ali", "Veli", "Deli"];
var names2 = [
    "Ali",
    "Veli",
    "Deli"
];
console.log(names);
console.log(names2);

// çok kullanılması tavsiye edilmiyor ama new methodu ile array

var names = new Array("Ali", "Veli", "Deli");
console.log(names);

// Array elemanlarına ulaşma ve değiştirme

var colors = ["Red", "Blue", "Yellow", "Gray"];
console.log(colors);
console.log(colors[2]);
colors[2] = "Purple"    // dizideki bir ögeyi değiştirme
console.log(colors[2]);
console.log(colors);

//  Arrays are Objects

var Arr = ["Tars", "Bes", 32];

var ArrObject = [firstName="Tars", lastName="Bes", age=32];
console.log(Arr[0], Arr[1], Arr[2]);
console.log(ArrObject[0]+ArrObject[1]+ ArrObject[2]);

// length               Array lerde dizi içindeki eleman sayısını verir

var colors ="Red"
console.log(colors.length);  // stringlerde böyle

var colors = ["Red", "Pink", "Blue", "Yellow", "Purple", "Black"];
console.log(colors.length);

var colors = [];
console.log(colors.length);


// concat               Array lerde iki veya daha fazla diziyi 
//                      birleştirmek için kullanılır

var colors = ["Red", "Blue", "Black"];
var flowers = ["Papatya", "Gül", "Orkide"];
console.log(colors.concat(flowers));
var cars = ["Doğan", "Şahin", "Lamborgini"];
console.log(colors.concat(flowers, cars));
console.log(colors.concat(flowers).concat(cars));


// sort              Alfabetik olarak sıralıyormuş, stringler için
//                   bir fonksiyon numaraları sort ile sıralarsan 
//                   25'i 100'den sonra yazar ASSCI nedeniyle muhtemelen

var arr = ["Zeki", "Recep", "Rana", "Elif", "Katya", "Arthur"];
console.log(arr.sort());


// push()           dizinin sonuna eleman ekleeeer

var arr = ["Ali", "Veli", "Ahmet"];
console.log(arr);
arr.push("Deli", 5);
console.log(arr);
console.log(arr.push("Zeki"));
console.log(arr);


// pop()            dizinin sonundaki elemanı kaldırır

var arr = ["Gül", "Papatya", "Lale"];
arr.pop();
console.log(arr);
console.log(arr.pop());

// shift()          dizinin ilk elemanını kaldırır ve onu döndürür

var arr = ["Ali", "Veli", "Deli"];
console.log(arr.shift());       // bunun çıktısı Ali
console.log(arr);           //kalıcı değişiklik yapıyormuş

// unshift()         dizinin başına eleman ekliyor ve 
//                    eleman sayısını döndürüyor     

var arr = ["Ali", "Veli", "Deli"];
console.log(arr.unshift("Zeki"));
console.log(arr);

// splice()             // dizide index numarasını 
//                       elemanı kaldırıyor ve yerine yenisini ekliyor
//                      bu komut biraz cins bi komutmuş, 1. parametre
//                     kaldırma işlemine nereden başlayacağını, 
//                     2. parametre kaç eleman silineceğini,
//                       devamında gelen parametler ise ne ekleneceğini
//                         ifade ediyormuş.


var arr = ["Ali", "Veli", "Deli", "Zeki", "Ahmet"];
console.log(arr.splice(0, 2, "Katya", "Lisa"));
console.log(arr);



// slice()         diziden dizi çıkarmak için 1. parametre yeni dizinin
//                  başlangıç konumu, 2. parametre (son dahil değil)
//                       bitiş konumu.     


var arr = ["Ali", "Veli", "Deli", "Zeki", "Ahmet", "Mehmet"];
console.log(arr.slice(1,4));
console.log(arr.slice(3,6));
console.log(arr.slice(-1));
console.log(arr.slice(3));


// indexOf        dizideki elemanın ilk geçtiği konumu döndürür. ilk
//               parametre elemanı, 2. parametre nereden itibaren 
//                  başlayacağını ifade eder. yoksa -1 döner          

var arr = ["Red", "Blue", "Ali", "White", "Ali", "Veli"];
console.log(arr.indexOf("Ali",0));
console.log(arr.indexOf("Al"))

// lastIndexOf          dizideki elemanın son geçtiği konumu döndürür.
//                       Aramaya sondan başlar

var arr = ["Red", "Blue", "Ali", "White", "Ali", "Veli"];
console.log(arr.lastIndexOf("Ali",-1))
console.log(arr.lastIndexOf("Ali"));
console.log(arr.lastIndexOf("Al"));

console.log(typeof arr);


//                  NUMARALARI SORT ETME İŞLEMİ SIRALAMA NUMARA

var numbers = [45, 98, 12, 3, 8, 53, 10, 9, 7, 6, 5];
console.log(numbers.sort()); // bu yöntem istediğimiz gibi sıralamıyor
console.log(numbers.sort(function(a,b){return a -b }));

var numbers = [40, 100, 1, 5, 25, 10];
console.log(numbers.sort()); // bu yöntem istediğimiz gibi sıralamıyor
console.log(numbers.sort(function(a,b){return a -b }));


document.write("This is the end of my basic JS codes and command");


















