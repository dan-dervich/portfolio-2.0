import { Grid, Text } from "@nextui-org/react"

function Footer(){
    return(
        <Grid.Container justify="center" alignItems="center" style={{backgroundColor: "#181818"}}>
            <Text color="#8b8b8b" h5><a href="mailto:dandervich@hotmail.com">dandervich@hotmail.com</a> © Dan Dervich. All Rights Reserved.</Text>
        </Grid.Container>
    )
}
export default Footer