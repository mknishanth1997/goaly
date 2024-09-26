// This part handles the Category input on the side bar for both daily tasks and Assignment

import { headObj } from "./index.js";
import { assignmentInputBox } from "./category-handle-sidebar.js";
import { toDoInputBox } from "./category-handle-sidebar.js";
// Assignment: 
const assignmentPlusSymbolForInput = document.querySelector(".tasks-add-section");
const assignmentInput = document.querySelector("#userInput1");


assignmentPlusSymbolForInput.addEventListener("click", addTheAssignmentCategory);

function addTheAssignmentCategory()
{
    if(assignmentInput.value === "")
    {
        console.error("Empty Input");
    }
    else
    {
        const assignmentInputValue = assignmentInput.value;
        assignmentInput.value = "";
        headObj.assignmentCategory.push(assignmentInputValue);
        assignmentInputBox.classList.toggle("un-hide1");
        upDateTheAssignmentCategoryDom();
    }
}

// To Do: 

const toDoPlusSymbolForInput = document.querySelector(".to-do-add-section");
const toDoInput = document.querySelector("#userInput");
toDoPlusSymbolForInput.addEventListener("click", addTheToDoCategory);

function addTheToDoCategory()
{
    if(toDoInput.value === "")
    {
        console.error("Empty Input");
    }
    else 
    {
        const toDoInputValue = toDoInput.value;
        toDoInput.value = "";
        headObj.toDoCategory.push(toDoInputValue);
        toDoInputBox.classList.toggle("un-hide");
        upDateToDoCategoryDom();
    }
}



















// Updating the latest entry of Assignmetn category to the Dom

function upDateTheAssignmentCategoryDom()
{
    const index = headObj.assignmentCategory.length - 1;
    const assignmentCategory = document.querySelector(".assignment-category");
    const p = document.createElement("p");
    p.classList.add("assignments");
    p.textContent = headObj.assignmentCategory[index];
    assignmentCategory.appendChild(p);
}

// Updating the latest entry of ToDo Category to the Dom 

function upDateToDoCategoryDom()
{
    const index = headObj.toDoCategory.length - 1;
    const toDoCategory = document.querySelector(".to-do-category");
    const p = document.createElement("p");
    p.classList.add("toDos");
    p.textContent = headObj.toDoCategory[index];
    toDoCategory.appendChild(p);
}

