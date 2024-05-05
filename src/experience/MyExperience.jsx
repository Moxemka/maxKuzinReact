import { Masonry } from "@mui/lab";
import ExCard from "./ExCard";
import { Box, Stack } from "@mui/material";
import dayjs from "dayjs";

export default function MyExperience({isMobile}){
    const calculateYearsAndMonths = (a) => `${Math.floor(dayjs().diff(dayjs(a), 'year')) > 0 ? Math.floor(dayjs().diff(dayjs(a), 'year')) : ''} ${Math.floor(dayjs().diff(dayjs(a), 'year')) === 0 ? `${dayjs().diff(dayjs(a), 'month')} ${(dayjs().diff(dayjs(a), 'month') % 12).toString() == 1 ? 'месяц' : (dayjs().diff(dayjs(a), 'month') % 12) > 10 ? 'месяцев' : 'месяца'}` : `${Math.floor(dayjs().diff(dayjs(a), 'year')).toString().split("").pop() == 1 ? 'год' : 'лет'} и ${dayjs().diff(dayjs(a), 'month') % 12} ${(dayjs().diff(dayjs(a), 'month') % 12).toString() == 1 ? 'месяц' : (dayjs().diff(dayjs(a), 'month') % 12) > 10 ? 'месяцев' : 'месяца'}`}`;
    // {image, imageTitle, title, text, buttonText, buttonUrl, steck}
    const experienceData = [
        {image: './tsniimash.jpg', imageTitle: 'АО ЦНИИМАШ1', title: 'Frontend разработчик в АО ЦНИИМАШ', text: `Работаю в АО ЦНИИМАШ Frontend react-js разработчиком уже ${calculateYearsAndMonths('2023-06-01')} на позиции главного Front-end разработчика. Осуществляю коммуникацию между командой backend разработчиков, руководством отдела и отделом frontend`, steck: ['React-JS','React-routing', 'react-auth-kit', 'MUI', 'material-react-table', 'svelte-gantt', 'crypto js', 'Redux toolkit', 'Развёртка приложения на nginx', 'Развёртка verdaccio', 'docker', 'gitlab', ]},
        {image: './sunduki.jpg',imageTitle: 'Сундуки', title: 'Основатель, программист в стартапе "Сундуки"', text: `Основал, программирую и поддерживаю стартап бота "Сундуки" уже ${calculateYearsAndMonths('2023-03-01')} который позволяет управлять своим хранилищем вещей. В процессе создания управлял командой из 4х человек`, steck: ['python', 'Telebot', 'Pillow', 'cv2', 'sqlite', 'Imageai', 'nltk', 'translate', 'agile/scrum'], buttonUrl: 'https://t.me/oh_my_sunduki_bot'},
        {image: './lila.jpg',imageTitle: 'Игра "Лила"', title: 'Frontend разработчик в проекте с игрой "Лила"', text: `В данный момент проект находится на поддержке и добавление функционала осуществляется по запросу заказчика`, steck: ['React-JS','react-draggable', 'MUI','Redux toolkit', ], buttonUrl: 'https://moxemka.github.io/Game/'},
        {image: './planes.jpg',imageTitle: 'Бот для классификации изображений самолётов', title: 'Бот для классификации изображений самолётов', text: `Написан проект по классификации изображений самолётов`, steck: ['tensorflow', 'telebot', 'OpenCv'], buttonUrl: 'https://github.com/Moxemka/MCPP_SSD', buttonText: 'сурс код'},
        {imageTitle: 'Фриланс', title: 'HTML-верстальщик на фрилансе ', text: `Верстал сайты c 2018 года на css/html Получил прекрасные навыки семантики, классов и псевдоклассов, позиционирования объектов и вёрстки под мобильные устройства`, steck: ['HTML', 'CSS', 'JS']},
        {image: './tkom.jpg',imageTitle: 'Территория комфорта', title: 'HTML-верстальщик Территории комфорта ', text: `Одностраничник написанный на html, в последствии внедрен слайдер на react js`, steck: ['HTML', 'CSS', 'JS', 'React-JS'], buttonUrl: 'https://t-kom62.ru/',},
        {image: './sitev1.jpg',imageTitle: 'Первая версия сайта', title: 'HTML-верстальщик сайта-визитки ', text: `Макет одностраничника-портфолио написанный на html`, steck: ['HTML', 'CSS', 'JS'], buttonUrl: 'https://moxemka.github.io/maxKuzin/',},
        {image: './git.jpg',imageTitle: 'Мой гит', title: 'Мой гит ', text: `Там живут все мои проекты, которые я написал`, buttonUrl: 'https://github.com/Moxemka',},

    ]
    return(
        <Box sx={{mt: '20px', mb: '20px'}}>
            <Stack direction={'row'} useFlexGap flexWrap={'wrap'} sx={{margin: '0 auto'}} justifyItems={'center'} alignItems={'baseline'} alignSelf={'center'} justifyContent={'center'} spacing={3}>
                {experienceData.map((item) => (
                    <ExCard
                        key={item.imageTitle}
                        {...item}
                    />
                ))}
            </Stack>
        </Box>
        // <Masonry columns={{ xs: 1, sm: Math.floor(window.innerWidth / (experienceData.length) * (140 + 5)) }} sx={{m: '0 auto'}} spacing={2}>
    )
}