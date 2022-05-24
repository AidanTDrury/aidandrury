import Text from './text';

import { 
    Container,
    Box,
    Grid,
    Stack
} from '@mui/material';

const Footer = (props) => {
    const currentYear = new Date().getFullYear();
    return(
        <Box bgcolor="rgb(20, 28, 37)" paddingTop={2} paddingBottom={12}>
            <Container maxWidth="md">
                <Grid container spacing={1}>
                    <Grid item xs={12} md={7}>
                        <Text content="Aidan Drury" variant="footerName" />
                        <Text content={"© " + currentYear + " Aidan Drury. All Rights Reserved."} variant="footerCopy" />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Text content="Contact" variant="footerName" />
                        <Stack>
                            <Text content="aidan_drury@hotmail.co.uk" variant="contactInfo" />
                            <Text content="07547901145" variant="contactInfo" />
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
};

export default Footer; 