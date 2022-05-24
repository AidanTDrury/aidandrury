import Text from '../components/main/text';

const Bio = (props) => {
    return(
        <>  
            <Text content={ props.heading } variant="heading" />
            <Text content={ props.content } variant="paragraph" />
        </>
    )
};

export default Bio;