//Class-Implement-Interface :
class ProductImplementInterface {
    id;
    name;
    // 'private' property
    static nextId = 1;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return ProductImplementInterface.nextId++;
    }
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
// Generate unique IDs for products using the static method
const product1implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "Widget");
const product2implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "Gadget");
console.log(product1implement.getProductInfo()); // ID: 1, Name: Widget
console.log(product2implement.getProductInfo()); // ID: 2, Name: Gadget
export {};
