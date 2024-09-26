import "./main-body-style.css";
import "./side-bar-whole-structure.css";
import "./side-bar-theme-gallery.css";
import "./side-bar-task-todo-category-showup-.css";
import "./to-do-input-modal.css";

import "./image-gallery-show-up.js";
import "./category-handle-sidebar.js";
import "./category-input-handling-logic.js";

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







  reminderpicerfortodo
export const headObj = 
{
    nameofObj : "head object",
    toDoCategory: [],
    assignmentCategory: [],

}
