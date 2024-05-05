import { ShoppingCart } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import StyledBadge from "../../styledComponents/StyledBadge";
import CartModal from "./Modal/CartModal";

export default function Cart(props){
    const contence = useSelector(state => state.cart.cart);
    const [open, setOpen] = useState(false);
    return(
        <>
            <Badge
                badgeContent={Object.keys(contence).length}
                color="secondary"
                overlap="circular"
            >
                <IconButton
                    variant="outlined"
                    onClick={() => {setOpen(true)}}
                >
                    <ShoppingCart />
                </IconButton>
            </Badge>
            <CartModal
                open={open}
                onClose={() => {setOpen(false)}}
                isMobile={props.isMobile}
            >
                <></>
            </CartModal>
        </>
    )
}