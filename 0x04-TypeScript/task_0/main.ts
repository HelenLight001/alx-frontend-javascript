interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "Lenny",
  lastName: "James",
  age: 24,
  location: "Lagos",
};

const student2: Student = {
  firstName: "Ada",
  lastName: "Obi",
  age: 22,
  location: "Abuja",
};

// Array of students
const studentsList: Student[] = [student1, student2];

// Create a table element
const table: HTMLTableElement = document.createElement("table");
table.border = "1"; // Optional: add border for visibility

// Create table header row
const headerRow: HTMLTableRowElement = document.createElement("tr");
const nameHeader: HTMLTableCellElement = document.createElement("th");
nameHeader.textContent = "First Name";
const locationHeader: HTMLTableCellElement = document.createElement("th");
locationHeader.textContent = "Location";

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Append a new row for each student
studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const nameCell: HTMLTableCellElement = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

// Add the table to the document body
document.body.appendChild(table);
