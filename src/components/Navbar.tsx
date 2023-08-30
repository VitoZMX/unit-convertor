import React, {FC, useState} from 'react'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import {ReactComponent as Logo} from '../assets/image/logo.svg'
import {
    AppBar,
    Box,
    ButtonBase,
    Container,
    Icon,
    IconButton,
    Menu,
    MenuItem,
    Switch,
    Toolbar,
    Typography
} from '@mui/material'
import {NavLink} from 'react-router-dom'

const itemsNavMenu = [
    {text: 'Конвертер', link: '/convertor', icon: <AutorenewIcon/>},
    {text: 'О сервисе', link: '/about', icon: <HelpOutlineIcon/>},
]

type NavbarPropsType = {
    ThemeActive: Function
}

export const Navbar: FC<NavbarPropsType> = ({ThemeActive}) => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseMenu = () => {
        setAnchorElUser(null)
    }

    const handleChangeTheme = () => {
        ThemeActive()
    }

    return (
        <Box sx={{flexGrow: 1, marginBottom: '15px'}}>
            <AppBar position="static" style={{height: '50px'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters variant={'dense'}>
                        <Logo style={{height: '40px', width: '40px', marginRight: '10px'}}/>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            UnitConvertor
                        </Typography>
                        <Box sx={{flexGrow: 0}}>
                            <IconButton onClick={handleOpenMenu} sx={{p: 1}}>
                                <Icon style={{color: '#ffffff'}}>
                                    <MoreVertIcon/>
                                </Icon>
                            </IconButton>
                            <Menu
                                sx={{mt: '45px'}}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseMenu}
                            >
                                {itemsNavMenu.map(({text, link, icon}) => (
                                    <ButtonBase
                                        component={NavLink}
                                        to={link}
                                        style={{display: 'flex', alignItems: 'center'}}
                                        key={text}
                                    >
                                        <MenuItem style={{width: '100%'}}
                                                  onClick={handleCloseMenu}>
                                            {icon}
                                            <Typography sx={{ml: 2}}>{text}</Typography>
                                        </MenuItem>
                                    </ButtonBase>
                                ))}
                                <Typography sx={{mr: 2}}>
                                    <Switch key={'changeTheme'} onChange={handleChangeTheme}/>
                                    Тёмная тема
                                </Typography>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}