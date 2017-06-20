function Phone(brand, price, color, screen, memory, camera) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.screen = screen;
    this.memory = memory;
    this.camera = camera;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". Phone have " + this.screen + " screen and have " + this.memory + " memory and his camera have " + this.camera + ".");
};

var iPhone6S = new Phone("Apple", 2250, "silver", "Retina", "16GB", "15Mpx");
var GalaxyS6 = new Phone("Samsung", 2999, "black","AMOLED", "32GB", "18Mpx");
var ClubDB = new Phone("Alcatel", 10, "lemon", "TFT", "15MB", ": there is no camera");

iPhone6S.printInfo();
GalaxyS6.printInfo();
ClubDB.printInfo();