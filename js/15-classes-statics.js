const { log } = require('../utils');

class RemoteControl {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // instance method
    turnUpVolume() {
        this.volume += 2;
        return this;
    }

    turnDownVolume() {
        this.volume -= 2;
        return this;
    }

    // static method
    static changeBatery() {
        log('Trocando pilha.')
    }
}

const c1 = new RemoteControl('LG');
c1.turnUpVolume().turnUpVolume().turnDownVolume();
log(c1);

RemoteControl.changeBatery();