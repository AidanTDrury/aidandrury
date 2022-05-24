import Text from '../components/main/text';
import techStack from '../components/main/techStack';

import {
    Stack,
} from '@mui/material';

const Skills = ( props ) => {
    return(
        <>
            <Text content={ props.heading } variant="heading" />
                <Stack direction="row" spacing={1}>
                    <Text content="Languages" variant="title" />
                    { techStack(props.languages) }
                </Stack>

                <Stack direction="row" spacing={1}>
                    <Text content="Frameworks" variant="title" />
                    { techStack(props.frameworks) }
                </Stack>
                
                <Stack direction="row" spacing={1}>
                    <Text content="Libraries" variant="title" />
                    { techStack(props.libraries) }
                </Stack>

                <Stack direction="row" spacing={1}>
                    <Text content="Data Analytics" variant="title" />
                    { techStack(props.dataAnalytics) }
                </Stack>

                <Stack direction="row" spacing={1}>
                    <Text content="Databases" variant="title" />
                    { techStack(props.databases) }
                </Stack>
        </>
    )
};

export default Skills; 