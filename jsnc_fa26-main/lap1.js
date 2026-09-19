console.log("day la lab 1");
// PHP ; $_tenbien
// JS let, const
// var: ko dung var
let name = "hoadv";
name = "hoadv21";
let age = 36;

console.log("Ten toi la: ", name);
console.log("Tuoi cua toi la:", age);

//bai2
let agee = 20;
console.log(agee); // 20

agee = 21;
console.log(agee); // 21

//bai3
const a = 10;
const b = 5;

console.log("Tổng: " + (a + b));   // 15
console.log("Hiệu: " + (a - b));   // 5
console.log("Tích: " + (a * b));   // 50
console.log("Thương: " + (a / b)); // 2

//bai4
function sayHello(name) {
  console.log(`Xin chào ${name}`);
}
sayHello("Alice");
//bai5

// BÀI 5

function sum(a, b) {
    return a + b;
}

var result = sum(10, 20);

console.log(result);


// BÀI 6: 

function calculateTotal(price, quantity) {
    return price * quantity;
}

var total = calculateTotal(50000, 3);

console.log(total);



// BÀI 7:


var math = 8;
var english = 7;
var javascript = 9;

function calculateAverage(math, english, javascript) {
    return (math + english + javascript) / 3;
}

var average = calculateAverage(8, 7, 9);

console.log(average);



// BÀI 8


var studentName = "Nguyễn Văn An";
var studentAge = 20;
var className = "WD01";


function showStudent(name, age, className) {
    console.log("Họ tên: " + name);
    console.log("Tuổi: " + age);
    console.log("Lớp: " + className);
}


showStudent(studentName, studentAge, className);



function calculateAverage2(math, javascript) {
    return (math + javascript) / 2;
}

var average2 = calculateAverage2(8, 9);

console.log("Điểm trung bình: " + average2);
