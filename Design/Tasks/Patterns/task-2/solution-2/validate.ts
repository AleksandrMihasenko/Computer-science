import { Order } from './types';

const validateGroup = (limit: number) => (groupName: string, total: number): void => {
    if (total > limit) {
        throw new Error(`${groupName} total is above the limit`);
    }
};

const calculateTotal = (order: { [key: string]: Order[] }, validateGroup: (arg1: string, arg2: number) => void) => {
    const expenses = new Map();
    let total = 0;

    for (const groupName in order) {
        const goods = order[groupName];
        const amount = calculateSubtotal(goods);
        total += amount;
        validateGroup(groupName, amount);
        expenses.set(groupName, amount);
    }
    return { total, expenses };
};

const calculateSubtotal = (goods: Order[]): number => {
    let amount = 0;

    for (const item of goods) {
        if (item.price < 0) throw 'Negative price';
        amount += item.price;
    }

    return amount;
};

export {
    validateGroup,
    calculateTotal,
};