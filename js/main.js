function buying() {
    let sectionCalling = document.getElementById('callingFrom');
    sectionCalling.scrollIntoView({ behavior: 'smooth' })
}
let seat = document.querySelectorAll('.serial')
let perTicketPrice = 550;
let totalPrice = 0;
let count = 0;
let available = 40;


for (let i of seat) {
    i.addEventListener('click', function () {


        if (count < 4 || createElement.innerText === i.innerText) {
            i.classList.remove('bg-[#F7F8F8]', 'text-[#03071280]')
            i.classList.add('bg-[#1DD100]', 'text-white')

            let removeElement = document.getElementById('defult');
            removeElement.innerText = '';

            perTicket(i, perTicketPrice)

            totalPrice += 550


            let totalTk = document.getElementById('total-tk');
            totalTk.innerText = totalPrice

            count++;

            document.getElementById('count').innerText = count;

            available--;

            document.getElementById('left').innerText = available;

        } else {
            let error = document.getElementById('error');
            error.classList.remove('hidden');
        }



    })

}

