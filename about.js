console.log("hello world");

let ducky = document.querySelector("#ducky")

const duckyMessage = () => {
	alert('You did a mouseover')
}

ducky.addEventListener('mouseover', duckyMessage)


function handleSubmit(evt) {
	evt.preventDefault();
	
	window.alert('form has been submitted successfully');
	
	
}

function createNewEvent(event) {

}



let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);