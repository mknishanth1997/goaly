import image from './icon/plus-icon-1.svg';
import deleteimg from "./icon/delete.svg";
// This part handles the Category input on the side bar for both daily tasks and Assignment

import { headObj } from "./index.js";
import { assignmentInputBox } from "./category-handle-sidebar.js";
import { toDoInputBox } from "./category-handle-sidebar.js";
import { addEventListnertoPlusSymbolTodo } from './todo-modal-showup-logic.js';
import { renderedOrNot } from "./flat.js";
import {createToDoOuterStrcuture} from "./tododisplayrender.js";
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
    const div = document.createElement("div");
    const div1 = document.createElement("div");
    const img = document.createElement("img");
    const img1 = document.createElement("img");
    img.src = image;
    img1.src = deleteimg;


    p.classList.add("assignments");
    img.classList.add("assignmentPlusSymbol");
    img1.classList.add("assignmentDeleteSymbol");
    p.textContent = headObj.assignmentCategory[index];
    div.appendChild(p);
    div1.appendChild(img1);
    div1.appendChild(img);
    div.appendChild(div1);
    assignmentCategory.appendChild(div);
}

// Updating the latest entry of ToDo Category to the Dom 

function upDateToDoCategoryDom()
{
    const category = "todo";
    const index = headObj.toDoCategory.length - 1;
    const toDoCategory = document.querySelector(".to-do-category");
    const p = document.createElement("p");
    const div = document.createElement("div");
    const div1 = document.createElement("div");
    const img = document.createElement("img");
    const img1 = document.createElement("img");
    img.src = image;
    img1.src = deleteimg;

    p.classList.add("toDos");
    img.classList.add("todoPlusSymbol");
    img1.classList.add("todoDeleteSymbol");
    p.textContent = headObj.toDoCategory[index];
    div.appendChild(p);
    div1.appendChild(img1);
    div1.appendChild(img);
    div.appendChild(div1);
    toDoCategory.appendChild(div);
    addEventListnertoPlusSymbolTodo(img, category, index);
    let isRendered = renderedOrNot();
    p.addEventListener("click", () => createToDoOuterStrcuture(p.textContent, isRendered));    
}
