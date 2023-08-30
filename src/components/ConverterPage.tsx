import React, {useState} from 'react'
import {Button, Container, Grid, MenuItem, TextField, Typography} from '@mui/material'
import {convertFractionToDecimalInch, convertLength} from '../utils/utils'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import CachedIcon from '@mui/icons-material/Cached'

type LengthUnit = {
    value: string
    label: string
}

const lengthUnits: LengthUnit[] = [
    {value: 'mm', label: 'миллиметры'},
    {value: 'cm', label: 'сантиметры'},
    {value: 'inch', label: 'десятичные дюймы'},
    {value: 'fractional inch', label: 'дробные дюймы'},
]

export const ConverterPage: React.FC = () => {
    const [fromUnit, setFromUnit] = useState<string>('mm')
    const [toUnit, setToUnit] = useState<string>('cm')
    const [fromValue, setFromValue] = useState<string>('')
    const [toValue, setToValue] = useState<string>('')

    const handleConvert = () => {
        if (fromUnit === 'fractional inch') {
            const frInch = convertFractionToDecimalInch(String(fromValue))
            const convertedValue = convertLength(fromUnit, toUnit, frInch)
            setToValue(convertedValue.toString())
        } else {
            const convertedValue = convertLength(fromUnit, toUnit, parseFloat(fromValue))
            setToValue(convertedValue.toString())
        }
    }

    const handleClear = () => {
        setFromValue('')
        setToValue('')
    }

    const handleFromValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value

        if (fromUnit === 'fractional inch') {
            const allowedCharsRegex = /^(?:(?!(.*\/){2})(?!(.*\s){2})[\d\s\/]+)$/
            if (allowedCharsRegex.test(inputValue) || inputValue === '') {
                setFromValue(inputValue)
            }
        } else {
            const allowedCharsRegex = /^[0-9]*\.?[0-9]*$/
            if (allowedCharsRegex.test(inputValue)) {
                setFromValue(inputValue)
            }
        }
    }

    const handleFromUnitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFromUnit(event.target.value)
    }

    const handleToUnitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToUnit(event.target.value)
    }

    return (
        <Container sx={{mb: 2}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4">Length Converter (Конвертер длины)</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Исходная единица измерения"
                        select
                        fullWidth
                        value={fromUnit}
                        onChange={handleFromUnitChange}
                    >
                        {lengthUnits.map((unit) => (
                            <MenuItem key={unit.value} value={unit.value}>
                                {unit.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Целевая единица измерения"
                        select
                        fullWidth
                        value={toUnit}
                        onChange={handleToUnitChange}
                    >
                        {lengthUnits.map((unit) => (
                            <MenuItem key={unit.value} value={unit.value}>
                                {unit.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Значение для конвертации"
                        type="text"
                        fullWidth
                        value={fromValue}
                        onChange={handleFromValueChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Результат"
                        fullWidth
                        value={toValue}
                        disabled
                    />
                </Grid>
                <Grid item>
                    <Button variant="contained" startIcon={<CachedIcon/>} color={'primary'}
                            onClick={handleConvert}>Конвертировать</Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" startIcon={<HighlightOffIcon/>} color={'secondary'}
                            onClick={handleClear}>Очистить</Button>
                </Grid>
            </Grid>
        </Container>
    )
}