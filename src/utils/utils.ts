export function convertLength(fromUnit: string, toUnit: string, value: number): number | string {
    let result: number

    if (!value) {
        return 0
    }

    if (fromUnit === 'mm') {
        if (toUnit === 'cm') {
            result = value / 10
        } else if (toUnit === 'inch') {
            result = value / 25.4
        } else if (toUnit === 'fractional inch') {
            result = value / 25.4
            return convertDecimalToFractionInch(result)
        } else {
            result = value
        }
    } else if (fromUnit === 'cm') {
        if (toUnit === 'mm') {
            result = value * 10
        } else if (toUnit === 'inch') {
            result = value / 2.54
        } else if (toUnit === 'fractional inch') {
            result = value / 2.54
            return convertDecimalToFractionInch(result)
        } else {
            result = value
        }
    } else if (fromUnit === 'inch' || fromUnit === 'fractional inch') {
        if (fromUnit === 'fractional inch') {
            value = convertFractionToDecimalInch(String(value))
        }

        if (toUnit === 'cm') {
            result = value * 2.54
        } else if (toUnit === 'mm') {
            result = value * 25.4
        } else if (toUnit === 'fractional inch') {
            return convertDecimalToFractionInch(value)
        } else {
            result = value
        }
    } else {
        result = value
    }

    return parseFloat(result.toFixed(4))
}

export function convertFractionToDecimalInch(fraction: string): number {
    const parts = fraction.split(' ')

    if (parts.length === 1) {
        return parseFloat(parts[0])
    } else if (parts.length === 2) {
        const wholeNumber = parseFloat(parts[0])
        const fractionParts = parts[1].split('/')
        const numerator = parseFloat(fractionParts[0])
        const denominator = parseFloat(fractionParts[1])
        const decimal = wholeNumber + (numerator / denominator)
        return parseFloat(decimal.toFixed(4))
    } else {
        throw new Error('Неверный формат дробного числа')
    }
}

export function convertDecimalToFractionInch(decimal: number): string {
    const wholeNumber = Math.floor(decimal)
    const fractionDecimal = decimal - wholeNumber

    const maxDenominator = 64

    let bestNumerator = 1
    let bestDenominator = 1
    let bestDifference = Math.abs(fractionDecimal - (bestNumerator / bestDenominator))

    for (let denominator = 2; denominator <= maxDenominator; denominator++) {
        const numerator = Math.round(fractionDecimal * denominator)
        const difference = Math.abs(fractionDecimal - (numerator / denominator))

        if (difference < bestDifference) {
            bestNumerator = numerator
            bestDenominator = denominator
            bestDifference = difference
        }
    }

    let fraction = ''

    if (bestNumerator !== 0 || wholeNumber !== 0) {
        fraction = `${bestNumerator}/${bestDenominator}`

        if (wholeNumber !== 0) {
            fraction = `${wholeNumber} ${fraction}`
        }
    }

    return fraction
}