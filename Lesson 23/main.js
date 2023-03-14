let movieManager = new MovieManager();

let searchInput = document.getElementById('searchInput');
let suggestionContainer = document.getElementById('suggestion');

searchInput.addEventListener('input', debounce((event) => {
    let { value } = event.target;

    movieManager.getSuggestion(value).then(result => {
        if (value.trim()) {
            renderSuggestion(result);
        } else {
            suggestionContainer.style.display = 'none';
        }
    });

}, 500));


searchInput.addEventListener('keyup', (event) => {

    if (event.key === 'Enter') {
        suggestionContainer.style.display = 'none';
        let input = event.target.value;
        searchForMovies(input, 1);
    }

});

function searchForMovies(input, page) {
    movieManager.search(input, page).then(data => {
        renderResults(data.results);
        if(data.totalCount > 10) {
            renderPagination(data.totalCount, data.page);
        }
    })
}

function renderSuggestion(movie) {



    suggestionContainer.innerHTML = '';
    suggestionContainer.style.display = 'flex';

    let img = document.createElement('img');
    img.src = movie.picture;
    img.height = 100;

    if (movie.picture === 'N/A') {
        img.style.display = 'none';
    }
    let title = document.createElement('h3');
    title.innerText = movie.name;

    let year = document.createElement('span');
    year.innerText = movie.year;

    suggestionContainer.append(
        img,
        title,
        year
    );
}

function renderResults (results) {
    let container = document.getElementById('results');
    container.innerHTML = '';

    let cards = results.map(result => {
        let card = document.createElement('img');
        card.src = result.picture;
        card.width = 200;

        return card;

    });

    container.append(...cards);

}

function renderPagination(totalCount, activePage) {

    let pageCount = Math.ceil(totalCount / 10);

    `<div class="pagination">
    <a href="#">&laquo;</a>
    <a href="#">1</a>
    <a class="active" href="#">2</a>
    <a href="#">3</a>
    <a href="#">4</a>
    <a href="#">5</a>
    <a href="#">6</a>
    <a href="#">&raquo;</a>
</div>`


    let pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    pagination.style.display = 'inline-block';

    let firstPage = document.createElement('a');
    firstPage.innerHTML = '&laquo;';
    pagination.append(firstPage);

    for(let i = 1; i<= pageCount; i++) {
        let page = document.createElement('a');
        page.innerHTML = i;
        if(i === activePage) {
            page.classList.add('active');
        } else {
            page.addEventListener('click', (e)=> {
                searchForMovies(searchInput.value,i)
            })
        }
        
        pagination.append(page);
    
    }

    let lastPage = document.createElement('a');
    lastPage.innerHTML = '&raquo;';
    pagination.append(lastPage);    

}

