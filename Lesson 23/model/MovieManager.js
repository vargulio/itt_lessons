class Movie {
    constructor(name, year, picture) {
        this.name = name;
        this.year = year;
        this.picture = picture;
    }
}

class MovieManager {

    URL = `http://www.omdbapi.com/?apikey=64615f47&`;

    getSuggestion = (keyword) => {
        return request(`${this.URL}t=${keyword}`)
            .then(data => {
                return new Movie(data.Title, data.Year, data.Poster);
            })
            .catch(error => {
                alert(error);
            })

    }

    search = (keyword, page = 1) => {

        return request(`${this.URL}s=${keyword}&page=${page}`)
            .then(data => {
                if(data.Response === 'True') {
                    return {
                        results: data.Search.map(movie => new Movie(movie.Title, movie.Year, movie.Poster)),
                        totalCount: Number(data.totalResults),
                        page
                    };
                } else {
                    return {
                        results: [],
                        totalCount: 0,
                        page
                    }
                }
                
            })
            .catch(err => {
                alert(err);
            })
    }




}