class Box<T> {
    private boxes: T[] = [];

    public add(element: T): T[] {
        this.boxes.push(element);
        return this.boxes;
    }

    public remove(): T[] {
        this.boxes.shift();
        return this.boxes;
    }

    get count(): number {
        return this.boxes.length;
    }
}

// let box = new Box<Number>();
// box.add(1);
// box.add(2);
// box.add(3);
// console.log(box.count);

let box = new Box<String>();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);