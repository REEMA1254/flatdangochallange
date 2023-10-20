// JSON object for movie details.
const sampleMovieData = {
    id: "1",
    title: "Movie Title",
    runtime: "120",
    showtime: "04:00 PM",
    capacity: 100,
    tickets_sold: 75,
    poster: "https://en.wikipedia.org/wiki/The_Giant_Gila_Monster"
};

// Function to display movie details.
function displayMovieDetails(movie) {
    document.getElementById("poster").src = movie.poster;
    document.getElementById("title").textContent = movie.title;
    document.getElementById("runtime").textContent = `Runtime: ${movie.runtime} min`;
    document.getElementById("showtime").textContent = `Showtime: ${movie.showtime}`;
    const availableTickets = movie.capacity - movie.tickets_sold;
    document.getElementById("available-tickets").textContent = `Available Tickets: ${availableTickets}`;
}

// Function to handle "Buy Ticket" button click.
function buyTicket() {
    // Implement the logic to buy a ticket and update available tickets.
    // For now, let's assume you subtract 1 from available tickets.
    const availableTicketsElement = document.getElementById("available-tickets");
    let availableTickets = parseInt(availableTicketsElement.textContent.split(" ")[2]);
    if (availableTickets > 0) {
        availableTickets--;
        availableTicketsElement.textContent = `Available Tickets: ${availableTickets}`;
    } else {
        alert("No more tickets available for this movie.");
    }
}

// Function to handle movie item click.
function handleMovieItemClick(event) {
    // Get the movie ID from the clicked item's data attribute.
    const movieId = event.target.getAttribute("data-movie-id");

    // Fetch movie details from the server based on the movie ID.
    // For now, use the sampleMovieData as a placeholder.
    const selectedMovie = sampleMovieData;

    // Display the selected movie's details.
    displayMovieDetails(selectedMovie);
}

// Attach event listeners.
document.getElementById("buy-ticket").addEventListener("click", buyTicket);

const filmItems = document.querySelectorAll(".film-item");
filmItems.forEach(item => {
    item.addEventListener("click", handleMovieItemClick);
});

// Initial display of the first movie's details.
displayMovieDetails(sampleMovieData);