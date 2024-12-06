const gamesList = [
	{
		title: "Detroit: Become Human",
		year: 2018,
		imageUrl:
			"https://assetsio.reedpopcdn.com/-1546255277221.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
		id: 1,
	},
	{
		title: "Resident Evil Village",
		year: 2021,
		imageUrl:
			"https://cdn.wccftech.com/wp-content/uploads/2021/01/WCCFresidentevilvillage8.jpg",
		id: 2,
	},
	{
		title: "EA SPORTS FC™ 24",
		year: 2023,
		imageUrl:
			"https://www.fifa-infinity.com/wp-content/uploads/2024/01/fc24-vinicius-real-madrid.webp",
		id: 3,
	},
	{
		title: "Street Fighter V",
		year: 2015,
		imageUrl:
			"https://gaming-cdn.com/images/products/671/orig/street-fighter-v-pc-jeu-steam-cover.jpg?v=1662539255",
		id: 4,
	},
	{
		title: "The Last of Us",
		year: 2013,
		imageUrl:
			"https://www.4gamer.net/games/636/G063663/20220830067/SS/032.jpg",
		id: 5,
	},
	{
		title: "Horizon Zero Dawn",
		year: 2017,
		imageUrl:
			"https://wallpapercave.com/wp/wp6601789.jpg",
		id: 6,
	},
]

/*
gamesList.forEach((game) => {
    console.log(game)
})
*/

/*
function writeDom() {
	gamesList.forEach((game) => {
		const articleContainer = document.querySelector(".row")
		articleContainer.innerHTML = "Hello !!"
	})
}
*/

/*
function writeDom() {
	gamesList.forEach((game) => {
		const articleContainer = document.querySelector(".row")
		articleContainer.innerHTML += `<h2>Hello !!</h2>`
	})
}
*/

/*
function writeDom() {
	gamesList.forEach((game) => {
		const articleContainer = document.querySelector(".row")
		articleContainer.innerHTML += `<h2>Hello !! ${ Math.random() } </h2>`
	})
}
*/

function writeDom() {
	gamesList.forEach((game) => {
		const articleContainer = document.querySelector(".row")
		articleContainer.innerHTML += `<article class="col">
                        <div class="card shadow-sm">
                            <svg
                                class="bd-placeholder-img card-img-top"
                                width="100%"
                                height="225"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Placeholder: Thumbnail"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c"></rect>
                                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                                Thumbnail
                                </text>
                            </svg>
                            <div class="card-body">
                            <h3 class="card-title">${game.title}</h3>
                                <p class="card-text">${game.year}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        >View</button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        >Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>  `
	})
}

writeDom()