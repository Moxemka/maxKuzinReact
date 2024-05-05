import { Alert, Dialog, DialogActions, DialogContent, DialogTitle, Divider, MenuItem, Modal, Stack, TextField, Typography } from '@mui/material'
import React, { useCallback, useState } from'react'
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import PaperMd3 from '../../../styledComponents/PaperMd3';
import { Autorenew, Cancel, Mail, Phone, Send, ShoppingCart, Telegram, WhatsApp } from '@mui/icons-material';
import ButtonMd3 from '../../../styledComponents/ButtonMd3';
import axios from 'axios';
import SnackBarMd3 from '../../../styledComponents/SnackBarMd3';
import { clearCart } from '../../../redux/slices/cartSlice';

export default function CartModal({open, onClose, isMobile}){
    const cartItems = useSelector(state => state.cart.cart);
    const [selectedSvyaz, setSelectedSvyaz] = useState('telegram')
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState({status: false, message: ''})
    const dispatch = useDispatch();
    const findSum = useCallback(() => {
        const items = Object.values(cartItems)?.map(value => value.basePrice)
        let sum = 0
        items.forEach(value => {
            sum += value
        })
        return `~${sum}₽`
    }, [cartItems])
    const svyaz = [
        {
            name: 'telegram',
            icon: <Telegram sx={{color: 'primary.main'}}/>,
            color: 'primary.main',
            type: 'text'
        },
        {
            name: 'whatsapp',
            icon: <WhatsApp sx={{color: 'success.main'}}/>,
            color: 'success.main',
            type: 'text'

        },
        {
            name: 'email',
            icon: <Mail sx={{color: 'secondary.main'}}/>,
            color: 'secondary.main',
            type: 'mail'

        },
        {
            name: 'телефон',
            icon: <Phone sx={{color: 'secondary.main'}}/>,
            color: 'secondary.main',
            type: 'phone'

        },
    ]
    return(
        <>
            <Dialog 
                open={open}
                onClose={onClose}
                fullScreen={isMobile}
                PaperProps={{
                    component: 'form',
                    sx: {borderRadius: '15px'},
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = {...Object.fromEntries(formData.entries()), cartItems: Object.values(cartItems)};
                        // const formJson = JSON.stringify({...Object.fromEntries(formData.entries()), cartItems: Object.values(cartItems)});
                        // const email = formJson.email;
                        setIsLoading(true)
                        axios.post('http://185.68.22.109:8000/', formJson).then(response => {
                            setIsLoading(false)
                            setIsSuccess(true)
                            console.log(response);
                            setSelectedSvyaz('telegram')
                            dispatch(clearCart())
                            onClose()
                        }).catch(error => {
                            setIsError({status: true, message: error.response.data.message})
                            setIsLoading(false)
                            setIsSuccess(false)
                        })
                        console.log(formJson);


                        },
                    }}
            >
                    <DialogTitle>
                        <Stack direction={'row'} spacing={2}>
                            <ShoppingCart
                                sx={{ fontSize: 40, pt: '7px' }}
                            />
                            <Typography variant="h3">
                                Корзина
                            </Typography>
                        </Stack>
                        <Typography color={'text.secondary'}>
                            *после заказа с вами свяжутся для уточнения деталей
                        </Typography>
                    </DialogTitle>
                    <Divider/>
                    <DialogContent>
                    <Stack spacing={3} sx={{minWidth: '100px', maxWidth: '100vw'}}>
                        <TextField
                            label={'Ваше имя'}
                            required
                            id="name"
                            name="name"
                        />
                        <TextField
                            label={'Желаемый способ связи'}
                            required
                            
                            id="sv"
                            name="sv"
                            select
                            defaultValue="telegram"
                            onChange={(e) => {setSelectedSvyaz(e.target.value)}}
                        >
                            {svyaz.map((option) => (
                                <MenuItem key={option.name} value={option.name}>
                                    <Stack direction={'row'} spacing={2}>
                                            {option.icon}
                                        <Typography sx={{color: option.color}}>
                                            {option.name}
                                        </Typography>
                                    </Stack>
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                        
                            id="phone"
                            name="phone"
                            type={svyaz.find(option => option.name === selectedSvyaz).type}
                            label={`Введите ${selectedSvyaz}`}

                            required
                        />
                        <Divider/>
                        <Typography variant="h3">
                            Заказ <Typography color='text.secondary'>{findSum()}</Typography>
                        </Typography>
                        <Stack direction={'row'} spacing={{xs: 1, md: 2}} useFlexGap flexWrap={'wrap'}>                    
                            {
                                Object.entries(cartItems).length > 0 ? Object.entries(cartItems).map(([id, item]) => (
                                    <CartItem
                                        key={id}
                                        {...item}
                                    />
                                )) : <Typography>
                                    💨 пусто 💨
                                </Typography>
                            }
                        </Stack>
                        <Divider/>
                        <TextField
                            id="add"
                            name="add"
                            label={`Примечание`}
                            multiline
                        />
                    </Stack>
                    </DialogContent>
                    <DialogActions
                        sx={{
                            display: 'flex',
                            justifyContent: isMobile ? 'center' : 'end',
                            // width: '100%',
                            // padding: '10px 20px'
                        }}
                    >
                        <ButtonMd3 color='error' size={isMobile ? 'large' : 'medium'} sx={{width: isMobile ? '50%' : ''}}  onClick={() => {setSelectedSvyaz('telegram'); onClose()}} variant={'outlined'}><Cancel/></ButtonMd3>
                        <ButtonMd3 disabled={isLoading} color='success'  size={isMobile ? 'large' : 'medium'} sx={{width: isMobile ? '50%' : ''}} variant={'outlined'} type="submit">{isLoading ? <Autorenew className='Spin'/> : <Send/>}</ButtonMd3>
                    </DialogActions>
            </Dialog>
            <SnackBarMd3 
                open={isSuccess}
                onClose={() => {setIsSuccess(false)}}
                autoHideDuration={5000}
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            >
                <Alert severity={'success'}>
                    {'Спасибо за заказ'}
                </Alert>
            </SnackBarMd3>
            <SnackBarMd3 
                open={isError.status}
                onClose={() => {setIsError({status: false, message: ''})}}
                autoHideDuration={5000}
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            >
                <Alert severity={'error'}>
                    {`Что-то пошло не так, ${isError.message}`}
                </Alert>
            </SnackBarMd3>
        </>
    )
}