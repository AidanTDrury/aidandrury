import Text from './text';

const techStack = (list) => {
    return(
        list.map((item, key) =>
            <Text key={key} content={ item[0] } variant="skills" />
        )
    )
};

export default techStack;