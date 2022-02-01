import { MdEmail } from 'react-icons/md';
import { GoMarkGithub } from 'react-icons/go';
import { FaPhoneAlt, FaDiscord } from 'react-icons/fa';
import { Grid, Spacer, Text } from "@nextui-org/react"

function Contact(){
    return(
        <Grid.Container alignItems="center" direction="column" style={{minHeight: '40vh', backgroundColor: '#181818'}}>
        <Spacer y={2}/>
        <Text color="#4f4e4d" h1>Contact Info:</Text>
        <Grid direction="row" lg={6} alignItems='center' justify='center'>
        <Text color="#4f4e4d" h2><a href="mailto:dandervich@hotmail.com"><MdEmail /></a></Text>
        <Spacer x={1}/>
        <Text color="#4f4e4d" h2><a href="tel:+5491170088477"><FaPhoneAlt /></a></Text>
        <Spacer x={1}/>
        <Text color="#4f4e4d" h2><a href="https://discord.com/users/eldervo77#2315" target="_blank" rel='noreferrer'><FaDiscord /></a></Text>
        <Spacer x={1}/>
        <Text color="#4f4e4d" h2><a href="https://github.com/dan-dervich" target="_blank" rel='noreferrer'><GoMarkGithub /></a></Text>
        </Grid>
        </Grid.Container>
    )
}
export default Contact