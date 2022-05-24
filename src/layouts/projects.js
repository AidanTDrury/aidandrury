import * as React from 'react';

import Text from '../components/main/text';
import ProjectCard from '../components/main/projectCard';

const Projects = (props) => {
    return(
        <>  
            <Text content={ props.heading } variant="heading" />
            {
                props.projects.map((project, key) => {
                    return(
                        <ProjectCard key={key} project={ project } />
                    )
                })
            }
        </>
    )
};

export default Projects;