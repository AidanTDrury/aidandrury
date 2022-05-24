import Text from '../components/main/text';

const About = (props) => {
    return(
        <>  
            <Text content={ props.heading } variant="heading" />
            <Text content={ props.interests } variant="paragraph" />
        </>
    )
};

export default About;