// instantiate variables
let count = 0;
let allEntries = [];

// DOM - crab elements by their ID attribute
const peopleCount = document.getElementById("count");
const incrementButton = document.getElementById("increment-btn");
const saveButton = document.getElementById("save-btn");
const clearButton = document.getElementById("clear-btn");
const prevEntries = document.getElementById("prevEntries");
const sumEntries = document.getElementById("sumEntries");
const resetAllButton = document.getElementById("reset-all-btn");

// when the user clicks the "Increment" button, output count
incrementButton.addEventListener("click", () => {
  count += 1;
  peopleCount.innerText = count;
});

// when the user clicks the "Save" button,
// display a message how many passengers have been counted
saveButton.addEventListener("click", () => {
  if (count === 1) {
    peopleCount.innerHTML = `
    <div id="resultAfterSaving">
        Saved: 1 passenger
    </div>`;
  } else {
    peopleCount.innerHTML = `
    <div id="resultAfterSaving">
        Saved: ${count} passengers
    </div>`;
  }
});

// if the passenger count is more than zero and
// the user clicks the "Submit & Clear" button,
// add the count to the entries array and output it,
// reset the count to zero and output the total count
clearButton.addEventListener("click", () => {
  if (count !== 0) {
    allEntries.push(count);
    prevEntries.innerHTML += `${count} - `;
    count = 0;
    peopleCount.innerText = 0;
    sumAllEntries(allEntries);
  } 
});

// reset absolutely everything
resetAllButton.addEventListener("click", () => {
  count = 0;
  allEntries = [];
  peopleCount.innerText = 0;
  prevEntries.innerText = "Previous entries: ";
  sumEntries.innerText = "Total no of passengers: 0";
})

// sum up all the numbers (the total count of passengers) in the array
function sumAllEntries(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    sumEntries.innerHTML = `Total no of passengers: ${sum}`;
  }
};
