class Observerable{
    observers: any;

    constructor() {
        this.observers = [];
    }

    subscribe(observer: any) {
        this.observers.push(observer);
    }

    unsubscribe(func: any) {
        this.observers = this.observers.filter((observer: any) => observer !== func);
    }

    notify(data: any) {
        this.observers.forEach((observer: any) => {
            observer(data);
        });
    }
}

export default new Observerable();
