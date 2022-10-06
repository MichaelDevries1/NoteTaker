// READ BUTTON OR ENTER PRESS TO ADD A NEW TASK TO THE LIST 
var button = document.querySelector("button");          // listen for the ADD button
button.addEventListener('click', newTask);              // activate the new task function
var enter = document.querySelector("input");            // listen for ENTER to be pressed
// activate the new task function
enter.addEventListener('keyup', (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    newTask();
  }
});

// current number of char in largest task
var longestTask = 0    

// activate the new item
function newTask() {
  newItem();
  // findLongestTask();
}


// add a new item to the list
function newItem() {
  var inputText = document.querySelector("input");      // Read input text from input box
  var item = inputText.value                            // new tasks name
  item = item.toLowerCase();                            // Make all characters in the name lower case
  item = item.charAt(0).toUpperCase() + item.slice(1);  // Capitalize the first letter in the new task
  if (item === ""){                                     // Check if input is empty
    return;
  }
  var createdList = document.querySelector("ul");       // find unordered list of tasks
  var child = `<li><a class='moveSymbol'> = </a><input type='checkbox' name='checkbox'><label for='checkbox'>${item}</label><span> X </span></li>` // html to add a new item to the unordered list
  var newChild = new DOMParser().parseFromString(child, "text/html")
  createdList.appendChild(newChild.body.firstChild);    // find last list item, add new list item
  inputText.value = "";                                 // erase text in input text box
}


// REMOVE AN ITEM FROM THE TASK LIST
document.getElementById('listname').addEventListener('click', deleteli);  // listen for a click upon one of the X's following a task

// removes specified task
function deleteli(e) {
  if (e.target.tagName == "SPAN") e.target.parentNode.remove(e);
}

// MOVE AND DRAG FUNCTION
function onDragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id)
}




// EDIT ALREADY CREATED TASKS

// DRAG AND DROP SUBCLASS

// SAVE FILE

