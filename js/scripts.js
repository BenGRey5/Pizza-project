// Business Logic
function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
    this.price = 0; // Initialize price property
}

Pizza.prototype.calculateTotalCost = function () {
    const toppings = {
        Pepperoni: 0.50,
        Pineapple: 0.25,
        Onions: 0.25,
        Olives: 0.30,
        Mushrooms: 0.25,
        "Canadian bacon": 0.50,
        Peppers: 0.30,
        Tomatoes: 0.20
    };

    const size = {
        Small: 3,
        Medium: 5,
        Large: 7
    };

    this.price = size[this.size];

    this.toppings.forEach(function (topping) {
        this.price += toppings[topping];
    }, this); // Pass 'this' to maintain the correct context

    return this.price;
}

// UI Logic
document.addEventListener('DOMContentLoaded', function () {
    const selectedToppings = []
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const sizeRadios = document.querySelectorAll('input[name="size"]');
    const priceDisplay = document.getElementById("priceDisplay");

    function updatePriceDisplay(pizza) {
        priceDisplay.textContent = "Price: $" + pizza.price.toFixed(2);
    }

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                selectedToppings.push(checkbox.value);
            } else {
                const index = selectedToppings.indexOf(checkbox.value);
                if (index !== -1) {
                    selectedToppings.splice(index, 1);
                }
            }

            const selectedSizeInput = document.querySelector('input[name="size"]:checked');
            const selectedSize = selectedSizeInput ? selectedSizeInput.value : '';
            const pizza = new Pizza(selectedSize, selectedToppings);
            pizza.calculateTotalCost();
            updatePriceDisplay(pizza);
        });
    });

    sizeRadios.forEach(function (radio) {
        radio.addEventListener("change", function () {
            const selectedSizeInput = document.querySelector('input[name="size"]:checked');
            const selectedSize = selectedSizeInput ? selectedSizeInput.value : '';
            const pizza = new Pizza(selectedSize, selectedToppings);
            pizza.calculateTotalCost();
            updatePriceDisplay(pizza);
        });
    });
});




dfjadshgjfadjgjdsanfgjfjdasgjasdjfjasdjf



