const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText)

    searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data));
}

const displaySearchResult = data => {
  
    const searchResult = document.getElementById('search-result');
    data.forEach(data => {
        console.log(data);
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <div class="card ">
             <img src="${data.image}" class="card-img-top" alt="...">
          <div class="card-body">
             <h5 class="card-title">${data.phone_name}</h5>
             <h5 class="card-title">${data.brand}</h5>
             <button onclick ="loadPhoneDetail('${data.slug}')" class="btn btn-primary" type="submit">Details</button>
             
          </div>
       </div>
        `;
        searchResult.appendChild(div);
    });
} 

const loadPhoneDetail = id => {
    
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => phoneAllDetails(data));
}

const phoneAllDetails = data =>{
     console.log(data);
     const phoneDetails = document.getElementById('phone-details');
     const div = document.createElement('div')
     div.classList.add('card');
     div.innerHTML = `
     <img src="${data.image}" class="card-img-top" alt="...">
     <div class="card-body">
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     </div>
     `;
     phoneDetails.appendChild(div);
}
