// this file handles the hiding and unhiding of the user input category bar

// Assignment section handling

const assignmentPlusSymbol = document.querySelector(".ct-1");
export const assignmentInputBox = document.querySelector(".inputBox1");

assignmentPlusSymbol.addEventListener("click", () => 
{
    assignmentInputBox.classList.toggle("un-hide1");
});


// To do Section input handling 

const toDoPlusSymbol = document.querySelector(".ct-2");
export const toDoInputBox = document.querySelector(".inputBox");

toDoPlusSymbol.addEventListener("click", () => 
{
    toDoInputBox.classList.toggle("un-hide");
});

