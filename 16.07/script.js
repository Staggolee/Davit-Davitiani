class Animal {
    constructor(name, speed){
        this.name = name;
        this.speed = speed;
    }

    run(speed = 0){
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}`)
    }

    stop() {
        this.speed = 0;
        console.log (`${this.name} stopped`);

    }

    static compare(a, b){
        return a.speed - b.speed;
    }
    
}

class Mouse extends Animal {
// constructor(name, earLength){
//     super(name)
//     this.earLength = earLength
// }



    hide(){
        console.log(`${this.name} hides!`);
    }

    // stop(){
    //     super.stop();
    //     this.hide()      /super idzaxebs mshoblis funqcias
    // }
        
}

let jerry = new Mouse("jerry", 3);

// jerry.run(120);
// jerry.hide();
// jerry.stop();
// console.log(jerry.earLength)

let mice = [
    new Mouse("big rat", 5),
    new Mouse("batman", 2),
    new Mouse("jerry", 4)

]

// mice.sort(Animal.compare);
// mice[0].run()
// mice[1].run()
// mice[2].run()


class MyArray extends Array {
    isEmpty(){
        return this.length === 0;
    }
}

let MyArr = new MyArray(1,2,3,4,5,6,7,8,9,10,20,30,40);

// console.log(`myArr.isEmpty() - ${MyArr.isEmpty()}`);
// let filteredArr = MyArr.filter( item => item >= 10);
// console.table(filteredArr)
// console.log(`filteredArr.isEmpty() - ${filteredArr.isEmpty()}`)

// console.log(jerry instanceof Animal);
// console.log(jerry instanceof Mouse);
// console.log(MyArr instanceof Animal);

// object instanceof class

class Product {
    constructor(id, name, price, discount) {
        this._id = id;
        this.name = name;
        this.price = price;
    }
    makeDiscount(discount) {
        return this.price - (this.price / 100) * discount;
    }
    print() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Price: ${this.price}` );
    }
 
    get id() {
        return this._id;
    }
 
 
    get price() {
        return this._price;
    }
 
    set price(value) {
        if (value <= 0) {
            console.log("Price Error!...");
            return;
        }
        this._price = value;
    }
 
    static compare(productA, productB) {
        return productA.price - productB.price;
    }
 
 }
 
 
 let products = [
    new Product(1, "adidas", 200),
    new Product(2, "nike", 100),
    new Product(3, "newbalance", 100),
 ];
 
 products.sort(Product.compare);
 
 
 console.log(products[0]);
 console.log(products[1]);
 console.log(products[2]);
 console.log(products[0].makeDiscount(70));
 
 products[0].id = 3213;
 console.log(products[0]);
 
 
 products[0].print();
 products[1].print();
 products[2].print();

 class Book extends Product{
     constructor(id, name, price, discount, authors, pubDate){
        super(id, name, price, discount); 
        this.authors = authors;
        this.pubDate = pubDate;
    
     }


     

     
     print() {
        super.print()
         console.log(`author: ${this.authors}, date: ${this.pubDate}`);
     }

     get authors()


     

