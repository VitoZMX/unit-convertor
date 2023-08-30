import {convertDecimalToFractionInch, convertFractionToDecimalInch, convertLength} from './utils'

describe('convertLength mm', () => {
    it('converts mm to cm', () => {
        const result = convertLength('mm', 'cm', 673)
        expect(result).toBe(67.3)
    })

    it('converts mm to inch', () => {
        const result = convertLength('mm', 'inch', 1270)
        expect(result).toBe(50)
    })

    it('converts mm to fractional inch', () => {
        const result = convertLength('mm', 'fractional inch', 25.7969)
        expect(result).toBe('1 1/64')
    })

    it('converts mm to mm', () => {
        const result = convertLength('mm', 'mm', 777)
        expect(result).toBe(777)
    })
})

describe('convertLength cm', () => {
    it('converts cm to mm', () => {
        const result = convertLength('cm', 'mm', 1253.8)
        expect(result).toBe(12538)
    })

    it('converts cm to inch', () => {
        const result = convertLength('cm', 'inch', 104)
        expect(result).toBeCloseTo(40.9449)
    })

    it('converts cm to fractional inch', () => {
        const result = convertLength('cm', 'fractional inch', 5.1196)
        expect(result).toBe('2 1/64')
    })

    it('converts cm to cm', () => {
        const result = convertLength('cm', 'cm', 7878)
        expect(result).toBe(7878)
    })
})

describe('convertLength inch', () => {
    it('converts inch to cm', () => {
        const result = convertLength('inch', 'cm', 14)
        expect(result).toBeCloseTo(35.56)
    })

    it('converts inch to mm', () => {
        const result = convertLength('inch', 'mm', 1270)
        expect(result).toBeCloseTo(32258)
    })

    it('converts inch to fractional inch', () => {
        const result = convertLength('inch', 'fractional inch', 0.3750)
        expect(result).toBe('3/8')
    })

    it('converts inch to inch', () => {
        const result = convertLength('inch', 'inch', 15)
        expect(result).toBe(15)
    })
})

describe('convertLength other tests', () => {
    it('converts', () => {
        const result = convertLength('cm', 'inch', NaN)
        expect(result).toBe(0)
    })
})

describe('convertFractionToDecimalInch tests', () => {
    it('converts 1 1/64', () => {
        const result = convertFractionToDecimalInch('1 1/64')
        expect(result).toBe(1.0156)
    })

    it('converts 2 13/64', () => {
        const result = convertFractionToDecimalInch('2 13/64')
        expect(result).toBe(2.2031)
    })

    it('converts 3 2 17/64', () => {
        const result = convertFractionToDecimalInch('2 17/64')
        expect(result).toBe(2.2656)
    })
})

describe('convertDecimalToFractionInch tests', () => {
    it('converts 1', () => {
        const result = convertDecimalToFractionInch(1.3750)
        expect(result).toBe('1 3/8')
    })

    it('converts 2', () => {
        const result = convertDecimalToFractionInch(2.1406)
        expect(result).toBe('2 9/64')
    })
    it('converts 3', () => {
        const result = convertDecimalToFractionInch(0.25)
        expect(result).toBe('1/4')
    })
})

describe('convertLength other tests', () => {
    it('converts', () => {
        const result = convertLength('cm', 'inch', NaN)
        expect(result).toBe(0)
    })
})