// import { AppBar, Avatar, Box, IconButton, Link, Stack, Toolbar, Typography } from "@mui/material";
import MyAvatar from "../me/MyAvatar";
import { BugReportRounded, Padding, Shop, ShoppingCart } from "@mui/icons-material";
import ThemeSwitch from "./themeSwitch";



import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Stack } from "@mui/material";
import Cart from "./Cart/Cart";
import navigateToBlockById from "../functions/navigateToBlockById";
import Logo from "./Logo/Logo";


export default function TopMenue({isMobile}) {
    const pages = [{name: 'Главная', id: 'main'}, {name: 'Кто я?', id: 'whoami'}, {name: 'Портфолио', id: 'portf'}, {name: 'Почему я?', id: 'WhyMe'}, {name: 'Цены', id: 'Price'}];
    
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (e) => {
        navigateToBlockById(e.target.value)
        setAnchorElNav(null);
    };






    return (
        <AppBar position="fixed" sx={(theme) => ({
            color:  theme.palette.mode === 'dark'?  'rgba(255, 255, 255, 1)' : 'rgba(45, 45, 45, 1)',
            backgroundColor:  theme.palette.mode === 'dark'? 'rgba(45, 45, 45, 0.4)' : 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(10px)'
        })}>
            <Toolbar>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
                <MenuIcon />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                >
                {pages.map((page) => (
                    <MenuItem value={page.id} key={page.name} onClick={() => {handleCloseNavMenu({target: {value: page.id}})}}>
                        <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
                <Logo
                    isMobile={isMobile}
                />
                {/* </Box> */}

            
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                <Button
                    key={page.name}
                    value={page.id}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'inherit', display: 'block', pt: '8px' }}
                >
                    {page.name}
                </Button>
                ))}
            </Box>

            <Stack direction={'row'}  sx={{ flexGrow: 0 }}>
                <ThemeSwitch
                    sx={{
                        marginTop: '2px'
                    }}
                />
                <Cart
                    isMobile={isMobile}
                />
            </Stack >
            </Toolbar>


        </AppBar>
    )
}