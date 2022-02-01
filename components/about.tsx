import { Grid, Spacer, Text } from "@nextui-org/react"

function AboutMe(){
    return(
        <Grid.Container id="about" alignItems="center" direction="column" style={{minHeight: '40vh', backgroundColor: '#181818'}}>
            <Grid direction="row">
        <Text color="#b9b9b9" h1>Hi, I&apos;m Dan Dervich 👋</Text>
            </Grid>
        <Spacer y={1}/>
        <Text color="#525252" style={{textAlign: 'center'}} h4>A full-stack developer based in Buenos Aires, Argentina. I love to work with clients and to learn new stuff everyday. I have a knack for all things <br /> launching products, from planning and designing all the way to solving real-life problems with code. When <br /> not online, I hang out with friends  or relax with my family.</Text>
        </Grid.Container>
    )
}

export default AboutMe