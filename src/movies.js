// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}
const directors = getAllDirectors(moviesArray);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (movies.length === 0) return 0;

  const howManyMovies = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return howManyMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const averageScore = moviesArray.reduce((acc, movie) => {
    if (movie.score) {
      return acc + movie.score;
    } else {
      return acc;
    }
  }, 0);

  return Number((averageScore / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesByYear = moviesArray.slice().sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  return moviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesAlphabetically = moviesArray
    .map((movie) => movie.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);
  return moviesAlphabetically;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const moviesDuration = moviesArray.map((movie) => {
    const duration = movie.duration.split(" ");
    let totalDuration = 0;
    for (let time of duration) {
      if (time.includes("h")) {
        totalDuration += parseInt(time) * 60;
      } else {
        totalDuration += parseInt(time);
      }
    }
    return { ...movie, duration: totalDuration };
  });
  return moviesDuration;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) return null;
    
    const moviesByYear = moviesArray.reduce((acc, movie) => {
        if (!acc[movie.year]) {
        acc[movie.year] = [movie];
        } else {
        acc[movie.year].push(movie);
        }
        return acc;
    }, {});
    
    let bestYear = 0;
    let bestAverage = 0;
    
    for (let year in moviesByYear) {
        const average = scoresAverage(moviesByYear[year]);
        if (average > bestAverage) {
        bestAverage = average;
        bestYear = year;
        }
    }
    
    return `The best year was ${bestYear} with an average score of ${bestAverage}`;
}
