const { log } = require('../utils.js');

function Account(agency, account, balance) {
    this.agency = agency;
    this.account = account;
    this.balance = balance;
}

Account.prototype.withdraw = function(value) {
    if (this.balance >= value) {
        this.balance -= value;
    }

    this.seeBalance();
}

Account.prototype.deposit = function(value) {
    this.balance += value;
}

Account.prototype.seeBalance = function() {
    log(`Agência/Conta: ${this.agency}/${this.account} | Saldo: R$${this.balance.toFixed(2)}`);
}

const c1 = new Account(11, 22, 100);
c1.deposit(50);
c1.withdraw(118);
log(c1);

function CheckingAccount(limit, ...info) {
    Account.call(this, ...info);
    this.limit = limit;
}

CheckingAccount.prototype = Object.create(Account.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;

CheckingAccount.prototype.withdraw = function(value) {
    if (value > (this.balance + this.limit)) {
        log(`Saldo insuficiente: ${this.balance.toFixed(2)}`);
        return;
    }
    
    this.balance -= value;
    this.seeBalance();
}

const ac1 = new CheckingAccount(10, 11, 22, 100);
ac1.deposit(10);
ac1.withdraw(130)
log(ac1);

function SavingsAccount(...info) {
    Account.call(this, ...info);
}

SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;

const sc1 = new SavingsAccount(11, 22, 100);
sc1.deposit(10);
sc1.withdraw(150)
log(sc1);
