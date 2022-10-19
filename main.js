// READ BUTTON OR ENTER PRESS TO ADD A NEW TASK TO THE LIST
var button = document.querySelector("button"); // listen for the ADD button
button.addEventListener("click", newTask); // activate the new task function
var enter = document.querySelector("input"); // listen for ENTER to be pressed
// activate the new task function
enter.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    newTask();
  }
});

// current number of char in largest task
var longestTask = 0;

// activate the new item
function newTask() {
  newItem();
  // findLongestTask();
}

// add a new item to the list
var uid = 4;
function newItem() {
  var inputText = document.querySelector("input"); // Read input text from input box
  var item = inputText.value; // new tasks name
  item = item.toLowerCase(); // Make all characters in the name lower case
  item = item.charAt(0).toUpperCase() + item.slice(1); // Capitalize the first letter in the new task
  if (item === "") {
    // Check if input is empty
    return;
  }
  var createdList = document.querySelector("ul"); // find unordered list of tasks
  // html to add a new item to the unordered list
  var child = `<li class='draggable' id="${uid}" draggable="true" ondragstart="onDragStart(event);" ondragover="onDragOver(event);"> 
  <a class='moveSymbol'> = </a> <input type='checkbox' name='checkbox'> <label for='checkbox'>${item}</label> <span> X </span> </li>`;
  var newChild = new DOMParser().parseFromString(child, "text/html");
  createdList.appendChild(newChild.body.firstChild); // find last list item, add new list item
  uid += 1;
  inputText.value = ""; // erase text in input text box
}

// REMOVE AN ITEM FROM THE TASK LIST
document.getElementById("listname").addEventListener("click", whatWasClicked); // listen for a click upon one of the X's following a task

// determine the action taken on the click
function whatWasClicked(e) {
  if (e.target.tagName == "SPAN") deleteli(e);
  if (e.target.className == "moveSymbol") onDragStart(e);
}

// removes specified task
function deleteli(e) {
  e.target.parentNode.remove(e);
}

// MOVE AND DRAG FUNCTION
// the current drag item
let draggingEle;

// the current position of mouse in relation to the dragging element
let x = 0;
let y = 0;

const mouseDownHandler = function (e) {
  draggingEle = e.target;

  // calculate the mouse position
  const rect = draggingEle.getBoundingClientRect();
  x = e.pageX - rect.left;
  y = e.pageY - rect.top;

  // add listeners
  document.addEventListener("mousemove", mouseMoveHandler);
  document.addEventListener("mouseup", mouseUpHandler);
};

const mouseMoveHandler = function (e) {
  // set postion for dragging element
  draggingEle.style.postion = "absolute";
  draggingEle.style.left = "${e.pageX - x}px";
  draggingEle.style.top = "${e.pageY - y}px";
};

const mouseUpHandler = function () {
  // remove the position styles
  draggingEle.style.removeProperty("top");
  draggingEle.style.removeProperty("left");
  draggingEle.style.removeProperty("postition");

  x = null;
  y = null;
  draggingEle = null;

  // remove listeners
  document.removeEventListener("mousemove", mouseMoveHandler);
  document.removeEventListener("mouseup", mouseUpHandler);
};

// query out list
const list = document.getElementsById("listname");

// query all items
[].slice.call(list.querySelectorAll(".draggable")).forEach();

// EDIT ALREADY CREATED TASKS

// DRAG AND DROP SUBCLASS

// SAVE FILE
