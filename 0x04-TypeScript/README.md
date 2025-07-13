# 0x04-TypeScript

This project covers practical TypeScript concepts applied to frontend JavaScript projects. It includes exercises on type safety, interfaces, classes, namespaces, declaration merging, ambient modules, advanced types, and nominal typing.

## Tasks Summary

### Task 0: Creating Interfaces and Rendering a Table

- Defined a `Student` interface with `firstName`, `lastName`, `age`, `location`
- Created an array of students and rendered them in a table using vanilla JavaScript.

### Task 1: Teacher Interfaces and Function Signatures

- Defined a `Teacher` interface and extended it with a `Directors` interface.
- Implemented a `printTeacher` function.
- Created a `StudentClass` class with methods `workOnHomework()` and `displayName()`.

### Task 2: Advanced Types and Employee Factory

- Created `DirectorInterface` and `TeacherInterface`.
- Implemented `Director` and `Teacher` classes.
- Built a `createEmployee` function returning either a Director or Teacher based on salary.
- Used a type predicate function `isDirector` and `executeWork` function.
- Applied string literal types `Subjects` (`'Math' | 'History'`) and a `teachClass` function.

### Task 3: Ambient Namespaces and Type Declarations

- Defined `RowID` type and `RowElement` interface.
- Declared type definitions for an external `crud.js` module using an ambient `crud.d.ts`.
- Implemented database operations in `main.ts` using the declared types and external functions.

### Task 4: Namespaces and Declaration Merging

- Used the `Subjects` namespace.
- Created `Teacher` interface and `Subject` base class.
- Extended `Teacher` with experience properties via declaration merging in separate files (`Cpp.ts`, `Java.ts`, `React.ts`).
- Created `Cpp`, `Java`, and `React` subject classes.
- Demonstrated usage in `main.ts` by setting a teacher and calling subject-specific methods.

### Task 5: Brand Convention & Nominal Typing

- Created `MajorCredits` and `MinorCredits` interfaces with a `brand` property for nominal typing.
- Implemented `sumMajorCredits` and `sumMinorCredits` functions that safely operate on their respective types, preventing accidental type mix-ups.

## Project Requirements

- TypeScript `^3.6.4`
- Webpack for module bundling
- Proper use of `tsconfig.json` for TypeScript configurations
- `@typescript-eslint` for linting consistency

## How to Build

To compile any task:

```bash
npx tsc
```
