Pizza project

Code contributors/Authors

B.G Reynolds

Technologies used-

HTML CSS Javascript

Description-

This project takes the number a user inputs and returns a price based on the size and toppings of their chosen pizza

Setup/Installation-

Clone this repository to your desktop

Navigate to the top level of the directory

Open js/index.html in your browser

Known bugs-

unknown

MIT License

Copyright (c) 2023 Ben Reynolds

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.





Describe: Pizza function
Test: const pizza1 = new Pizza(size.Medium, [toppings.Pineapple, toppings.Peppers, toppings.Onions]);
Code:function Pizza(size, toppings) {
        this.size = size;
        this.toppings = toppings;
    }
        const toppings = {
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
    const size = {
        Small: .8,
        Medium: .1,
        Large: 1.5
Expected Output: size: 1, toppings [0.25, 0.3, 0.25]

Description: Pizza.prototype
Test: Large Pizza with everything
Code:Pizza.prototype.calculateTotalCost = function() {
        let totalCost = this.size;

        this.toppings.forEach(function(topping) {
            totalCost += toppings[topping];
        });
            return totalCost;
        
    }


    const selectedToppings = ["Pepperoni", "Pineapple", "Onions", "Olives", "Mushrooms", "CanadianBacon", "Peppers", "Tomatoes"];
    const selectedSize = size.Large; 
    const pizza = new Pizza(selectedSize, selectedToppings);

    const totalCost = pizza.calculateTotalCost();
    

    console.log(pizza);
    console.log("Total Cost: $" + totalCost);
});
Expected Output: $9.55

Test: hopefully the last one
Code:const checkboxes = document.querySelectorAll('input[type="checkbox"]');
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
Expected Output: input prices

