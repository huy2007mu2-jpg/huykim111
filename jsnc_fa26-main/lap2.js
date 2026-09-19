// bài 1
const names = ["An", "Bình", "Nam", "Hòa", "Lan"];
// in all
console.log(names);
//  in đầu tiên
console.log(names[0]);
// in cuối cùng
console.log(names[names.length - 1]);
// so phần tử trong mảng
console.log(names.length);
// them than tu moi 
names.push("Hải");
console.log(names);
// xóa phần tử cuối cùng
names.pop();
console.log(names);

// bai 2
for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(element);
}
// bai 3
const student = {
  id: 1,
  name: "Nguyễn Văn An",
  age: 20,
  email: "an@gmail.com",
  major: "CNTT",
};
console.log(student.name);
console.log(student.age);
console.log(student.email);
console.log(student.major);