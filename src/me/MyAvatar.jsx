import { Avatar } from "@mui/material";
export default function MyAvatar({image, isMobile, sx, variant}){
    return(
        <Avatar
                src={image ? image : './me_round_edges.png'}
                variant={variant ? variant : "circular"}
                alt="me"
                sx={{ ...sx, textAlign: 'center', margin: '0 auto', transition: '.2s ease-in-out'}}
            />
    )
}