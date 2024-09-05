const parts = document.querySelector('.parts');
const form = document.querySelector('.form');
const input1 = document.querySelector('.input1');
// const input2 = document.querySelector('.input2');

const restaurants = [
    { name: 'Trader', price: 25, address: 'Pyatiy' },
    { name: 'rizif', price: 30, address: 'Jorabayeva' },
    { name: 'Lola', price: 4, address: 'Yubileyniy' },
    { name: 'Uchrashuv', price: 20, address: 'Port' },
    { name: 'Dasturxon', price: 22, address: 'Pyatiy' },
    { name: 'Baliq', price: 20, address: 'Uchqizil' },
    { name: 'Afrodita', price: 30, address: 'Yubileyniy' },
    { name: 'Oxus', price: 40, address: 'Uchqizil' },
    { name: 'Nur', price: 15, address: 'Jorabayeva' },
    { name: 'Manti', price: 10, address: 'Devyatka' },
    { name: 'Burger', price: 20, address: 'Yubileyniy' },
    { name: 'Somsa', price: 10, address: 'Zelyoniy' },
    { name: 'Tandir', price: 35, address: 'Jorabayeva' },
    { name: 'Uzmir', price: 10, address: '75' },
    { name: 'American', price: 20, address: 'Yubileyniy' },
];

const createElements = base => {
    parts.innerHTML = '';
    base.forEach(r => {
        let box = document.createElement('div');
        box.classList.add('part');
    
        let rname = document.createElement('h2');
        rname.classList.add('name');
        rname.innerHTML = r.name;
    
        let rprice = document.createElement('p');
        rprice.classList.add('price');
        rprice.innerHTML = r.price;
    
        let raddress = document.createElement('p');
        raddress.classList.add('address');
        raddress.innerHTML = r.address;
    
        box.appendChild(rname);
        box.appendChild(rprice);
        box.appendChild(raddress);
    
        parts.appendChild(box);
    });
}

createElements(restaurants);

form.addEventListener('submit', e => {
    e.preventDefault();

    let address = input1.value;
    // let price = Number(input2.value);

    const searched = restaurants.filter(res => res.address === address);
    createElements(searched);
});
