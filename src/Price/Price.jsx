import { Box, Stack } from "@mui/material"
import PriceCard from "./PriceCard"

export default function Price({isMobile}){

// title, text, additional => {id: 123, label: 'lall', {213 (id): {label: 'sds' chosen: false}}}
    const priceData = [
        {
            id: 1,
            title: 'Написание сайта',
            basePrice: 30000,
            text: 'Создание адаптивного сайта на React. Форма обратной связи добавляется отдельно, есть возможность подключить telegram бота',
            image: './react.jpg'
        
        },
        {
            id: 2,
            title: 'поддержка сайта',
            basePrice: 1000,
            text: 'Поддержка и обновление сайта в течение 1 месяца',
            image: './reactWithHand.jpg'

        },
        {
            id: 3,
            title: 'Дизайн сайта',
            basePrice: 30000,
            text: 'Создание дизайна для сайта',
            image: './design.jpg'
        },
        {
            id: 4,
            title: 'Бот telegram',
            basePrice: 1000,
            text: 'Создание синхронного telegram бота',
            image: './telegram.jpg'
        },
        {
            id: 5,
            title: 'поддержка бота',
            basePrice: 500,
            text: 'Поддержка и обновление бота в течение 1 месяца',
            image: './telegramWithHand.jpg'
            
        },
        {
            id: 6,
            title: 'Консольная программа на python',
            basePrice: 500,
            text: 'Написание простой программы на python для школьников или студентов',
            image: './console.jpg'
        },
        {
            id: 7,
            title: 'Пригласить на собеседовние',
            basePrice: 0,
            text: 'Пригласить меня на собеседование.',
            image: './chat.jpg'
        },
    ]
    return(
        <Box sx={{mt: '20px', mb: '20px'}}>
            <Stack direction={'row'} useFlexGap flexWrap={'wrap'} sx={{margin: '0 auto'}} justifyItems={'center'} alignItems={'strech'} alignSelf={'center'} justifyContent={'center'} spacing={3}>
                {priceData.map((item) => (
                    <PriceCard
                        key={item.title}
                        {...item}
                    />
                ))}
            </Stack>
        </Box>
    )
}