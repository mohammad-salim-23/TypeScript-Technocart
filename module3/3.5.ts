{
    // access modifiers
    class  BankAccount{
        public readonly id:number;
        public name:string;
        // private _balance:number;// eita re bahir teke keu access korte parbe na
        protected _balance:number;//jodi kokono emon hoy amar child class extends kortece ei class ke and amar ei property o ami chai child class jate access korte pare tokon private er poriborte public use kora better

        constructor(id:number,name:string,balance:number){
            this.id=id;
            this.name=name;;
            this._balance=balance;
        }
        addDeposite(amount:number){
            this._balance=this._balance+amount;
        }
        getBalance(){
            return this._balance;
        }
    }
    const goribManusherAccount = new BankAccount(111,"Mr.Amir Hamja",20);
    // goribManusherAccount._balance=0; i don't access this property because it's a private
    goribManusherAccount.addDeposite(59);
    const hamjarBalance = goribManusherAccount.getBalance();
    console.log(hamjarBalance);
}