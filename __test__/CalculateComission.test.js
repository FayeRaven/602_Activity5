const  calculateCommissionFunction  = require('../CalculateComission');

describe(
    'CaclulateComission: Required input conditions -  See readme for more details', () =>
    {
        test('Default test case', () => {
            const [totalSales, commission] = calculateCommissionFunction(10, 20, 30);

            expect(totalSales).toBe(1800);
            expect(commission).toBe(263.25);
        })

        //test
        
        test('Default test case', () => {
            expect(calculateCommissionFunction(35, 40, 91)).toBe('Sales quantities exceed maximum limits.');
        })

        test('Default test case', () => {
            expect(calculateCommissionFunction(35, 81, 45)).toBe('Sales quantities exceed maximum limits.');
        })

        test('Default test case', () => {
            expect(calculateCommissionFunction(71, 40, 45)).toBe('Sales quantities exceed maximum limits.');
        })

        test('Default test case', () => {
            expect(calculateCommissionFunction(71, 81, 45)).toBe('Sales quantities exceed maximum limits.');
        })

        test('Default test case', () => {
            expect(calculateCommissionFunction(35, 81, 91)).toBe('Sales quantities exceed maximum limits.');
        })

        test('Default test case', () => {
            expect(calculateCommissionFunction(71, 40, 91)).toBe('Sales quantities exceed maximum limits.');
        })

        test('Default test case', () => {
            expect(calculateCommissionFunction(71, 81, 91)).toBe('Sales quantities exceed maximum limits.');
        })
    }
);