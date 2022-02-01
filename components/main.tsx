import { Grid, Button, Spacer, Text } from '@nextui-org/react'

const Main: any = ()=>{
    return(
        <>
        <Grid.Container style={{minHeight: '100vh', backgroundColor: '#181818'}} direction='column' justify='center' alignItems='center'>
        <Text color='#b9b9b9' size="5em" style={{textAlign: 'center'}} h1>Hello, I&apos;m Dan Dervich</Text>
        <Text color='#4f4e4d' style={{textAlign: 'center'}} h2>And I&apos;m a Full-Stack Developer</Text>
        <Spacer y={1}/>
        <a href='#repos' style={{userSelect: 'none', cursor: "url('data:image/svg+xml,%0A%3Csvg width='8px' height='8px' viewBox='0 0 8 8' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Ccircle id='Cerce' fill='%23333333' cx='4' cy='4' r='4'%3E%3C/circle%3E%3C/g%3E%3C/svg%3E'), none"}}>
        <Button color="gradient" style={{fontSize: "1em", userSelect: 'none', cursor: "url('data:image/svg+xml,%0A%3Csvg width='8px' height='8px' viewBox='0 0 8 8' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Ccircle id='Cerce' fill='%23333333' cx='4' cy='4' r='4'%3E%3C/circle%3E%3C/g%3E%3C/svg%3E'), none"}} type='button'>See My Work</Button>
        </a>
        </Grid.Container>
        </>
    )
}

export default Main