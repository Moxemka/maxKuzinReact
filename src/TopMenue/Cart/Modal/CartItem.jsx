import { useDispatch } from "react-redux";
import ChipMd3 from "../../../styledComponents/ChipMd3";
import { removeFromCartById } from "../../../redux/slices/cartSlice";
import { Divider, Stack, Typography } from "@mui/material";

export default function CartItem({id, title, text, basePrice, ...props}){
    const dispatch = useDispatch();
    return(
        <ChipMd3
            label={title}
            icon={
            <Stack direction={'row'}>
                <Typography sx={{fontSize: '.8rem'}}>
                    ~{basePrice}₽
                </Typography>
                <Divider
                    
                />
            </Stack>
            
        }
            color="secondary"
            onDelete={() => {dispatch(removeFromCartById(id))}}
        />
    )
}