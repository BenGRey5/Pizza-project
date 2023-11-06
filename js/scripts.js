document.addEventListener('DOMContentLoaded', function() {
    function Pizza(size, toppings) {
        this.size = size;
        this.toppings = toppings;
    }

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

    Pizza.prototype.calculateTotalCost = function() {
        let totalCost = size[this.size];

        this.toppings.forEach(function(topping) {
            totalCost += toppings[topping];
        });
        return totalCost;
    }

    const selectedToppings = []

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const sizeRadios = document.querySelectorAll('input[name="size"]');
    const priceDisplay = document.getElementById("priceDisplay");

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function(){
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
            const totalCost = pizza.calculateTotalCost();
            priceDisplay.textContent = "Price: $" + totalCost.toFixed(2);
        });
    });

    sizeRadios.forEach(function(radio) {
        radio.addEventListener("change", function() {
            const selectedSizeInput = document.querySelector('input[name="size"]:checked');
            const selectedSize = selectedSizeInput ? selectedSizeInput.value : '';
            const pizza = new Pizza(selectedSize, selectedToppings);
            const totalCost = pizza.calculateTotalCost();
            priceDisplay.textContent = "Price: $" + totalCost.toFixed(2);
        });
    });
});


