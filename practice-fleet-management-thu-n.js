class Vehicle {
    constructor(type, make, model, year, mileage = 0) {
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }
    drive(distance) {
        this.mileage += distance;
    }
    getDetails() {
        return `The ${this.make} ${this.model} is a ${this.type} made in ${this.year} and has ${this.mileage} miles on it.`;
    }
}
let car = new Vehicle("sedan", "Toyota", "Camry", 2023, 17000);
console.log(car);
let truck = new Vehicle("truck", "Ford", "F150", 2025, 300);
console.log(truck);
let motorcycle = new Vehicle("motorcycle", "Suzuki", "TL1000S", 1999, 4500);
console.log(motorcycle);

car.drive(25000);
console.log(car.getDetails());
truck.drive(112);
console.log(truck.getDetails());
motorcycle.drive(1000);
console.log(motorcycle.getDetails());

