import { Grid, Spacer, Text } from "@nextui-org/react"

function AboutMe(){
    return(
        <>
        <Grid.Container id="about" alignItems="center" direction="column" style={{minHeight: '40vh', backgroundColor: '#181818'}}>
        <Spacer y={1}/>
        <Text color="#c7c5c1" style={{textAlign: 'center'}} h3>I love to work with clients and to face new challenges everyday. My goal as a developer is to make clean efficient code that is <br /> maintainable long term. My first glance at coding was with David Malan on the infamous CS50 HavardX course. <br /> I then progressed to CS50W where I found my true love for web development.</Text>
        </Grid.Container>
        </>
    )
}

export default AboutMe