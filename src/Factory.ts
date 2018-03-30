abstract class Pizza {
    protected abstract setTopping();
    protected abstract setSauce();
    protected abstract setPizzaCrust();
}

class VeggiePizza extends Pizza {
    setTopping() {
        console.log("Veggie Topping");
    }
    setSauce() {
        console.log("Veggie Sauce");
    }
    setPizzaCrust() {
        console.log("Pan Pizza");
    }
}

class MargheritaPizza extends Pizza {
    setTopping() {
        console.log("Margherita Topping");
    }
    setSauce() {
        console.log("Margherita Sauce");
    }
    setPizzaCrust() {
        console.log("Thin Crust Pizza");
    }
}

class MeatPizza extends Pizza {
    setTopping() {
        console.log("Margherita Topping");
    }
    setSauce() {
        console.log("Margherita Sauce");
    }
    setPizzaCrust() {
        console.log("Thin Crust Pizza");
    }
}

class BBQChickenPizza extends Pizza {
    setTopping() {
        console.log("BBQ Chicken Topping");
    }
    setSauce() {
        console.log("BBQ Chicken Sauce");
    }
    setPizzaCrust() {
        console.log("Pan Pizza");
    }
}

abstract class PizzaFactory {

    pizza: string;

    setPizza(pizza: string) {
        this.pizza = pizza;
    }

    abstract createVeggiePizza();
    abstract createMeatPizza();
}

class VeggiePizzaFactory extends PizzaFactory {

    createMeatPizza() { }

    createVeggiePizza() {
        switch (pizza) {
            case "Veggie": return new VeggiePizza();
            case "Margherita": return new MargheritaPizza();
        }
    }
}

class MeatPizzaFactory extends PizzaFactory {

    createMeatPizza() {
        switch (pizza) {
            case "BBQChicken": return new BBQChickenPizza();
            case "Meat": return new MeatPizza();
        }
    }
    createVeggiePizza() { }
}

let factory: PizzaFactory;

let pizza = "Meat";

let pizzaResult : Pizza;

switch (pizza) {
    case "Meat": factory = new MeatPizzaFactory();
                 factory.setPizza(pizza);
                 pizzaResult = factory.createMeatPizza(); break;

    case "Veggie" : factory = new VeggiePizzaFactory();
                    factory.setPizza(pizza);
                    pizzaResult = factory.createVeggiePizza(); break;

    case "Margherita" : factory = new VeggiePizzaFactory();
                        factory.setPizza(pizza);
                        pizzaResult = factory.createVeggiePizza(); 
}    