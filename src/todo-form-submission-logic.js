import { headObj } from './index.js';
import Flatpickr from 'flatpickr';
// const datePicker = Flatpickr('#datepicker');
import 'flatpickr/dist/flatpickr.min.css';
const datePicker = Flatpickr('#datepicker', {
    dateFormat: "d-m-y", 
    altFormat: "j F, Y", 
    enableTime: true,
    disable: [
        function(dateObj) {
          // Disable dates in the past
          return dateObj < new Date();
        }
      ]
  });


  const datePicker1 = Flatpickr('#reminderpicerfortodo', {
    dateFormat: "d-m-y H:i", 
    altFormat: "j F, Y", 
    enableTime: true,
    disable: [
        function(dateObj) {
          // Disable dates in the past
          return dateObj < new Date();
        }
      ]
  });



// To Do Form Submission Logic: 

 function submitTodoFormData()
{
    console.log("form started");
    const form = document.querySelector(".daily-taks-form");
    const cat = document.querySelector("#category").value;
    const index = document.querySelector("#index").value;
    const submit = document.querySelector(".submitbtnfortodoform");
    const todoinputTaskName = document.querySelector("#todoinput").value;
    const dueDatepicker = document.querySelector("#datepicker").value;
    const recurence = document.querySelector("#tddon").value;
    const priority = document.querySelector("#tdp").value;
    const reminder = document.querySelector("#reminderpicerfortodo").value;
    console.log(reminder);
    let dueDatepicker1,reminder1;
    if(dueDatepicker === "")
    {
        dueDatepicker1 = "empty";
    }
    else
    {
        dueDatepicker1 = dueDatepicker;
    }
    
    if(reminder === "")
    {
        reminder1 = "empty";
    }
    else
    {
        reminder1 = reminder;
    }

    let createdObj;

    if(todoinputTaskName !== "")
    {
        createdObj =  createToDoDescriptiveObject(cat,headObj.toDoCategory[index],
            todoinputTaskName,
            dueDatepicker1,
            recurence,
            priority,
            reminder1
        );

        headObj.toDoCategoryFullDeails.push(createdObj);
        console.log(headObj.toDoCategoryFullDeails);
        form.reset();
        const toDoModals = document.querySelector(".to-do-modals");
        toDoModals.classList.toggle("show");
    }

    console.log(createdObj);
}



export function addEventListenertoTheActionButtons()
{
    const submit = document.querySelector(".submitbtnfortodoform");
    const cancel = document.querySelector(".cancelbtnfortodoform");
    
    const form = document.querySelector(".daily-taks-form");

     
    submit.addEventListener("click", submitTodoFormData);
    cancel.addEventListener("click", () => 
    {
        form.reset();
        
    });
    recurenceChanger();
}

function recurenceChanger()
{
    const recurence = document.querySelector("#tddon");
    const dueDatepicker = document.querySelector("#datepicker");
    recurence.addEventListener("click", () => 
    {
        if(recurence.value === "daily")
        {
            dueDatepicker.disabled = true;
        }
        else 
        {
            dueDatepicker.disabled = false;
        }
    });
}

function createToDoDescriptiveObject(category, categoryName,taskName, dueDate, recurence, priority, reminder)
{
    return {
        category,
        categoryName,
        taskName,
        dueDate,
        recurence,
        priority,
        reminder,
        completedStatus: "not-completed",
        
    }
}