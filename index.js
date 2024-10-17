// Define the API URLs for different movie categories
const apiUrls = {
 animation: "https://api.sampleapis.com/movies/animation",
 classic: "https://api.sampleapis.com/movies/classic",
 comedy: "https://api.sampleapis.com/movies/comedy",
 drama: "https://api.sampleapis.com/movies/drama",
 horror: "https://api.sampleapis.com/movies/horror",
 family: "https://api.sampleapis.com/movies/family",
 mystery: "https://api.sampleapis.com/movies/mystery",
 western: "https://api.sampleapis.com/movies/western",
}

// Elements
const searchInput = document.getElementById("search-bar")
const movieContainer = document.getElementById("movie-container")
const searchBtn = document.getElementById("search-btn")
const filterButtons = document.querySelectorAll(".filter-btn")

// Initially set the default category
let currentCategory = "animation"

// Fetch and display movies based on category
async function fetchMovies(category) {
 try {
  const response = await fetch(apiUrls[category])
  const movies = await response.json()
  displayMovies(movies,category)
  currentCategory = category // Update current category
 } catch (error) {
  console.error("Error fetching movies:", error)
 }
}

// Display movie cards dynamically
function displayMovies(movies, category) {
 movieContainer.innerHTML = "" // Clear previous movies

 movies.forEach((movie) => {
  if (category === "animation") {
   if (movie.id === 7) {
    movie.posterURL = "download.jpeg"
   } else if (movie.id === 10) {
    movie.posterURL = "images.jpeg"
   } else if (movie.id === 9) {
    movie.posterURL = "download2.jpeg"
   } else if (movie.id === 26) {
    movie.posterURL = "download3.jpeg"
   } else if (movie.id === 41) {
    movie.posterURL = "download4.jpeg"
   }
  } else if (category === "classic") {
   if (movie.id === 4) {
    movie.posterURL = "download5.jpeg"
   } else if (movie.id === 16) {
    movie.posterURL = "download6.jpeg"
   } else if (movie.id === 30) {
    movie.posterURL = "download7.jpeg"
   } else if (movie.id === 31) {
    movie.posterURL = "download8.jpeg"
   } else if (movie.id === 26) {
    movie.posterURL = "download26.jpeg"
   } else if (movie.id === 36) {
    movie.posterURL = "download36.jpeg"
   } else if (movie.id === 42) {
    movie.posterURL = "download42.jpeg"
   } else if (movie.id === 56) {
    movie.posterURL = "download56.jpeg"
   } else if (movie.id === 60) {
    movie.posterURL = "download60.jpeg"
   } else if (movie.id === 74) {
    movie.posterURL = "download74.jpeg"
   }
  } else if (category === "comedy") {
   if (movie.id === 3) {
    movie.posterURL = "download5.jpeg"
   } else if (movie.id === 14) {
    movie.posterURL = "download.jpeg"
   } else if (movie.id === 16) {
    movie.posterURL = "download2.jpeg"
   } else if (movie.id === 20) {
    movie.posterURL = "download20.jpeg"
   } else if (movie.id === 52) {
    movie.posterURL = "download3.jpeg"
   } else if (movie.id === 75) {
    movie.posterURL = "download75.jpeg"
   }
  } else if (category === "drama") {
   if (movie.id === 28) {
    movie.posterURL = "download28.jpeg"
   } else if (movie.id === 73) {
    movie.posterURL = "download73.jpeg"
   } else if (movie.id === 77) {
    movie.posterURL = "download77.jpeg"
   } else if (movie.id === 33) {
    movie.posterURL = "download33.jpeg"
   } else if (movie.id === 34) {
    movie.posterURL = "download34.jpeg"
   } else if (movie.id === 49) {
    movie.posterURL = "download26.jpeg"
   } else if (movie.id === 53) {
    movie.posterURL = "download7.jpeg"
   } else if (movie.id === 57) {
    movie.posterURL = "download20.jpeg"
   } else if (movie.id === 61) {
    movie.posterURL = "download61.jpeg"
   } else if (movie.id === 62) {
    movie.posterURL = "download36.jpeg"
   } else if (movie.id === 64) {
    movie.posterURL = "download64.jpeg"
   }
  } else if (category === "horror") {
   if (movie.id === 5) {
    movie.posterURL = "download6.jpeg"
   } else if (movie.id === 8) {
    movie.posterURL = "download8.jpeg"
   } else if (movie.id === 14) {
    movie.posterURL = "download60.jpeg"
   } else if (movie.id === 17) {
    movie.posterURL = "download17.jpeg"
   } else if (movie.id === 18) {
    movie.posterURL = "download18.jpeg"
   } else if (movie.id === 65) {
    movie.posterURL = "download65.jpeg"
   } else if (movie.id === 68) {
    movie.posterURL = "download68.jpeg"
   } else if (movie.id === 69) {
    movie.posterURL = "download69.jpeg"
   }
  } else if (category === "family") {
   if (movie.id === 5) {
    movie.posterURL = "download51.jpeg"
   } else if (movie.id === 8) {
    movie.posterURL = "download.jpeg"
   } else if (movie.id === 10) {
    movie.posterURL = "download2.jpeg"
   } else if (movie.id === 17) {
    movie.posterURL = "download117.jpeg"
   } else if (movie.id === 18) {
    movie.posterURL = "download118.jpeg"
   } else if (movie.id === 26) {
    movie.posterURL = "download3.jpeg"
   } else if (movie.id === 44) {
    movie.posterURL = "download4.jpeg"
   } else if (movie.id === 62) {
    movie.posterURL = "download119.jpeg"
   } else if (movie.id === 80) {
    movie.posterURL = "download120.jpeg"
   }
  } else if (category === "mystery") {
   if (movie.id === 11) {
    movie.posterURL = "download6.jpeg"
   } else if (movie.id === 14) {
    movie.posterURL = "download33.jpeg"
   } else if (movie.id === 15) {
    movie.posterURL = "download34.jpeg"
   } else if (movie.id === 24) {
    movie.posterURL = "download26.jpeg"
   } else if (movie.id === 25) {
    movie.posterURL = "download7.jpeg"
   } else if (movie.id === 26) {
    movie.posterURL = "download8.jpeg"
   } else if (movie.id === 36) {
    movie.posterURL = "download363.jpeg"
   } else if (movie.id === 43) {
    movie.posterURL = "download364.jpeg"
   } else if (movie.id === 49) {
    movie.posterURL = "download365.jpeg"
   } else if (movie.id === 63) {
    movie.posterURL = "download366.jpeg"
   } else if (movie.id === 69) {
    movie.posterURL = "download66.jpeg"
   } else if (movie.id === 74) {
    movie.posterURL = "download55.jpeg"
   }
  } else if (category === "western") {
   if (movie.id === 6) {
    movie.posterURL = "download111.jpeg"
   } else if (movie.id === 12) {
    movie.posterURL = "download112.jpeg"
   } else if (movie.id === 26) {
    movie.posterURL = "download113.jpeg"
   } else if (movie.id === 35) {
    movie.posterURL = "download114.jpeg"
   } else if (movie.id === 41) {
    movie.posterURL = "download115.jpeg"
   } else if (movie.id === 51) {
    movie.posterURL = "download1111.jpeg"
   }
  }
  const moviePoster = movie.posterURL
  const movieCard = `
            <div class="col-md-4 col-lg-3 my-3">
                <div class="card movie-card">
                    <img src="${moviePoster}" class="card-img-top" alt="${movie.title}">
                    <div class="card-body">
                        <h3 class="card-title">${movie.title}</h3>
                        <a href="https://www.imdb.com/title/${movie.imdbId}" class="btn btn-primary" target="_blank">More Info</a>
                    </div>
                </div>
            </div>
        `
  movieContainer.innerHTML += movieCard
 })
}

// Filter movies by category when filter button is clicked
filterButtons.forEach((button) => {
 button.addEventListener("click", (e) => {
  filterButtons.forEach((btn) => btn.classList.remove("active"))
  e.target.classList.add("active")

  const category = e.target.getAttribute("data-category")
  fetchMovies(category) 
 })
})

// Search for movies by title
searchBtn.addEventListener("click", () => {
 const query = searchInput.value.toLowerCase()

 fetch(apiUrls[currentCategory]) // Fetch movies from the current category
  .then((response) => response.json())
  .then((data) => {
   const filteredMovies = data.filter((movie) => movie.title.toLowerCase().includes(query))
   displayMovies(filteredMovies)
  })
  .catch((error) => console.error("Error filtering movies:", error))
})

// Initial fetch for a default category (e.g., animation)
fetchMovies("animation")
