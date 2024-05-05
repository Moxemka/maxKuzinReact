import { FormControlLabel, Stack, Switch } from "@mui/material";
import SwitchMd3 from "../styledComponents/SwitchMd3";
import { useEffect, useState } from "react";
import ChipMd3 from "../styledComponents/ChipMd3";

export default function Chooser(props) {
    const [checkedFast, setCheckedFast] = useState(false);
    const [checkedCheap, setCheckedCheap] = useState( false);
    const [checkedRely, setCheckedRely] = useState( false);
    const [text, setText] = useState('');

    useEffect(() => {
        if (checkedFast && checkedRely && checkedCheap){
            setText("такое бывает?");
        }
        else if (checkedCheap && checkedRely){
            setText("долго");
        }
        else if (checkedFast && checkedRely){
            setText("дорого");
        }
        else if (checkedFast && checkedCheap){
            setText("криво");
        }else{
            if (checkedFast){
                setText("быстро");
            }
            else if (checkedCheap){
                setText("дёшево");
            }
            else if (checkedRely){
                setText("качественно");
            } else{
                setText("?");
            };
        };
    }, [checkedFast, checkedCheap, checkedRely])

    return(
        <Stack direction={'row'} spacing={2} justifyContent={'center'}  alignItems={'center'}    >
            <Stack direction={'column'} spacing={2}>
                <FormControlLabel
                    control={<SwitchMd3 checked={checkedFast} />}
                    label="Быстро"
                    labelPlacement="start"
                    sx={{fontWeight: 'bold', fontSize: '1.2rem'}}
                    onChange={(event) => setCheckedFast(event.target.checked)}
                />
                <FormControlLabel
                    control={<SwitchMd3  checked={checkedCheap}/>}
                    label="Дёшево"
                    labelPlacement="start"
                    sx={{fontWeight: 'bold', fontSize: '1.2rem'}}
                    onChange={(event) => setCheckedCheap(event.target.checked)}
                />
                <FormControlLabel
                    control={<SwitchMd3 checked={checkedRely} />}
                    label="Качественно"
                    labelPlacement="start"
                    sx={{fontWeight: 'bold', fontSize: '1.2rem'}}
                    onChange={(event) => setCheckedRely(event.target.checked)}
                />
            </Stack>
            <ChipMd3
                label={text}
                color="secondary"
                variant="outlined"
                sx={{
                    width: '120px'
                }}
            />
        </Stack>
    )
}