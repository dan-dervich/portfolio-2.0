import { Card, Grid, Link, Spacer, Text } from "@nextui-org/react"
import { GoMarkGithub } from 'react-icons/go';
// GoMarkGithub


const Repos: any = ({data}:any)=>{
    return(
        <Grid.Container gap={1} id="repos" wrap="wrap" justify="center" alignItems="stretch" direction="row" style={{backgroundColor: "#181818", width: '100%', padding: 0, margin: 0}}>
            {data.data?.map((e:any)=>{
              let name:string = e.name.replace(/-/g, ' ')
              function capitalizeTheFirstLetterOfEachWord(words:string) {
                var separateWord = words.toLowerCase().split(' ');
                for (var i = 0; i < separateWord.length; i++) {
                   separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
                   separateWord[i].substring(1);
                }
                return separateWord.join(' ');
             }
        return(
          <Grid key={e.id} lg={4} md={4} sm={5} xs={12} >
              <Card style={{backgroundColor: '#525252', borderRadius: '4px', width: "100%"}} shadow>
                  <Grid.Container direction="row" alignItems="center">
                  <Grid lg={10} md={10} sm={10} xs={10}>
                <Text color="black" h2>{capitalizeTheFirstLetterOfEachWord(name)}</Text>
                  </Grid>
                <Grid alignItems="flex-end" justify="flex-end" xs={0} sm={1} md={1} lg={1}>
          <a href={e.svn_url} target="_blank" rel="noreferrer">
          <GoMarkGithub  style={{backgroundColor: '#525252', margin: 20, transition: '.2s all ease'}} />
          </a>
                </Grid>
                  </Grid.Container>
                  {e.description ?  <><Text color="black" style={{fontSize: '1.25em'}} >{e.description}</Text><Spacer y={1.5}/></> : ''}
                  <Grid.Container justify="flex-start" alignItems="center" direction="row">
          <Grid xs={6}>
          {e.homepage ?<Link href={e.homepage} target="_blank" style={{color: '#111', fontSize: '1.25em'}} underline>
            HomePage
          </Link>: ''}
          </Grid>
          <Grid xs={6} sm={0} md={0} lg={0} xl={0} justify="flex-end">
          <a href={e.svn_url} target="_blank" rel="noreferrer">
          <GoMarkGithub style={{backgroundColor: '#525252', margin: 20, transition: '.2s all ease'}} />
          </a>
          </Grid>
                  </Grid.Container>
              </Card>
          </Grid>
        )
      })}
        </Grid.Container>
    )
}

export default Repos