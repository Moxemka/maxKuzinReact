import { Switch, Tooltip, styled } from '@mui/material';
import React, { useEffect, useState } from'react'
import applyPreferredColorScheme from '../functions/applyTheme';
import StyledSwitch from '../styledComponents/StyledSwitch';

export default function ThemeSwitch(props) {
 
    const [darkThemeSwitch, setDarkThemeSwitch] = useState(localStorage.getItem('theme') ? (localStorage.getItem('theme') === 'dark') : window.matchMedia('(prefers-color-scheme: dark)').matches);
    useEffect(() => {
        if(darkThemeSwitch){
            applyPreferredColorScheme('dark')
        } else {
            applyPreferredColorScheme('light')
        }
    }, [darkThemeSwitch])

    return (
        <Tooltip title={
            'Переключить тему'
        }>
            <StyledSwitch
                checked={darkThemeSwitch}
                {...props}
                onChange={(e) => {
                    setDarkThemeSwitch(e.target.checked)
                }}
            >
            </StyledSwitch>
        </Tooltip>
  )
}
