


// Global variable to store the list of cars
let carsList;
fetch("http://localhost:3000/api/cars", {
	method: "GET",
	headers: {
		"x-api-key": "secret_phrase_here",
		"Content-Type": "application/json",
		Accept: "application/json",
	},
})
	.then((res) => {
		if (!res.ok) {
			console.error(`Error: ${res.status} ${res.statusText}`);
			throw new Error("API call failed!");
		}
		return res.json();
	})
	.then((data) => {
		console.log("Data received:", data); // Debug
		carsList = data;
		writeDom(); // Populate the DOM after fetching data
		setupEventListeners(); // Setup listeners for buttons
	})
	.catch((error) => console.error("Error fetching cars data:", error));

// Function to populate the DOM
function writeDom() {
	const articleContainer = document.querySelector(".row");
	articleContainer.innerHTML = ""; // Clear existing content

	carsList.forEach((car) => {
		articleContainer.innerHTML += `
			<article class="col">
				<div class="card shadow-sm">
					<img src="${car.carImage}" alt="${car.carName}" class="card-img-top" />
					<div class="card-body">
						<h3 class="card-title">${car.carName}</h3>
						<p class="card-text">${car.carYear}</p>
						<div class="d-flex justify-content-between align-items-center">
							<div class="btn-group">
								<button type="button" class="btn btn-sm btn-outline-secondary view" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${car.id}">View</button>
								<button type="button" class="btn btn-sm btn-outline-secondary edit" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${car.id}">Edit</button>
							</div>
						</div>
					</div>
				</div>
			</article>`;
	});
}

// Function to set up event listeners for buttons
function setupEventListeners() {
	const editButtons = document.querySelectorAll(".edit");
	editButtons.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const carId = e.target.getAttribute("data-id");
			editModal(carId);
		});
	});

	const viewButtons = document.querySelectorAll(".view");
	viewButtons.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const carId = e.target.getAttribute("data-id");
			viewModal(carId);
		});
	});
}

// Function to modify modal title and body
function modifyModal(modalTitle, modalBody) {
	document.querySelector(".modal-title").textContent = modalTitle;
	document.querySelector(".modal-body").innerHTML = modalBody;
	document.querySelector(".modal-footer").innerHTML = `
		<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
		<button type="submit" class="btn btn-primary">Submit</button>`;
}

// Function to open edit modal
function editModal(carId) {
	const car = carsList.find((car) => car.id === parseInt(carId));
	if (!car) return;

	fetch("./form.html")
		.then((response) => response.text())
		.then((form) => {
			modifyModal("Edit Car", form);
			populateForm(car);

			document.querySelector('button[type="submit"]').addEventListener("click", () => {
				updateCar(
					document.querySelector("form").title.value,
					document.querySelector("form").year.value,
					document.querySelector("form").imageUrl.value,
					carId
				);
			});
		})
		.catch((error) => console.error("Error loading form:", error));
}

// Function to populate the form with car data
function populateForm(carData) {
	const form = document.querySelector("form");
	form.title.value = carData.title;
	form.year.value = carData.year;
	form.imageUrl.value = carData.imageUrl;

	const imagePreview = document.querySelector("#imagePreview");
	if (imagePreview) {
		imagePreview.src = carData.imageUrl;
		imagePreview.style.display = "block";
	}
}

// Function to update car data
function updateCar(title, year, imageUrl, carId) {
	const carIndex = carsList.findIndex((car) => car.id === parseInt(carId));
	if (carIndex === -1) return;

	carsList[carIndex] = { ...carsList[carIndex], title, year, imageUrl };
	writeDom(); // Re-render the updated DOM
	setupEventListeners(); // Re-attach event listeners
}

// Function to open view modal
function viewModal(carId) {
	const car = carsList.find((car) => car.id === parseInt(carId));
	if (!car) return;

	const modalBody = `<img src="${car.imageUrl}" alt="${car.title}" class="img-fluid" />`;
	modifyModal(car.title, modalBody);
}
