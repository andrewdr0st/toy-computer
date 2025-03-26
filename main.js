

function setup() {
    createCanvas(windowWidth, windowHeight);
    setupUiParams();

    noStroke();

    let m = new Memory(128);
    m.flush();
    m.write(0x08, 0xff);
    m.write(0x09, 0x7b);
    m.printContents();
}

function draw() {
    calculateDeltaTime();

    background(60, 30, 60);
}

class Memory {
    constructor(size) {
        this.size = size;
        this.mem = new Uint8Array(size);
    }

    flush() {
        for (let i = 0; i < this.size; i++) {
            this.mem.set([0], i);
        }
    }

    printContents() {
        for (let i = 0; i < this.size; i += 8) {
            let s = i.toString(16).padStart(4, "0") + ": "
            for (let j = 0; j < 8; j++) {
                s += this.mem[i + j].toString(16).padStart(2, "0") + " ";
            }
            console.log(s);
        }
    }

    write(offset, byte) {
        this.mem.set([byte], offset);
    }

    read(offset) {
        return this.mem[offset];
    }
}

class DataBus {
    constructor(width) {
        this.width = width;
        this.value = 0;
    }
}
