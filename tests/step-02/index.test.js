const readCSV = require('../../src/csvReader');

test('Read CSV File', async () => {
    const data = await readCSV('./sample.csv');
    expect(data.length).toBeGreaterThan(0);
    expect(data.length).toBe(3);
    expect(data[0].name.length).toBeGreaterThan(3);
    expect(data[0].age).toBe('20'); //ignore the string type here, we will fix this later
});
