import { Avatar, Box, Stack, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import MyAvatar from "./MyAvatar";
import { Mail, Telegram, WhatsApp } from "@mui/icons-material";
import ChipMd3 from "../styledComponents/ChipMd3";
import ContactChips from "../essentials/ContactChips";
import ToPriceButton from "../essentials/ToPrice";
export default function MeMain({isMobile}) {

    //  background: linear-gradient(120deg, red, green, blue); /* Define the linear gradient */
//   background-size: 400% 400%; /* Set the size of the background */
//   animation: moveGradient 10s linear infinite; /* Apply the animation */
  return (
    <Box sx={{ height: '95vh', minHeight: '780px', overflow: 'hidden' }}>
        <Stack alignItems={'center'} alignSelf={'center'} alignContent={'center'}  flexWrap={'wrap'} direction="row" sx={{margin: '0 auto', justifyContent: 'center', transform: isMobile ? 'translate(0, 14%)' : 'translate(0%, 40%)' }} spacing={isMobile ? 2 : 5 }>
            <MyAvatar isMobile={isMobile} sx={{width: isMobile ? '90vw' : '25vw', height: isMobile ? '90vw' : '25vw'}}/>
            <Stack spacing={1} justifySelf={'center'} alignItems={'start'}>
                <Typography  sx={(theme) => ({ fontSize: isMobile ? '23vw' : '5vw', textAlign: 'left', color: '#fff'})} variant="h1">
                    <b>Кузин Максим</b>
                </Typography>   
                <Typography sx={(theme) => ({ fontSize: isMobile ? '10vw' : '3vw', textAlign: 'left', color: '#fff'})} variant="h2">
                    Ваш разработчик
                </Typography>
                <Stack spacing={1}>
                    <ContactChips
                        isMobile={isMobile}
                    />
                    <ToPriceButton
                        isMobile={isMobile}
                        size="medium"
                        sx={{
                            width: '280px',
                            maxWidth: '90vw!important',
                            marginTop: isMobile ? '5vw' : '5vw',
                            alignSelf: 'start'
                        }}
                    />
                </Stack>
            </Stack>
        </Stack>
    </Box>
  );
}