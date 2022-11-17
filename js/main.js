  function createCards() {
    let card = ``;
    const setCard = document.getElementById("cards");
    for (let i=0; i < data.length; i++) {
        card += `
        <div class="col">
            <div class="card p-3">
                <div class="row g-0">
                    <div class="col-md-4" style="height: 100%;">
                        <img src="${data[i].flags.svg}" class="card-img rounded-start" alt="...">
                    </div>
                    <div class="col-md-4 card-body">
                        <div class="card-title">
                            <h5 class="d-inline fs-4">${data[i].name.official}</h5>
                        </div>
                        <p class="card-text d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                            </svg>
                            <small class="text-muted d-flex ps-1" style="overflow:auto; height:40px;">${data[i].timezones}</small>
                        </p>
                        <p class="card-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                            <small class="text-muted"><a href="${data[i].maps.googleMaps}">View in Google Maps</a></small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        `;
    }  
    setCard.innerHTML = card;
}
      
createCards(); 

