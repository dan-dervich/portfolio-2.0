import { MdEmail } from 'react-icons/md';
import { GoMarkGithub } from 'react-icons/go';
import { FaPhoneAlt, FaDiscord } from 'react-icons/fa';
import { Grid, Spacer, Text } from "@nextui-org/react"

function Contact(){
    return(
        <Grid.Container id="contact" alignItems="center" direction="column" style={{minHeight: '40vh', backgroundColor: '#181818'}}>
        <Spacer y={3}/>
        <Text color="#b9b9b9" h1>Contact Info:</Text>
        <Spacer y={3}/>
        <Grid direction="row" xs={12} sm={12} lg={6} alignItems='center' justify='center'>
        <Text color="#b9b9b9" h2><a href="mailto:dandervich@hotmail.com"><MdEmail /></a></Text>
        <Spacer x={1}/>
        <Text color="#b9b9b9" h2><a href="tel:+5491170088477"><FaPhoneAlt /></a></Text>
        <Spacer x={1}/>
        <Text color="#b9b9b9" h2><a href="https://discord.com/users/eldervo77#2315" target="_blank" rel='noreferrer'><FaDiscord /></a></Text>
        <Spacer x={1}/>
        <Text color="#b9b9b9" h2><a href="https://github.com/dan-dervich" target="_blank" rel='noreferrer'><GoMarkGithub /></a></Text>
        </Grid>
        </Grid.Container>
    )
}
export default Contact