function perTicket(name, tk) {
    let createElement = document.createElement('p');
    let seatNames = document.getElementById('seatName');
    let newElement = seatNames.appendChild(createElement);
    newElement.innerText = name.innerText

    let createElementDefult = document.createElement('p');
    let defultBus = document.getElementById('defultBus');
    defultBus.appendChild(createElementDefult).innerText = 'Economoy';

    let createElementPrice = document.createElement('p');
    let price = document.getElementById('price');
    price.appendChild(createElementPrice).innerText = tk;


}


function discount20(price) {
    let discountText = document.getElementById('discount');
    discountText.classList.remove('hidden')
    let discount = price * 0.20;
    let discountPrice = document.getElementById('disPrice');
    discountPrice.innerText = discount
    let grandTotal = price - discount
    let grand = document.getElementById('grand');
    grand.innerText = grandTotal;
}
function discount15(price) {
    let discountText = document.getElementById('discount');
    discountText.classList.remove('hidden')
    let discount = price * 0.15;
    let discountPrice = document.getElementById('disPrice');
    discountPrice.innerText = discount
    let grandTotal = price - discount
    let grand = document.getElementById('grand');
    grand.innerText = grandTotal;
}



