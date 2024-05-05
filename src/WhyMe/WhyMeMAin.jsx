import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import PaperMd3 from "../styledComponents/PaperMd3";
import Chooser from "./Chooser";

export default function WhyMeMain({isMobile}) {

    return(
        <Box sx={{textAlign:'left', maxWidth: '95vw', margin: '0 auto'}}>
            
            <Stack
                direction={'row'}
                spacing={2}
            >
                <PaperMd3
                    sx={{
                        background: 'url(./freelance.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',    
                        width: '200px'
                    }}
                />
                <Typography variant="p" sx={(theme) => ({fontSize: isMobile ? '1.5rem' : '3rem', color: 'text.secondary', '& b': {color: 'secondary.main'}})}>
                    Для меня программирование - это не просто хобби, а профессия, в которой я стремлюсь к постоянному развитию<br/><br/>
                    Обучаюсь в МАИ по специальности "Системный анализ и управление" на 3 курсе<br/><br/>
                    Прошел курс повышения квалификации "интелектуальные технические системы" и на защите проектов занял 2е место<br/><br/>
                    Я убеждён, что нет ничего невозможного. Вместе с заказчиками мы всегда приходим к идеальному решению <br/> 
                </Typography>
            </Stack>
            {/* <Divider sx={{mt: '20px', mb: '20px'}} variant="middle"/> */}
            
        </Box>
    )
}