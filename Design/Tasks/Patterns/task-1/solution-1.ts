// functional solution

const data = `
    city,population,area,density,country
    Shanghai,24256800,6340,3826,China
    Delhi,16787941,1484,11313,India
    Lagos,16060303,1171,13712,Nigeria
    Istanbul,14160467,5461,2593,Turkey
    Tokyo,13513734,2191,6168,Japan
    Sao Paulo,12038175,1521,7914,Brazil
    Mexico City,8874724,1486,5974,Mexico
    London,8673713,1572,5431,United Kingdom
    New York City,8537673,784,10892,United States
    Bangkok,8280925,1569,5279,Thailand
`;

interface Cities {
    cityName: string;
    population: number;
    area: number;
    density: number;
    country: string;
}

interface CityCrowding {
    cityName: string;
    crowding: number;
}

const parseCities = (data: string) => {
    const table = [] as Cities[];
    const linesWithoutHeaders = data.trim().split('\n').slice(1);

    for (const line of linesWithoutHeaders) {
        const cells = line.trim().split(',');
        const [cityName, population, area, density, country] = cells;

        table.push({
            cityName,
            population: parseInt(population),
            area: parseInt(area),
            density: parseInt(density),
            country,
        });
    }
    return table;
};

const calculateCrowding = (cities: Cities[]): CityCrowding => {
    const maxDensity = cities[0].density;
    const crowding = {} as CityCrowding;

    for (const { cityName, density } of cities) {
        crowding[cityName] = Math.round((density * 100) / maxDensity);
    }

    return crowding;
};

const renderCitiesData = (rawCitiesData: Cities[], crowding: CityCrowding) => {
    const output = [];
    for (const { cityName, population, area, density, country } of rawCitiesData) {
        const line =
            '  ' +
            cityName.padEnd(16) +
            population.toString().padStart(10) +
            area.toString().padStart(8) +
            density.toString().padStart(8) +
            '  ' +
            country.padStart(16) +
            crowding[cityName].toString().padStart(6);
        output.push(line);
    }
    return output.join('\n');
};

const dataset = parseCities(data);
const cities = dataset.toSorted((a: number, b: number) => b.density - a.density);
const crowding = calculateCrowding(cities);
const output = renderCitiesData(cities, crowding);
console.log(output);
