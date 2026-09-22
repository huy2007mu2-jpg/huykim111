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
const student = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    age: 20,
    email: "an@gmail.com",
    major: "CNTT",
  },
  {
    id: 2,
    name: "Trần Thị Bình",
    age: 21,
    email: "binh@gmail.com",
    major: "Kinh tế",
  },
  {
    id: 3,
    name: "Lê Văn Nam",
    age: 22,
    email: "nam@gmail.com",
    major: "Marketing",
  }
];
for (let index = 0; index < student.length; index++) {
  const element = student[index];
  console.log(element.id);
  console.log(element.name);
  console.log(element.age);
  console.log(element.email);
  console.log(element.major);
}

const hocsinhDiv = document.getElementById("hocsinh");
let comen = "";
for(let i = 0; i < student.length; i++){
  comen +=` ten sv la ${student[i].name}<br>`;

}
hocsinhDiv.innerHTML = comen;