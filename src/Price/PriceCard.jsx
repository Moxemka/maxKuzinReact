import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Stack, Tooltip, Typography } from "@mui/material";
import ButtonMd3 from "../styledComponents/ButtonMd3";
import ChipMd3 from "../styledComponents/ChipMd3";
import { AddShoppingCart, ExpandMore, RemoveShoppingCart } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCartById } from "../redux/slices/cartSlice";
/**
 * Renders a card component with an image and no additional content.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isMobile - Indicates whether the component is being rendered on a mobile device.
 * @param {string} props.image - The URL of the image to display in the card.
 * @param {string} props.imageTitle - The title of the image.
 * @param {string} props.text - The text to display in the card.
 * @param {string} props.buttonText - The text to display on the button.
 * @param {string} props.buttonUrl - The URL to navigate to when the button is clicked.
 * @returns {JSX.Element} - The rendered card component.
 */
export default function PriceCard({image, title, id, text, basePrice}){
    const contence = useSelector(state => state.cart.cart);
    const [inCart, setInCart] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {  
        console.log(contence);
        // contence.find((item) => item.id === id) ? setInCart(true) : setInCart(false);
    }, [contence])
    return(
        <Card
            sx={{width: 345, borderRadius: '15px'}}
        >
            <CardMedia
                sx={{ height: 180 }}
                image={image ? image : '/freelance.jpg'}
            />
            <CardContent >
                <Box sx={{
                height: '150px'
                }}>

                
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" textAlign={'left'} gutterBottom color="text.secondary">
                    {text}
                </Typography>
                </Box>
                <CardActions >
                    <Tooltip title={Boolean(contence[id]) ? "Удалить из корзины" : "Добавить в корзину"}>
                        <ButtonMd3
                            variant="outlined"
                            size="medium"
                            color={Boolean(contence[id]) ? "error" : "secondary"}
                            startIcon={Boolean(contence[id]) ? <RemoveShoppingCart/> : <AddShoppingCart/>}
                            onClick={() => {Boolean(contence[id]) ? dispatch(removeFromCartById(id)) : dispatch(addToCart({
                                id: id,
                                title: title,
                                basePrice: basePrice,
                                text: text
                            }))}}
                        >
                            {`От ${basePrice}₽`}
                        </ButtonMd3>
                    </Tooltip>
                </CardActions>   
            </CardContent>
        </Card>
    )
}