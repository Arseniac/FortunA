// значение из инпута
const totalDistance = document.getElementById("total-distance");
// итог
const priceof = document.getElementById("amount-of");

const kilos_btns = document.querySelectorAll('.tons');

const kilos= [
    {
        name: "to20",
        price: 35,
    },
    {
        name: "to26",
        price: 53,
    }
];

let currentPrice = kilos[0].price;

for(let kilo of kilos_btns){
    kilo.addEventListener('click', () => {
        for(let item of kilos_btns){
            item.classList.remove('active');
        }
        kilo.classList.add('active');
        takeActiveKilo(kilo); 
    })
}

const takeActiveKilo = currentActive => {
    const dataAttrValue = currentActive.dataset.name;
    const currentKilo = kilos.find(kilo => kilo.name ===dataAttrValue);
    currentPrice = currentKilo.price;

    calculation(totalDistance.value);

}

const calculation = (totalDist=0) =>{

    let totalPrice;
    let price = currentPrice;
    let kilonum = totalDist;

    totalPrice = kilonum * price;

    const totalPriceArounded = Math.round(totalPrice);
    if(totalPrice<0){
        return false;
    } else{
        priceof.innerHTML = totalPrice + " ₽";
    }
}


