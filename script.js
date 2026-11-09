
// Student Array
let students = [
    {
        name: "Riya",
        marks: 85,
        class: "10th",
        address: "Patna"
    },
    {
        name: "Aman",
        marks: 78,
        class: "9th",
        address: "Ara"
    },
    {
        name: "Priya",
        marks: 92,
        class: "10th",
        address: "Deoghar"
    },
    {
        name: "Rahul",
        marks: 75,
        class: "8th",
        address: "Piro"
    },
    {
        name: "Neha",
        marks: 88,
        class: "9th",
        address: "Bhojpur"
    }
];

// Get HTML Elements
let studentList = document.getElementById("studentList");
let search = document.getElementById("search");

// Display Student Cards
function displayStudents(data) {
    studentList.innerHTML = "";

    let cards = data.map(function(student) {
        return `
            <div class="card">
                <h3>${student.name}</h3>
                <p><b>Marks:</b> ${student.marks}</p>
                <p><b>Class:</b> ${student.class}</p>
                <p><b>Address:</b> ${student.address}</p>
            </div>
        `;
    });

    studentList.innerHTML = cards.join("");
}

// Search Students
search.addEventListener("input", function() {
    let searchValue = search.value.toLowerCase();

    let result = students.filter(function(student) {
        return student.name.toLowerCase().includes(searchValue);
    });

    displayStudents(result);
});

// Display All Students
displayStudents(students);
