/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
// Define variables
let costPerDay = 50;  
let numberOfDaysSelected = 1;  
let totalCost = costPerDay * numberOfDaysSelected;  

// Initialize variables when the page is loaded (if applicable)
window.onload = function() {
    updateTotalCost();  
};

// Function to update the total cost based on current selections
function updateTotalCost() {
    totalCost = costPerDay * numberOfDaysSelected;
    document.getElementById('totalCostElement').innerText = `Total Cost: $${totalCost}`;
}

// Example: Event listener for a button click to increase the number of days
document.getElementById('increaseDaysButton').addEventListener('click', function() {
    numberOfDaysSelected++;
    updateTotalCost();  
});

// Example: Event listener for a button click to reset the selections
document.getElementById('resetButton').addEventListener('click', function() {
    numberOfDaysSelected = 1; 
    updateTotalCost(); 
});




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
// Initialize variables
let dayCounter = 0;   

// Function to handle day button clicks
function handleDayClick(day) {
    const dayButton = document.getElementById(day);

    if (!dayButton.classList.contains('clicked')) {
        // Add the "clicked" class
        dayButton.classList.add('clicked');
        dayCounter++;  

        updateTotalCost();
    } else {
        dayButton.classList.remove('clicked');
        dayCounter--; 

        updateTotalCost();
    }
}

// Function to update the total cost based on the number of days selected
function updateTotalCost() {
    document.getElementById('totalCostElement').innerText = `Total Cost: $${totalCost}`;
}

// Add event listeners to day buttons
document.getElementById('monday').addEventListener('click', function () {
    handleDayClick('monday');
});

document.getElementById('tuesday').addEventListener('click', function () {
    handleDayClick('tuesday');
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
// Function to handle clearing of days
function clearDays() {
    const dayButtons = document.querySelectorAll('.day-button');
    dayButtons.forEach(button => {
        button.classList.remove('clicked');
    });

    dayCounter = 0;

    updateTotalCost();
}

document.getElementById('clearButton').addEventListener('click', clearDays);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
// Initialize variables

// Function to handle changing the rate to half-day
function setHalfDayRate() {
    costPerDay = 20;

    document.getElementById('half').classList.add('clicked');

    document.getElementById('full').classList.remove('clicked');

    updateTotalCost();
}

// Add event listener to the half-day button
document.getElementById('half').addEventListener('click', setHalfDayRate);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
// Function to handle changing the rate to full-day
function setFullDayRate() {

    costPerDay = 35;

    document.getElementById('full').classList.add('clicked');

    document.getElementById('half').classList.remove('clicked');

    updateTotalCost();
}

// Add event listener to the full-day button
document.getElementById('full').addEventListener('click', setFullDayRate);


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
// Function to perform the calculation and update the calculated-cost element
function updateTotalCost() {
    let totalCost = costPerDay * dayCounter;
    document.getElementById('calculated-cost').innerHTML = `Total Cost: $${totalCost}`;
}

updateTotalCost();
