class ListingsController {

    constructor(partiesManager) {
        this.partiesManager = partiesManager;
    }

    render = () => {

        let inputSearch = getEl('searchPartiesInput');
        let partiesContainer = getEl('partiesResults');
        partiesContainer.innerHTML = '';

        inputSearch.oninput = debounce((event) => {

            const keyword  = event.target.value;

            this.partiesManager.search(keyword).then(result => {
                partiesContainer.innerHTML = '';
                this.renderParties(result, partiesContainer);                     
            })
        }, 500);

        this.partiesManager.getAll().then(data => {
            this.renderParties(data, partiesContainer);           

        });

    }

    renderParties = (list, container) => {

        list.forEach(party => {
            let card = document.createElement('div');
            card.classList.add('card');
            card.style.width = '200px';

            card.innerHTML = 
            `<img src="${party.picture}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${party.name}</h5>
              <p class="card-text">${party.slogan}</p>
              <a href="#" class="btn btn-primary">Details</a>
            </div>`;

            container.append(card);

        });
    }
        
}