/// <reference path="./crud.d.ts" />

import {RowID, RowElement} from "./interface";
import * as CRUD from "./crud.js";

// Create object row of type RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert row and store returned ID
const newRowID: RowID = CRUD.insertRow(row);

// Create updatedRow object with age added
const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};

// Update row using ID and updatedRow object
CRUD.updateRow(newRowID, updatedRow);

// Delete the row by ID
CRUD.deleteRow(newRowID);
