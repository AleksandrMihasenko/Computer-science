class Logger {
    private colorStrategy: ColorStrategy;

    constructor(colorStrategy: ColorStrategy) {
        this.colorStrategy = colorStrategy;
    }

    log(level: string, message: string) {
        const date = new Date().toISOString();
        const formattedMessage = `${date}\t${message}`;
        console.log(this.colorStrategy.applyColor(level, formattedMessage));
    }
}

class ColorStrategy {
    applyColor(level: string, message: string) {
        throw new Error('Method "applyColor" must be implemented');
    }
}

class ConsoleColorStrategy extends ColorStrategy {
    applyColor(level: string, message: string) {
        const colors = {
            warn: '\x1b[1;33m',
            error: '\x1b[0;31m',
            info: '\x1b[1;37m',
        };
        return `${colors[level] || ''}${message}\x1b[0m`;
    }
}

class TimerStrategy {
    public timer;

    constructor() {
        this.timer = null;
    }

    set(callback: Function, delay: number) {
        throw new Error('Method "set" must be implemented');
    }

    clear() {
        if (this.timer) clearTimeout(this.timer);
        this.timer = null;
    }
}

class IntervalTimerStrategy extends TimerStrategy {
    set(callback: Function, delay: number) {
        this.timer = setInterval(callback, delay);
    }
}

class TimeoutTimerStrategy extends TimerStrategy {
    set(callback: Function, delay: number) {
        this.timer = setTimeout(callback, delay);
    }
}

class Task extends EventTarget {
    public name: string;
    private readonly time: string | number;
    private readonly exec: Function;
    private running: boolean;
    private count: number;
    private timerStrategy: TimerStrategy;

    constructor(name: string, time: string | number, exec: Function, timerStrategy: TimerStrategy) {
        super();
        this.name = name;
        this.time = typeof time === 'number' ? Date.now() + time : new Date(time).getTime();
        this.exec = exec;
        this.running = false;
        this.count = 0;
        this.timerStrategy = timerStrategy;
    }

    get active() {
        return !!this.timerStrategy.timer;
    }

    start() {
        this.stop();
        if (this.running) return false;
        const delay = this.time - Date.now();
        if (delay < 0) return false;

        this.timerStrategy.set(() => this.run(), delay);
        return true;
    }

    stop() {
        if (!this.active || this.running) return false;
        this.timerStrategy.clear();
        return true;
    }

    run() {
        if (!this.active || this.running) return false;
        this.running = true;

        this.dispatchEvent(new Event('begin'));
        this.exec((err, res) => {
            if (err) this.dispatchEvent(new CustomEvent('error', { detail: err }));
            this.dispatchEvent(new CustomEvent('end', { detail: res }));
            this.count++;
            this.running = false;
        });

        return true;
    }
}

class Scheduler extends EventTarget {
    private tasks: Map<string, Task>;
    private logger: Logger;

    constructor(logger: Logger) {
        super();
        this.tasks = new Map();
        this.logger = logger;
    }

    createTask(name: string, time: string, exec: Function, timerType: string) {
        this.stopTask(name);
        const timerStrategy =
            timerType === 'interval' ? new IntervalTimerStrategy() : new TimeoutTimerStrategy();
        const task = new Task(name, time, exec, timerStrategy);

        task.addEventListener('begin', () => {
            this.logger.log('info', `${task.name} begin`);
        });

        task.addEventListener('error', (e) => {
            this.logger.log('error', `${task.name} error: ${e.detail.message}`);
            this.dispatchEvent(new CustomEvent('error', { detail: { error: e.detail, task } }));
        });

        task.addEventListener('end', (e) => {
            this.logger.log('warn', `${task.name} end: ${e.detail || ''}`);
        });

        task.start();
        this.tasks.set(name, task);

        return task;
    }

    stopTask(name: string) {
        const task = this.tasks.get(name);
        if (task) {
            task.stop();
            this.tasks.delete(name);
        }
    }

    stopAllTasks() {
        for (const name of this.tasks.keys()) {
            this.stopTask(name);
        }
    }
}

// Usage

const colorStrategy = new ConsoleColorStrategy();
const logger = new Logger(colorStrategy);
const scheduler = new Scheduler(logger);

scheduler.addEventListener('error', (e) => {
    console.error(`Error in task "${e.detail.task.name}": ${e.detail.error.stack}`);
});

scheduler.createTask('task1', '2024-11-01T14:00Z', (done) => {
    done(null, 'Task succeeded');
}, 'timeout');

scheduler.createTask('task2', 500, (done) => {
    done(new Error('Task failed'));
}, 'interval');
