const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText)

    searchField.value = '';

    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(phone => displaySearchResult(phone.data));
}

const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    data.forEach(data => {
        // console.log(data);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick ="loadPhoneDetail (${data.phoneId})" class="card h-100">
             <img src="${data.image}" class="card-img-top" alt="...">
          <div class="card-body">
             <h5 class="card-title">${data.phone_name}</h5>
             <h5 class="card-title">${data.brand}</h5>
            
             <p class="card-text">${data.slug}</p>
          </div>
       </div>
        `;
        searchResult.appendChild(div);
    });
} 

const loadPhoneDetail = phoneId => {
    // console.log(phoneId);
    const url = ` https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => phoneAllDetails(data.data));
}

const phoneAllDetails = data =>{
     console.log(data);
}