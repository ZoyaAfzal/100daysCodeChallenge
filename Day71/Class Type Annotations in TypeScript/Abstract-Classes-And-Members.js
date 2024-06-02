//Abstract-Classes-And-Members :
class AbstractItem {
    id;
    name;
    static nextId = 1;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return AbstractItem.nextId++;
    }
}
class Item extends AbstractItem {
    constructor(id, name) {
        super(id, name);
    }
    getItemInfo() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
const item1 = new Item(AbstractItem.generateNextId(), "Widget");
const item2 = new Item(AbstractItem.generateNextId(), "Gadget");
console.log(item1.getItemInfo()); // ID: 1, Name: Widget
console.log(item2.getItemInfo()); // ID: 2, Name: Gadget
export {};
