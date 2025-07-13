// 1️⃣ Teacher Interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: false,
  contract: false,
};

console.log(teacher1);

// 2️⃣ Directors Interface
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "Jane",
  lastName: "Smith",
  location: "New York",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// 3️⃣ printTeacherFunction interface + implementation
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));

// 4️⃣ StudentClass Interfaces and Class Implementation

// Interface for constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("Lenny", "James");
console.log(student.displayName()); // Output: Lenny
console.log(student.workOnHomework()); // Output: Currently working
