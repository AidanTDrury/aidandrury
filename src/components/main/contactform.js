import * as React from 'react';

import ItemBox from './itembox';
import Text from './text';

import { 
    Container,
    TextField,
    Button,
    Stack
} from '@mui/material';

const ContactForm = (props) => {
    return(
        <ItemBox sx={{ bgcolor:"#3f5873", width:"70%", margin:"auto", mt:8}}>
            <Stack width="80%" margin="auto">
                <Text content="Contact Me" variant="heading"/>
                <TextField
                    sx={{mt:2, mb:2, input: { color: "white" }, label: { color: "#9cb1c9" }, bgcolor:"#364b63"}}
                    label="Name"
                    defaultValue=""
                    variant="filled"
                    fullWidth 
                />
                <TextField
                    sx={{mb:2, input: { color: "white" }, label: { color: "#9cb1c9" }, bgcolor:"#364b63"}}
                    label="Email"
                    defaultValue=""
                    variant="filled"
                    fullWidth 
                />
                <TextField
                    sx={{mb:2, label: { color: "#9cb1c9" }, bgcolor:"#364b63"}}
                    inputProps={{ style: { color: "white" } }}
                    label="Query"
                    defaultValue=""
                    variant="filled"
                    maxRows={8}
                    multiline
                />
            </Stack>
            <Button sx={{color:"white", bgcolor:"#364963", borderRadius:"4px"}}>
                <Text content="Submit" />
            </Button>
        </ItemBox>
    )
};

export default ContactForm;