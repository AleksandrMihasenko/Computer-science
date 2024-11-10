class Exchange {
    #cache = {};
    #init = null;

    constructor({ host, path, key }) {
        return this.#init(`https://${host}/${path}${key}`);
    }

    async #init(url: string) {
        const res = await fetch(url);
        const result = await res.json();

        if (result.error) throw new Error(result.description);

        this.#cache = result.rates;
        return this;
    }

    getRate(currency: string) {
        return this.#cache[currency];
    }

    convert(value: number, to: string, from: string = 'USD') {
        const toRate = this.getRate(to);
        const fromRate = this.getRate(from);
        return (value / fromRate) * toRate;
    }
}

export { Exchange };