import { Accordion, AccordionDetails, AccordionSummary, Card, CardActionArea, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import ButtonMd3 from "../styledComponents/ButtonMd3";
import ChipMd3 from "../styledComponents/ChipMd3";
import { ExpandMore } from "@mui/icons-material";
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
export default function ExCard({image, imageTitle, title, text, buttonText, buttonUrl, steck}){

    return(
        <Card
            sx={{maxWidth: 345, borderRadius: '15px'}}
        >
            <CardMedia
                sx={{ height: 180 }}
                image={image ? image : '/freelance.jpg'}
                title={imageTitle}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" textAlign={'left'} gutterBottom color="text.secondary">
                    {text}
                </Typography>
                {steck && 
                    <Accordion sx={{maxWidth: 345, borderRadius: '12px', boxShadow: 0}}>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography>стек</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack spacing={1} direction={'row'} useFlexGap flexWrap={'wrap'} sx={{maxWidth: 345}}>
                                {steck.map((item) => (
                                    <ChipMd3
                                        key={item}
                                        label={item}
                                        color="secondary"
                                    />
                                ))}
                            </Stack>
                        </AccordionDetails>
                    </Accordion>
                }
                {buttonUrl && <CardActions>
                    <ButtonMd3
                        variant="outlined"
                        size="medium"
                        color="secondary"
                        onClick={() => {window.open(buttonUrl)}}
                    >
                        {buttonText ? buttonText : 'посмотреть'}
                    </ButtonMd3>
                </CardActions>}   
            </CardContent>
        </Card>
    )
}