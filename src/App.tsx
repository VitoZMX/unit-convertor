import React, {useState} from 'react'
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material'
import {AboutPage} from './components/AboutPage'
import {ConverterPage} from './components/ConverterPage'

const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#248ab8',
        },
        secondary: {
            main: '#b82462',
        },
        background: {
            default: '#e0e5ea',
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#01314b',
                },
            },
        },
    },
})

const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#248ab8',
        },
        secondary: {
            main: '#d01e68',
        },
        text: {
            primary: '#eff0ee',
        },
        background: {
            default: '#2B2B2B',
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#01314b',
                },
            },
        },
    },
})

export function App() {
    const [currentTheme, setCurrentTheme] = useState(LightTheme)

    const handleThemeChange = () => {
        setCurrentTheme(currentTheme === LightTheme ? DarkTheme : LightTheme)
    }

    return (
        <HashRouter>
            <ThemeProvider theme={currentTheme}>
                <CssBaseline/>
                <Navbar ThemeActive={handleThemeChange}/>
                <Routes>
                    <Route path="/convertor" element={<ConverterPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/*" element={<Navigate to={'/convertor'}/>}/>
                </Routes>
            </ThemeProvider>
        </HashRouter>
    )
}