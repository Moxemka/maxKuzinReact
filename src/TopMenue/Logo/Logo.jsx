import { Box, Stack, Typography } from "@mui/material"
import navigateToBlockById from "../../functions/navigateToBlockById"
import MyAvatar from "../../me/MyAvatar"

export default function Logo({isMobile}) {
    return(
        <Box
            sx={{
                cursor: 'pointer',
            }}
        >
            <Stack direction="row" alignItems="center"  spacing={2} onClick={() => {navigateToBlockById('main')}}>
                <MyAvatar isMobile={isMobile} />
                <Typography variant="h6"
                            sx={{
                                mr: 2,
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}>
                        max.kuz
                </Typography>
            </Stack>
        </Box>
    )
}