// Write your code here!
// Remove the <main> element from the DOM
const main = document.getElementById('main');
main.remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id of the new element
newHeader.id = 'victory';

// Set the text inside the new <h1> element
newHeader.textContent = 'Eric is the champion';

// Append the new element to the body of the document
document.body.append(newHeader);
