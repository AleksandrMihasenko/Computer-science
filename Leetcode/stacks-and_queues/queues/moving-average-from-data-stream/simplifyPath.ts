class MovingAverage {
    private queue: number[] = [];
    private readonly size: number;
    private sum: number = 0.0;

    constructor(size: number) {
        this.size = size;
    }

    next(val: number): number {
        this.queue.push(val);
        this.sum += val;

        if (this.queue && this.queue.length > this.size) {
            this.sum -= this.queue.shift();
        }

        return this.sum / this.queue.length;
    }

    getSum() {
        return this.sum;
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
*/

// Time: O(1);
// Space: O(n);

const stream = new MovingAverage(3);
stream.next(1);
stream.next(10);
stream.next(3);
stream.next(5);

console.log(stream.getSum());
