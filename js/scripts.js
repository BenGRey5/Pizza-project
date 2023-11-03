document.addEventListener('DOMContentLoaded', function() {
    function Pizza(size, toppings) {
        this.size = size
        this.toppings = toppings;
        this.calculatePrice = function() {
            let basePrice = 0;
            let toppingPrice = 0

        const toppingPrices = {
        Pepperoni: 0.50,
        Pineapple: 0.25,
        Onions: 0.25, 
        Olives: 0.30,  
        Mushrooms: 0.25, 
        Canadianbacon: 0.50,
        Peppers: 0.30, 
        Tomatoes: 0.20,
        Small: .8,
        Medium: 1,
        Large: 1.2
    };


const sizePrices = {
    Small: 3,
    Medium: 5,
    Large: 7
};

if (sizePrices[this.size]) {
    basePrice = sizePrices[this.size]
} else {
    return 0;
}
If (Array.isArray(this.toppings)) {
    for (let i = 0; i< this.toppings.length; i++) {
        const topping = this.toppings[i];
        if (toppingPrices[topping]); {
            toppingPrice += toppingPrices[topping];
        } 
        return basePrice + toppingPrice;
    }
}
const myPizza = new Pizza("small", ["Pepperoni", "Mushrooms"]);
const totalPrice = myPizza.calculatePrice();
console.log("Total price : $" + totalPrice);
        });

































// document.addEventListener('DOMContentLoaded', function() {
//     const toppingPrices = {
//         Pepperoni: 0.50,
//         Pineapple: 0.25,
//         Onions: 0.25, 
//         Olives: 0.30,  
//         Mushrooms: 0.25, 
//         Canadianbacon: 0.50,
//         Peppers: 0.30, 
//         Tomatoes: 0.20,
//     };

//     const pizzaSize = {
//         Small: .8,
//         Medium: 1,
//         Large: 1.2
//     };

//     const checkbox1 = document.getElementById("topping1");
//     const checkbox2 = document.getElementById("topping2");
//     const checkbox3 = document.getElementById("topping3");
//     const checkbox4 = document.getElementById("topping4");
//     const checkbox5 = document.getElementById("topping5");
//     const checkbox6 = document.getElementById("topping6");
//     const checkbox7 = document.getElementById("topping7");
//     const checkbox8 = document.getElementById("topping8");

//     const priceDisplay = document.getElementById('priceDisplay');
//     const radioToppings = document.getElementsByName('topping')
    
    
//     Pizza.prototype.calculateToppings = function() {
//         let price = 4; // Initialize the price with a base value

//         switch (true) {
//             case checkbox1.checked:
//                 price += toppingPrices.Pepperoni;
//                 break;
//             case checkbox2.checked:
//                 price += toppingPrices.Pineapple;
//                 break;
//             case checkbox3.checked:
//                 price += toppingPrices.Onions;
//                 break;
//             case checkbox4.checked:
//                 price += toppingPrices.Olives;
//                 break;
//             case checkbox5.checked:
//                 price += toppingPrices.Mushrooms;
//                 break;
//             case checkbox6.checked:
//                 price += toppingPrices.Canadianbacon;
//                 break;
//             case checkbox7.checked:
//                 price += toppingPrices.Peppers;
//                 break;
//             case checkbox8.checked:
//                 price += toppingPrices.Tomatoes;
//                 break;
//             default:
//                 price += 0; 
//                 break;
//         }

//         switch (this.size) {
//             case "Small":
//             price *= pizzaSize.Small;
//             break;
//             case "Medium":
//             price *= pizzaSize.Medium;
//             break;
//             case "Large":
//             price *= pizzaSize.Large;
//             break;
//         }

//         return price; 


//         checkbox1.addEventListener("change", handleCheckboxes);
//         checkbox2.addEventListener("change", handleCheckboxes);
//         checkbox3.addEventListener("change", handleCheckboxes);
//         checkbox4.addEventListener("change", handleCheckboxes);
//         checkbox5.addEventListener("change", handleCheckboxes);
//         checkbox6.addEventListener("change", handleCheckboxes);
//         checkbox7.addEventListener("change", handleCheckboxes);
//         checkbox8.addEventListener("change", handleCheckboxes);
//     }
// });




// document.addEventListener('DOMContentLoaded', function() {
//     let price = 4.70;
    
//     for (let i = 1; i <= 8; i++) {
//     const checkbox = document.getElementById('checkbox' + i);
//     checkbox.addEventListener('change', function() {
//         if (checkbox.checked) {
//             price += 0.3;
//         } else {
//             price -= 0.3
//         }
//         document.getElementById('priceDisplay').textContent = 'Price: $' + price.toFixed(2);
//     });
//     }
//     });
//     console.log(price)

