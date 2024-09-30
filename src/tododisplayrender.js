// Rendering the to do or daily taszks

import { headObj } from ".";
import tickimgpath from "./icon/checkpurple.svg";
import editimgpath from "./icon/editpurple.svg";
import deleteimgpath from "./icon/deletered.svg";
import headiconimgpath from "./icon/list-of-tasks.svg";


export function createToDoOuterStrcuture(category,isRendered)
{

  if(isRendered() === 0)
  {
    const bossDiv = createElement("div", "display-content" );
    const childDiv1 = createElement("div");
    const childDiv2 = createElement("div", "contents-to-do");

    const childDiv1Img = createElement("img");
    childDiv1Img.src = headiconimgpath;
    const childDiv1H1 = createElement("h1");
    childDiv1H1.textContent = category;

    const table = createElement("table", "to-do-table");
    const thead = createElement("thead");
    const tRowHead = createElement("tr");

    const tCell1 = createElement("th");
    const tCell2 = createElement("th");
    const tCell3 = createElement("th");
    const tCell4 = createElement("th");
    const tCell5 = createElement("th");

    const tbody = createElement("tbody", "task-body");

    tCell1.textContent = "Task Name";
    tCell2.textContent = "Due Date";
    tCell3.textContent = "Reminder";
    tCell4.textContent = "Priority";
    tCell5.textContent = "Actions";

    // div 1 insertions
    childDiv1.appendChild(childDiv1Img);
    childDiv1.appendChild(childDiv1H1);

    // Cells insertion into tr
    tRowHead.appendChild(tCell1);
    tRowHead.appendChild(tCell2);
    tRowHead.appendChild(tCell3);
    tRowHead.appendChild(tCell4);
    tRowHead.appendChild(tCell5);

    // Tr insertin into thead 

    thead.appendChild(tRowHead);

    // Insetion into table

    table.appendChild(thead);
    table.appendChild(tbody);


    // table into child 2 div

    childDiv2.appendChild(table);
    
    // child 1 div insertion

    childDiv1.appendChild(childDiv1Img);
    childDiv1.appendChild(childDiv1H1);

    bossDiv.appendChild(childDiv1);
    bossDiv.appendChild(childDiv2);

    const a = document.querySelector(".to-do-display");

    a.appendChild(bossDiv);

    renderTheContents(tbody, category);
  }
  else 
  {
    const tbody = document.querySelector(".task-body");
    renderTheContents(tbody, category);
    console.error("Already Rendered");
  }
  }



  function renderTheContents(tbody,category)
  {
    tbody.innerHTML = "";

    headObj.toDoCategoryFullDeails.forEach(obj => {
      const tr = createElement("tr");
      const td1 = createElement("td");
      const td2 = createElement("td");
      const td3 = createElement("td");
      const td4 = createElement("td");
      const td5 = createElement("td", "action-icons");
      const tickimg = createElement("img");
      const editImg = createElement("img");
      const deleteImg = createElement("img");
  
      tickimg.src = tickimgpath;
      editImg.src = editimgpath;
      deleteImg.src = deleteimgpath;
      console.log("how many times");
      if(obj.categoryName === category)
      {
        console.log("hi");
        td1.textContent = obj.taskName;
        td2.textContent = obj.dueDate;
        td3.textContent = obj.reminder;
        td4.textContent = obj.priority;
        tickimg.addEventListener("click", () => tickimgAdd(tickimg, obj, tr));
        td5.appendChild(tickimg);
        td5.appendChild(editImg);
        td5.appendChild(deleteImg);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tbody.appendChild(tr);
        
        if(obj.completedStatus === "completed")
        {          
          tr.classList.add("completed");
        }
        else if(obj.completedStatus === "not-completed")
        {
          if(tr.classList === "completed")
          {
            tr.classList.remove("completed");
          }
        }
      }
    });
    console.log(headObj.toDoCategoryFullDeails);

  }


//  Action Button Triggers



function tickimgAdd(tickimg, obj, tr)
{
  if(obj.completedStatus === "completed")
  {
    tr.classList.remove("completed");
    obj.completedStatus = "not-completed";
  }
  else if(obj.completedStatus === "not-completed")
  {
    tr.classList.add("completed")
    obj.completedStatus = "completed";
  }
}


  
  function calculateDeadline(dueDateStr) {
    // Parse the selected date (assuming it's in the format "dd-mm-yy")
    const [day, month, year] = dueDateStr.split("-").map(Number);
    const dueDate = new Date(year + 2000, month - 1, day); // Adjust year format

    // Get the current date
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = dueDate - currentDate;

    // Convert time difference to days, hours, and minutes
    const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutesLeft = Math.floor((timeDifference / (1000 * 60)) % 60);

    // Display the result in the deadline paragraph
    const deadlineDisplay = document.getElementById("deadline");
    if (timeDifference > 0) {
      deadlineDisplay.textContent = `Time left until deadline: ${daysLeft} days, ${hoursLeft} hours, and ${minutesLeft} minutes`;
    } else {
      deadlineDisplay.textContent = "The deadline has passed!";
    }
  }











function createElement(tagName, className = "") {
    const element = document.createElement(tagName);
    if (className) {
      element.className = className;
    }
    return element;
  }



