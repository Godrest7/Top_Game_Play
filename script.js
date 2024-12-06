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

function writeDom() {
	gamesList.forEach((game) => {
		const articleContainer = document.querySelector(".row")
		articleContainer.innerHTML = "Hello !!"
	})
}

writeDom