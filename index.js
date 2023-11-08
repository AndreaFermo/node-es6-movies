const movieAndSeries = [
    {
        title: "Forrest Gump",
        year: 1994,
        genre: "drammatico",
        rating: 8.8,
        type: "movie",
    },
    {
        title: "Pulp Fiction",
        year: 1994,
        genre: "crimine",
        rating: 8.9,
        type: "movie",
    },
    {
        title: "Il Signore degli Anelli: Il Ritorno del Re",
        year: 2003,
        genre: "avventura",
        rating: 8.9,
        type: "movie",
    },
    {
        title: "Inception",
        year: 2010,
        genre: "azione",
        rating: 8.8,
        type: "movie",
    },
    {
        title: "La La Land",
        year: 2016,
        genre: "musical",
        rating: 8.0,
        type: "movie",
    },
    {
        title: "Breaking Bad",
        year: 2008,
        genre: "crimine",
        rating: 9.5,
        type: "tv",
        seasons: 5,
    },
    {
        title: "Game of Thrones",
        year: 2011,
        genre: "fantasy",
        rating: 9.3,
        type: "tv",
        seasons: 8,
    },
    {
        title: "Stranger Things",
        year: 2016,
        genre: "fantascienza",
        rating: 8.7,
        type: "tv",
        seasons: 4,
    },
    {
        title: "The Crown",
        year: 2016,
        genre: "biografico",
        rating: 8.6,
        type: "tv",
        seasons: 5,
    },
    {
        title: "Black Mirror",
        year: 2011,
        genre: "fantascienza",
        rating: 8.8,
        type: "tv",
        seasons: 6,
    },
];


class Movie {
    #title;
    #year;
    #genre;
    #rating;
    #type;

    constructor(title, year, genre, rating, type) {
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;
    }

    get title() {
        return this.#title
    }
    get year() {
        return this.#year
    }
    get genre() {
        return this.#genre
    }
    get rating() {
        return this.#rating
    }
    get type() {
        return this.#type
    }

    set title(value) {
        this.#title = value;
    }
    set year(value) {
        this.#year = value;
    }
    set genre(value) {
        this.#genre = value;
    }
    set rating(value) {
        this.#rating = value;
    }
    set type(value) {
        this.#type = value;
    }

    toString() {
        return `${this.title} è un film di genere ${this.genre}. E’ stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}`;
    }
}

class Tv extends Movie {

    #seasons;

    constructor(title, year, genre, rating, type, seasons) {
        super(title, year, genre, rating, type);
        this.seasons = seasons;
    }

    get seasons() {
        return this.#seasons
    }

    set seasons(value) {
        this.#seasons = value;
    }

    toString() {
        return `${this.title} è una serie tv di genere ${this.genre}. La prima stagione è stata rilasciato nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}`;
    }
}

const movie1 = new Movie('prova1', 2022, 'romantico', 8.8, 'film');
const series1 = new Tv('prova2', 2017, 'romantico', 6.8, 'tv', 8);

console.log(movie1.toString());
console.log(series1.toString());

//punto 5

let arrayOfIstances = movieAndSeries.map(function (element) {
    if (element.type == "movie") {
        return new Movie(element.title, element.year, element.genre, element.rating, element.type);
    } else {
        return new Tv(element.title, element.year, element.genre, element.rating, element.type, element.series);
    }
});

//punto 6

function media(array, genere) {
    let sum = 0;
    let count = 0;
    array.forEach(element => {
        if (genere == element.genre) {
            sum += element.rating;
            count++;
        }
    });
    return sum / count;
}

console.log(media(arrayOfIstances, "crimine"))

//punto 7

function genreLyst(array) {
    genres = [];
    array.forEach(element => {
        if (!genres.includes(element.genre)) {
            genres.push(element.genre);
        }
    })
    return genres
}

console.log(genreLyst(arrayOfIstances))

//punto 8 

function genreFilter(array, genere) {
    const newArray = array.filter(element => element.genre == genere);
    const arrayOfToString = [];
    newArray.forEach(element => {
        arrayOfToString.push(element.toString());
    });
    return arrayOfToString;
}

console.log(genreFilter(arrayOfIstances, "crimine"));

//bonus 2

class Cart {
    #filmList = [];
    #filmPrice = 3.99;

    constructor(...film) {
        film.forEach(element => {
            this.filmList.push(element);
        });
    }

    get filmList() {
        return this.#filmList
    }

    set filmList(value) {
        this.#filmList = value;
    }

    addMovie(film) {
        this.filmList.push(film);
    }

    removeMovie(film) {
        for (let i = 0; i < this.filmList.length; i++) {
            if (this.filmList[i] == film) {
                this.filmList.splice(i, 1);
            }
        }
    }

    totalPrice() {
        return this.#filmList.length * this.#filmPrice;
    }
}

const cart1 = new Cart(arrayOfIstances[1], arrayOfIstances[6], arrayOfIstances[4], arrayOfIstances[9]);

console.log(cart1);

cart1.addMovie(arrayOfIstances[2]);

console.log(cart1);

cart1.removeMovie(arrayOfIstances[9]);

console.log(cart1);

console.log(cart1.totalPrice())

// se nel terminale vedi Movie{} Tv{} Cart{} ѐ perchѐ i valori sono privati e quindi non accessibili col console.log dell'istanza