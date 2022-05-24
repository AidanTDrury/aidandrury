import Text from './text';

import {
    Box,
    Stack,
    Button,
    Divider
} from '@mui/material';

const ProjectCard = (props) => {
    return (
        <Box marginBottom={4}>
            <Stack direction="row" spacing={2}>
                <Box width={400}>
                    <Text content={props.project.name} variant="projectName" />
                    <Text content={props.project.date} variant="projectDate" />
                </Box>
                <Box>
                    <Text content={props.project.description} variant="projectDescription" />
                    <Text alignItems="center" content={props.project.technologies} variant="projectTechnologies" />
                </Box>
            </Stack>
            <Divider sx={{bgcolor: "white", height:2, borderRadius:12, mt:1}} />
        </Box>
    );
};

const a = () =>{
    return(
        <Box marginTop={2} textAlign="center">
            <Button sx={{color:"white", bgcolor:"#364963", borderRadius:"8px"}}>
                View Project
            </Button>
        </Box>
    )
}

export default ProjectCard;