// index.html içinden çalıştırılacak dosya değiştirilebilir!

// Type Safe Değil!
var sayi1 = 10
sayi1 = "İbrahim Can Erdoğan"

console.log(sayi1);


// let kullanarak type safe bir güvenlik sağlanır!
let sayi2 = 10
sayi2 = "İbrahim Can Erdoğan"

console.log(sayi2)

// Ekrana Objeyi getirme!
let sayi3 = 10
sayi3 = "İbrahim Can Erdoğan"
let student = {id:1, name:"İbrahim"}
console.log(student)


// Fonksiyon Tanımlama
// Save fonskiyonu içinde istediğimizi verebiliyoruz bu bir güvenlik açğıdır!
// puan = 10 fonskiyonumuzdaki default değeri gösterir!
function save1(ogrenci, puan = 10) {
    console.log("1. save fonksiyonu çalıştı!");
    console.log(ogrenci.name + ": "+ puan);
}
save1(student, 100)

//  Default değer fonksiyonda 1. sıradaysa undefined olarak tanımlanabilir!
function save2(puan = 10, ogrenci) {
    console.log("2. save fonksiyonu çalıştı!");
    console.log(ogrenci.name + ": "+ puan);
}
save2(undefined,student)


// Array

let students1 = ["İbrahim", "Can", "Erdoğan", "Engin"]

console.log(students1);

student = {id:1, name:"Can"}
let students2 = [student, {id:2, name:"İbrahim"}, "Ankara",{city:"İstanbul"}]

console.log(students2);


// Functions

let showProducts = function (id,...products) {
    console.log(id);
    console.log(products[0]);
}

// Bu şekilde gönderirsek id undifended array ise boş olarak döner!
showProducts()

showProducts(10, ["Elma","Armut", "Karpuz"])


// Spread- Ayırmak anlamına gelir ve 3 nokta ile çaprılır!

let points = [1,23,94,4,56,64,1312,45,12]
console.log(...points);
console.log(Math.max(...points))

console.log("ABC", "D",..."EFG", "H");


