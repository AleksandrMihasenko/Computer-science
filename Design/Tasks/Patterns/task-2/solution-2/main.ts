import { validateGroup, calculateTotal } from './validate';
import { Exchange } from './expenses';

const MAX_GROUP_TOTAL = 2000;

const MOCKED_API_FOR_EXAMPLE = {
    host: 'example.com',
    path: '/api/latest.json?id=',
    key: 'exampleofkey',
}

const basket = {
    Devices: [
        { name: 'Laptop', price: 1500 },
        { name: 'Mouse', price: 100 },
        { name: 'Keyboard', price: 100 },
    ],
    Textile: [
        { name: 'Bag', price: 50 },
    ]
}

const main = async () => {
    try {
        const validatedGroup = validateGroup(MAX_GROUP_TOTAL);
        const bill = calculateTotal(basket, validatedGroup);
        const openedExchange = await new Exchange(MOCKED_API_FOR_EXAMPLE);
        const amount = openedExchange.convert(bill.total, 'USD');
        console.log({ amount })
    } catch (error) {
        console.log(error);
    }
}

main();
