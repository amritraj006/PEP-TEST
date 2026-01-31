const div = document.querySelector('#container');
const ul = document.createElement('ul');


div.appendChild(ul);

const students = [
    {name: "XYZ", marks: 78},
    {name: "ABC", marks: 89},
    {name: 'UIX', marks: 82}
]

const bgColors = ["red", "green", "blue"];

for (i = 0; i<3; i++) {
    const li = document.createElement('li');
    li.className = `list list${i+1}`;
    li.textContent = `Name: ${students[i].name} Marks: ${students[i].marks}`
    li.style.backgroundColor = `${bgColors[i]}`
    li.style.color = "white"
    ul.appendChild(li);
}



