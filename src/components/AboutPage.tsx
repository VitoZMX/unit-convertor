import {Container, Grid, Typography} from '@mui/material'
import React from 'react'

export function AboutPage() {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4">UnitConvertor (КонвертерЕдиниц)</Typography>
                    <Typography variant="body1">
                        UnitConvertor - это веб-проект на React, который предоставляет удобный интерфейс для конвертации
                        различных единиц измерения размеров.
                    </Typography>
                    <Typography variant="body1">
                        С помощью UnitConvertor вы можете легко и быстро переводить размеры между различными системами
                        измерения, такими как миллиметры, сантиметры, дюймы и другие. Проект позволяет вам точно и
                        удобно работать с размерами в разных форматах, делая процесс конвертации простым и интуитивно
                        понятным.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4">Основные функции</Typography>
                    <Typography variant="body1" component="ul">
                        <li>Конвертация миллиметров в сантиметры, дюймы и другие единицы измерения.</li>
                        <li>Конвертация сантиметров в миллиметры, дюймы и другие единицы измерения.</li>
                        <li>Конвертация дюймов в миллиметры, сантиметры и другие единицы измерения.</li>
                        <li>Поддержка расширенного набора единиц измерения, таких как футы, ярды, метры и т.д.</li>
                        <li>Интерактивный и интуитивно понятный пользовательский интерфейс, который позволяет вам легко
                            вводить и конвертировать значения размеров.
                        </li>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}