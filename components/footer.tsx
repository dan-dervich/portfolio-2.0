import { Grid, Text } from "@nextui-org/react"

function Footer(){
    return(
        <Grid.Container justify="center" alignItems="center" style={{backgroundColor: "#181818", paddingBottom: 20}}>
            <Text color="#8b8b8b" h4><a style={{color: "#b9b9b9"}} href="mailto:dandervich@hotmail.com">dandervich@hotmail.com</a> © Dan Dervich. All Rights Reserved.</Text>
        </Grid.Container>
    )
}
export default Footer