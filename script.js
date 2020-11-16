let emailCollectorData = document.getElementById("Email-Collector")

console.log(emailCollectorData)
emailCollectorData.addEventListener("submit", event => {
	event.preventDefault()

	let formData = new FormData(event.target)
	let userFirstName = formData.get('fullName')
	let userEmailAddress = formData.get('email')
	console.log(userFirstName, userEmailAddress)

	let updateHtml = `
		<h2>${userFirstName}, congratulations!</h2>
		<p>You are on your way to be a BBW master!</p>
		<p class="fine-print">We'll never share your information without your permission</p>
	`

	let updateHtmlContainer = document.getElementById("Main-Content")
	updateHtmlContainer.innerHTML = updateHtml
})
