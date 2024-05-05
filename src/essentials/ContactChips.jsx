import { Stack, Tooltip, useTheme } from "@mui/material"
import ChipMd3 from "../styledComponents/ChipMd3"
import { Mail, Telegram, WhatsApp } from "@mui/icons-material"

export default function ContactChips({isMobile}){
    const theme = useTheme();
    return(
        <Stack direction={'row'} spacing={1} >
        <Tooltip title={'@MakasIsLove'}>
            <ChipMd3
                variant={ theme.palette.mode === 'dark' ? "outlined" : 'filled'}
                // avatar={<Avatar variant="square"  sx={{bgcolor: '#fff'}}></Avatar>}
                label="Telegram"
                icon={<Telegram fontSize="small" sx={{color: '#fff'}}/>}
                onClick={() => window.open("https://t.me/MakasIsLove")}
                // variant="outlined"
                // sx={{borderRadius: '5px'}}
                color="primary"
            />
        </Tooltip>
        <Tooltip title={'+7(926) 492-27-54'}>
            <ChipMd3
                variant={ theme.palette.mode === 'dark' ? "outlined" : 'filled'}
                // avatar={<Avatar variant="square"  sx={{bgcolor: '#fff'}}></Avatar>}
                label="WhatsApp"
                icon={<WhatsApp fontSize="small" sx={{color: '#fff'}}/>}
                onClick={() => {window.open("https://wa.me/79264922754")}}
                // variant="outlined"
                color="success"
            />
        </Tooltip>
        <Tooltip title={'smektamp+work@gmail.com'}>
            <ChipMd3
                variant={ theme.palette.mode === 'dark' ? "outlined" : 'filled'}
                // avatar={<Avatar variant="square"  sx={{bgcolor: '#fff'}}></Avatar>}
                label="Mail"
                icon={<Mail fontSize="small" sx={{color: '#fff'}}/>}
                onClick={() => window.open("mailto:smektamp+work@gmail.com")}
                // variant="outlined"
                color="secondary"
            />
        </Tooltip>
    </Stack>
    )
}