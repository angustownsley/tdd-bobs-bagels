class Basket{
    constructor() {
        this.contents = []
    }

    addItem(item) {
        const itemInBasket = this.contents.find((element) => {return element.name === item.name})

        if(itemInBasket){
            itemInBasket.quantity++
            return;
        }
        
        const newItem = {...item, quantity:1}

        this.contents.push(newItem)
    }
}

class Bagel{
    constructor(name, price) {
        if(typeof name !== "string" || typeof price !== "number"){
            throw new Error("Invalid argument types")
        }
        
        this.name = name
        this.price = price
    }
}

export {Bagel}

export default Basket