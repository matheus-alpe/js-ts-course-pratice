const { log } = require('../utils');

class EletronicDevice {
    constructor(name) {
        this.name = name;
        this.isOn = false;
    }

    switchOn() {
        if (this.isOn) {
            log(`${this.name} já ligado`);
            return;
        }
        this.isOn = true;
    }

    switchOff() {
        if (!this.isOn) {
            log(`${this.name} já desligado`);
            return;
        }
        this.isOn = false;
    }
}

class Smartphone extends EletronicDevice {
    constructor(name, color, model) {
        super(name);

        this.color = color;
        this.model = model;
    }
}

class Tablet extends EletronicDevice {
    constructor(name, hasWifi) {
        super(name);
        
        this.hasWifi = hasWifi;
    }

    switchOn() {
        log('Method switchOn has changed!')
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
s1.switchOn();
log(s1);

const t1 = new Tablet('iPad', true);
t1.switchOn();
log(t1);