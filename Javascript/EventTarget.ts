class MyEventTarget {
    // @ts-ignore
    #listeners: { [event: string]: Array<Function> } = {};

    addEventListener(event: string, listener: Function): void {
        if (!this.#listeners[event]) {
            this.#listeners[event] = [];
        }
        this.#listeners[event].push(listener);
    }

    removeEventListener(event: string, listener: Function): void {
        const listeners = this.#listeners[event];
        if (listeners) {
            const index = listeners.indexOf(listener);
            if (index !== -1) {
                listeners.splice(index, 1);
            }
        }
    }

    dispatchEvent(event: string, data?: any): void {
        const listeners = this.#listeners[event];
        if (listeners) {
            listeners.forEach(listener => listener(data));
        }
    }
}

const target = new MyEventTarget();

const onCustomEvent = (data: any) => {
    console.log('Event received:', data);
}

target.addEventListener('customEvent', onCustomEvent);
target.dispatchEvent('customEvent', { message: 'Hello, world!' });
target.removeEventListener('customEvent', onCustomEvent);
target.dispatchEvent('customEvent', { message: 'This will not be logged.' });

class EventEmitter {
    events: { [key: string]: Function[] } = {};

    on(name: string, fn: Function): void {
        const event = this.events[name];

        if (event) event.push(fn);
        else this.events[name] = [fn];
    }

    emit(name: any, ...data: any[]): void {
        const event = this.events[name];

        if (!event) return;
        for (const listener of event) listener(...data);
    }
}

const emitter = new EventEmitter();

emitter.on('name', (data: any) => {
    console.dir({ data });
});

emitter.emit('name', { a: 5 });
