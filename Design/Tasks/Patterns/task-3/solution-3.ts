class RingBuffer {
    private size: number;
    private buffer: Buffer;
    private offset: number;

    constructor(size: number) {
        this.size = size;
        this.buffer = Buffer.alloc(size);
        this.offset = 0;
    }

    write(data: any) {
        const { size, offset } = this;
        const { length } = data;

        const available = size - offset;
        const len = Math.min(available, size, length);
        const rest = available - length;

        this.buffer.write(data, offset, len);
        this.offset += len;

        if (this.offset === size) this.offset = 0;
        if (rest < 0) this.write(data.slice(rest));
    }

    toString() {
        return this.buffer.toString('utf8');
    }
}

class RoundRobin {
    private readonly factoryFunction: Function;
    private readonly timeout: number;
    private readonly instances: Function[];
    private currentIndex: number;
    private readonly lastAccessTime: number[];

    constructor(factoryFunction: Function, timeout: number) {
        this.factoryFunction = factoryFunction;
        this.timeout = timeout;
        this.instances = [];
        this.currentIndex = 0;
        this.lastAccessTime = [];
    }

    createInstance() {
        const instance = this.factoryFunction();
        this.instances.push(instance);
        this.lastAccessTime.push(Date.now());
    }

    getInstance() {
        const now = Date.now();
        if (this.instances.length === 0) {
            this.createInstance();
        }

        let instance = this.instances[this.currentIndex];
        let timeSinceLastAccess = now - this.lastAccessTime[this.currentIndex];

        if (timeSinceLastAccess > this.timeout) {
            this.lastAccessTime[this.currentIndex] = now;
        }

        this.currentIndex = (this.currentIndex + 1) % this.instances.length;

        return instance;
    }
}

function createNewInstance() {
    return new RingBuffer(10);
}

const roundRobin = new RoundRobin(createNewInstance, 2000);

setInterval(() => {
    const instance = roundRobin.getInstance();
    console.log(instance.toString());
}, 500);
