import { useTheme } from "@mui/material";
import navigateToBlockById from "../functions/navigateToBlockById";
import ButtonMd3 from "../styledComponents/ButtonMd3";

export default function ToPriceButton({isMobile, sx, ...props}){
    const theme = useTheme();
    
    return(
        <ButtonMd3
            variant={theme.palette.mode === 'dark' ? "outlined" : 'contained'}
            size="large"
            color="secondary"
            textAlign="center"
            onClick={() => {
                navigateToBlockById('Price')
            }}
            sx={{
                margin: '0 auto',
                alignSelf: isMobile && 'center',
                boxShadow: 'none',
                ...sx
            }}
            {...props}
        >
            К ценам
        </ButtonMd3>
    )
}