function perTicket(name, tk) {
    let createElement = document.createElement('p');
    let seatNames = document.getElementById('seatName');
    let newElement = seatNames.appendChild(createElement);
    newElement.innerText=  name.innerText

    let createElementDefult = document.createElement('p');
    let defultBus = document.getElementById('defultBus');
    defultBus.appendChild(createElementDefult).innerText = 'Economoy';

    let createElementPrice = document.createElement('p');
    let price = document.getElementById('price');
    price.appendChild(createElementPrice).innerText = tk;


}




