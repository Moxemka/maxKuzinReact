import { Stack } from "@mui/material";
import { Header } from "../App";
import PaperMd3 from "../styledComponents/PaperMd3";
import ContactChips from "../essentials/ContactChips";
import Logo from "../TopMenue/Logo/Logo";

export default function Footer({isMobile}){


    return(
        <PaperMd3
            sx={{
                borderRadius: '15px 15px 0 0 ',
                // height: '100px'
                p: '50px'
            }}
        >
            <Stack direction={'row'} useFlexGap flexWrap={'wrap'} spacing={5} alignItems={'center'} justifyContent={'center'} sx={{height: '100%'}}>
                <Logo
                 isMobile={isMobile}
                />
                <ContactChips
                    isMobile={isMobile}
                />
            </Stack>

        </PaperMd3>
    )
}