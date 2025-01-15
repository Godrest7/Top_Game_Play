


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

function editModal(gameId) {
	// Trouvez le jeu en fonction de son identifiant
	console.log(gameId)
	// fetch car by ID // http://localhost:3000/api/cars/1
	fetch(`http://localhost:3000/api/cars/${gameId}`, {
		method: "GET",
		headers: {
			"x-api-key": "secret_phrase_here",
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	})
		.then((res) => {
			if (!res.ok) {
				throw new Error("Error with the car with this id")
			}
			res.json().then((data) => {
				console.log(data)
				const selectedCar = data

				// Injectez le formulaire dans le corps du modal
				fetch("./form.html").then((data) => {
					console.log(selectedCar)

					data.text().then((form) => {
						// Modifiez le titre et le corps du modal

						modifyModal("Mode Edition", form)
						modifyFom({
							title: selectedCar.carName,
							year: selectedCar.carYear,
							imageUrl: selectedCar.carImage,
						})
						document.querySelector(".form-img").src = selectedCar.carImage
						document
							.querySelector('button[type="submit"]')
							.addEventListener("click", () =>
								updateGames(title.value, year.value, imageUrl.value, gameId)
							)
					})
				})
			})
		})
		.catch((error) =>
			console.error("Erreur lors de la récupération des voitures :", error)
		)
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

function modifyFom(gameData) {
    const form = document.querySelector("form");
	form.title.value = gameData.title
	form.year.value = gameData.year
	form.imageUrl.value = gameData.imageUrl

    // Met à jour l'aperçu de l'image
    const imagePreview = document.querySelector("#imagePreview");
    if (imagePreview) {
        imagePreview.src = gameData.imageUrl;
        imagePreview.style.display = 'block';
    }
}