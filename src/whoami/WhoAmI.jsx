import { Box, Button, Stack, Typography } from "@mui/material";
import MyAvatar from "../me/MyAvatar";
import { Height } from "@mui/icons-material";
import ButtonMd3 from "../styledComponents/ButtonMd3";
import ToPriceButton from "../essentials/ToPrice";

export default function WhoAmI({isMobile}) {
    
    
    return (
        <Stack sx={{m: isMobile ? '1rem' : '2rem'}} spacing={2} >
            <Stack direction={isMobile ? 'column' : "row"} spacing={3} alignItems={!isMobile ? 'center' : undefined}>
                <MyAvatar
                    isMobile={isMobile}
                    variant='rounded'
                    image={'/mealt.jpg'}
                    sx={{
                        width: isMobile ? '90vw' : 600,
                        height: isMobile ? '90vw' : 600
                    }}
                />
                <Stack spacing={3} >
                    <Typography variant="p" sx={(theme) => ({fontSize: isMobile ? '1.5rem' : '3rem', textAlign: 'left', color: 'text.secondary', '& b': {color: 'secondary.main'}})}>
                        Я Кузин Максим, разработчик из Москвы.<br/> Занимаюсь веб-разработкой уже более <b>3х лет</b> и разработкой на python более <b>2х лет</b>.<br/>
                        Также увлекаюсь вэб дизайном и UI/UX.<br/>
                        Создание сайтов и приложений - моя страсть. Я люблю решать сложные задачи и видеть радость клиентов при сдаче проекта. 
                    </Typography>
                    <ToPriceButton
                        isMobile={isMobile}
                    />
                </Stack>
            </Stack>
        </Stack>
    )
}