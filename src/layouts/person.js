import Text from '../components/main/text';
import ItemBox from '../components/main/itembox';

import { 
    Box,
    Stack,
    Avatar
  } from '@mui/material';

const Person = (props) => {
    return(
        <>  
            <Box mb={8} mt={4}>
              <Stack mb={4} direction="row">
                <Avatar alt="Aidan Drury" sx={{ height: 100, width: 100, border:"3px white"}} variant="rounde" src={require("../Me_Proffesional.jpg")} />
                <Box>
                  <Text content={ props.name } variant="name" />
                  <Text content={ props.role } variant="role" />
                </Box>
              </Stack>
              <ItemBox >
                  <Text content={ props.message } variant="message" />
              </ItemBox>
          </Box>
        </>
    )
};

export default Person;