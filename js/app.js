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
    searchResult.textContent = '';
    data.forEach(data => {
        // console.log(data);
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
    .then(data => phoneAllDetails(data.data));
}

const phoneAllDetails = data =>{
     console.log(data);
     const phoneDetails = document.getElementById('phone-details');
     phoneDetails.textContent = '';
     const div = document.createElement('div')
     div.classList.add('card');
     div.innerHTML = `
     <img src="${data.image}" class="card-img-top" alt="...">
     <div class="card-body">
     <h5 >Phone Name: ${data.name}</h5>
            <h5 class="card-brand">Release Date: ${data.releaseDate ? data.releaseDate : 'Comming soon'} </h5>
              <h5 >Phone Features:</h5>
              <h5>Chipset: ${data.mainFeatures.chipSet}</h5>
              <h5>Display Size: ${data.mainFeatures.displaySize}</h5>
              <h5>Memory Details: ${data.mainFeatures.memory}</h5>
              <h5>Storage Details: ${data.mainFeatures.storage}</h5>
               <h5>Sensors: </h5>
               <h5> ${data.mainFeatures.sensors[0]}</h5>
               <h5> ${data.mainFeatures.sensors[1]}</h5>
               <h5> ${data.mainFeatures.sensors[2]}</h5>
               <h5> ${data.mainFeatures.sensors[3]}</h5>
               <h5> ${data.mainFeatures.sensors[4]}</h5>
               <h5> ${data.mainFeatures.sensors[5]}</h5>
               <h5 >Others:</h5>
              <h5>Bluetooth: ${data.others.Bluetooth}</h5>
              <h5>GPH: ${data.others.GPH}</h5>
              <h5>NFC: ${data.others.NFC}</h5>
              <h5>Radio: ${data.others.Radio}</h5>
              <h5>USB: ${data.others.USB}</h5>
              <h5>WLAN: ${data.others.WLAN}</h5>
     </div>
     `;
     phoneDetails.appendChild(div);
}
