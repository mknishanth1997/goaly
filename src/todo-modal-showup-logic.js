// Adding Event listners to daily task and Assignment plus symbols: 
import { addEventListenertoTheActionButtons } from "./todo-form-submission-logic.js";
import { headObj } from "./index.js";




// Daily Taks plus and delete button Reference: 

export function addEventListnertoPlusSymbolTodo(img, category, index)
{
    const toDoModals = document.querySelector(".to-do-modals");
    const form = document.querySelector(".daily-taks-form");
    const categoryofToDo = document.querySelector("#category");
    const indexOfToCat = document.querySelector("#index");
    img.addEventListener("click", () => 
    {
        toDoModals.classList.toggle("show");
        form.reset();
        console.log("reset");
        indexOfToCat.value = index;
        console.log(headObj.toDoCategory[index]);
        if(toDoModals.classList.contains("show"))
        {
            addEventListenertoTheActionButtons();
        }
        else 
        {
            console.log("Form Log closing");
        }
        
    });
    
}
    
    
    