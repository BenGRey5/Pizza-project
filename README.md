Descripe: Pizza()

Test: "It should return a value based on the input.
Code:   Pizza.prototype.calculatePrice = function() {
    return this.size * this.toppings;
};
Expected Output: 36

Test: "It should return the values of the toppings I input
Code: const toppingPrices = {
    Pepperoni: 0.50,
    Pineapple: 0.25,
    Onions: .25,
    Olives: .30,
    Mushrooms: .25,
    Canadianbacon: 0.50,
    Peppers: 0.30,
    Tomatoes: 0.20,
    };
Expected Output: .5, .25, .25, .3, .25, .5, .3, .2

Describe: toppings calculation
Test: "It should return the combined total of the toppings chosen"
Code: switch (this.toppings) 
            case "Pepperoni":
                price += toppingPrices.Pepperoni;
                break;
            case "Pineapple":
                price += toppingPrices.Pineapple;
                break;
            case "Onions":
                price += toppingPrices.Onions;
                break;
            case "Olives":
                price += toppingPrices.Olives;
                break;
            case "Mushrooms":
                price += toppingPrices.Mushrooms;
                break;
            case "Canadianbacon":
                price += toppingPrices.Canadianbacon;
                break;
            case "Peppers":
                price += toppingPrices.Peppers;
                break;
            case "Tomatoes":
                price += toppingPrices.Tomatoes;
                break;
            default:
                price += 0; 
                break;
Expected Output:

Test:
Code:
Expected Output:

Test:
Code:
Expected Output:

Test:
Code:
Expected Output:

Test:
Code:
Expected Output:

Test:
Code:
Expected Output:

Test:
Code:
Expected Output: