var buttons = [];

function drawButtons() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].draw();
    }
}

function buttonClick() {
    for (let i = 0; i < buttons.length; i++) {
        let b = buttons[i];
        if (b.enabled && b.checkHover) {
            b.onClick();
        }
    }
}

function addButton(b) {
    buttons.push(b);
}

class Button {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.enabled = true;
    }

    checkHover() {
        return mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h;
    }

    onClick() {

    }

    draw() {

    }
}
